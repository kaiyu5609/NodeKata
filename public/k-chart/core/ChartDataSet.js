define(function(require, exports, module) {
    var Utils = require('k-chart/Utils');
    var Observer = require('k-chart/core/Observer');
    var matrix = require('k-chart/core/matrix');

    // 随机数据
    function getRandom(start, stop) {
        return Math.floor(Math.random() * (stop - start) + start);
    }

    class ChartDataSet extends Observer {

        constructor(options) {
            super(options);

            var defaults = {
                width: 600,
                height: 300,
                grid: {
                    left: 15,
                    bottom: 15,
                    right: 15,
                    top: 15
                }
            };
            var self = this;

            this.options = Utils.merge(defaults, options);
            this.datas = [];

            // console.log(this.options);

            this.$watch('resize', function(resize) {
                self.options = Utils.merge(self.options, resize);
                self.setScales();
            });
        }

        // 获取布局信息
        _getLayoutData(domains) {
            return this.layoutData = matrix({
                width: this.options.width,
                height: this.options.height,
                leftVal: this.options.grid.left,
                bottomVal: this.options.grid.bottom,
                rightVal: this.options.grid.right,
                topVal: this.options.grid.top,
                hSymmetrical: this.options.grid.hSymmetrical
            }, domains);
        }

        // 设置比例尺
        setScales(data) {
            if (this.options.grid.display === 'none') { return false; }
            data = data || this.datas;

            var self = this;
            var scales;
            var domains;
            var layoutData;
            var ranges;
            var extents = {
                time: function(data) {
                    return Utils.extent(data, function(d) {
                        return new Date(d.time).getTime();
                    });
                },
                linear: function(data) {
                    return Utils.extent(data, function(d) {
                        return +d.value;
                    });
                },
                klinear: function(data) {
                    var low = Utils.min(data, function(d) {
                        return +d.low;
                    });
                    var high = Utils.max(data, function(d) {
                        return +d.high;
                    });
                    return [low, high];
                }
            };

            scales = self.options.axis.map(function(axis, index) {
                if (!axis) { return null; }
                var extent = extents[axis.type](data);
                var scale = Utils[axis.type];
                extent = axis.extent(extent) || extent;
                return scale(extent);
            });

            domains = scales.map(function(scale, index) {
                if (!scale) { return null; }
                return scale.ticks().map(function(label) {
                    return self.options.axis[index].tick.label(label);
                });
            });

            layoutData = this._getLayoutData(domains);
            // console.log(layoutData);

            ranges = [
                [self.options.height - layoutData.bottomVal, layoutData.topVal],
                [layoutData.leftVal, self.options.width - layoutData.rightVal],
                [layoutData.leftVal, self.options.width - layoutData.rightVal],
        		[layoutData.topVal, self.options.height - layoutData.bottomVal]
            ];

            // console.log('domains:', domains);
            // console.log('layoutData:', layoutData);
            // console.log('ranges:', ranges);

            scales.forEach(function(scale, index) {
                if (!scale) { return null; }
        		return scale.range(ranges[index]);
        	});

            self['scales'] = scales;

        }

        // 获取比例尺
        getScales(index) {
            var map = { 'left': 0, 'bottom': 1, 'right': 2, 'top': 3 };
            if (typeof index === 'string') {
                index = map[index];
            }
            return (index !== undefined) ? this.scales[index] : this.scales;
        }

        // 获取坐标轴的数据
        getAxisData() {
            var self = this;
            var layoutData = this.layoutData;
            var axisData = [
                { 'orient': 'left',   'anchor': 'end',    'rotateAnchor': 'end', 'rotate': layoutData.leftDeg,   'x': -6, 'y': 4, 'ticks': [] },
                { 'orient': 'bottom', 'anchor': 'middle', 'rotateAnchor': 'end', 'rotate': layoutData.bottomDeg, 'x': 0, 'y': 18, 'ticks': [] },
                { 'orient': 'right',  'anchor': 'start',  'rotateAnchor': 'end', 'rotate': layoutData.rightDeg,  'x': 6, 'y': 4,  'ticks': [] },
                { 'orient': 'top',    'anchor': 'middle', 'rotateAnchor': 'end', 'rotate': layoutData.topDeg,    'x': 0, 'y': -5, 'ticks': [] }
            ];

            var translates = {
                0: function(v) {
                    return [layoutData.leftVal, v];
                },
                1: function(v) {
                    return [v, self.options.height - layoutData.bottomVal];
                },
                2: function() {},
                3: function() {}
            };

            // console.log(axisData)

            return axisData.map(function(axis, index) {
                var scale = self.scales[index], ticks;
                if (!scale) {
                    return axis;
                }
                ticks = scale.ticks();

                axis.ticks = ticks.map(function(tick) {
                    return {
                        x: axis.x,
                        y: axis.y,
                        translate: translates[index](scale(tick)),
                        rotate: axis.rotate,
                        anchor: axis.rotate ? axis.rotateAnchor : axis.anchor,
                        tick: self.options.axis[index]['tick']['label'](tick) || tick,
                        value: tick
                    };
                });

                return axis;
            });

        }

        // 获取网格线的数据
        getGridLineData() {
            var scaleX = this.scales[1];
            var scaleY = this.scales[0];
            var rangeX = scaleX.range();
            var ticksX = scaleX.ticks();
            var rangeY = scaleY.range();
            var ticksY = scaleY.ticks();
            var result = [];

            ticksX.forEach(function(d, i) {
        		result.push({
        			x: scaleX(d) + 0.5,
        			y: 0,
        			y1: rangeY[0],
        			y2: rangeY[1]
        		});
        	});

            ticksY.forEach(function(d, i) {
        		result.push({
        			x: rangeX[0] - 1,
        			y: scaleY(d) + 0.5,
        			x1: 0,
        			x2: rangeX[1] - rangeX[0] + 2,
        			style: (d === 0 && i !== 0) ? 'graph-zero' : ''
        		});
        	});

            return result;
        }

        // 获取网格事件触发层数据
        getGridLayerData() {
            var self = this;
            return [{
                left: self.layoutData.leftVal + 1,
                top: self.layoutData.topVal + 1,
                width: self.layoutData.plotWidth,
                height: self.layoutData.plotHeight
            }];
        }

        // 十字辅助线的数据
        getAxisSublineData(mouse) {
            var self = this, xScale, datas, index, item, _mouse;

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
                _mouse[0] = xScale(item.time);
            } else {
                _mouse = [-99999, -99999];
            }

            return [{
                klass: 'subline axis-subline-vertical',
                y1: self.layoutData.topVal,
                y2: self.options.height - self.layoutData.bottomVal,
                x: _mouse[0],
                y: 0
            }, {
                klass: 'subline axis-subline-horizontal',
                x1: self.layoutData.leftVal,
                x2: self.options.width - self.layoutData.rightVal,
                x: 0,
                y: _mouse[1] + self.layoutData.topVal
            }];
        }

        // 获取坐标轴提示信息数据
        getAxisTipsData(mouse) {
            /**
                [
                    { "x": 43, "y": 197, "size": 40, "value": "18.20" },
                    { "x": 450, "y": 270, "size": 40, "value": "13:09" },
                    { "x": 787, "y": 197, "size": 0, "value": null },
                    { "x": 450, "y": 15, "size": 0, "value": null }
                ]
            */
            var self = this;
            var xScale, datas, index, item, _mouse;

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
                _mouse[0] = xScale(item.time);
            } else {
                _mouse = [-99999, -99999];
            }

            var xMap = {
                0: self.layoutData.leftVal,
                1: _mouse[0],
                2: self.options.width - self.layoutData.rightVal,
                3: _mouse[0]
            };
            var yMap = {
                0: _mouse[1] + self.layoutData.topVal,
                1: self.options.height - self.layoutData.bottomVal,
                2: _mouse[1] + self.layoutData.topVal,
                3: self.layoutData.topVal
            };

            var fnTransformValue = {
                0: function(axis, scale, x) {
                    var extent = scale.extent;
                    var n = Math.abs(1 - (x / self.layoutData.plotHeight)) * (extent[1] - extent[0]);
                    var v = Math.floor((n + extent[0]) * 10) / 10;
                    return axis['tick']['label'](v) || v;
                },
                1: function(axis, scale, x) {
                    return item ? axis['tick']['label'](item.time) : '';
                },
                2: function(axis, scale, x) {},
                3: function(axis, scale, x) {}
            };

            return this.scales.map(function(scale, index) {
                var value = fnTransformValue[index](self.options.axis[index], scale, _mouse[(index % 2) ^ 1]);
                return {
                    x: xMap[index],
                    y: yMap[index],
                    size: value ? Utils.measure(value).width + 10 : 0,
                    value: value
                };
            });
        }

        // 获取K线图的数据 [time, open, high, low, close, series]
        getCandlestickData() {
            return this.datas.map(function(d) {
                return [d.time, d.open, d.high, d.low, d.close, d.series];
            });
        }

        // 获取信息提示框的数据
        getTooltipsData(mouse) {
            var self = this;
            var xScale, datas, index, item, _mouse, data = [];

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
            } else {
                _mouse = [-99999, -99999];
            }

            for (var k in item) {
                var obj = [];
                obj[0] = k;
                obj[1] = item[k];
                data.push(obj);
            }

            var tips = [{
                left: _mouse[0] < 0 ? _mouse[0] + 'px' : (_mouse[0] > self.layoutData.plotWidth / 2 ? parseInt(self.layoutData.leftVal) + 'px' : ''),
                right: _mouse[0] < 0 ? '' : (_mouse[0] < self.layoutData.plotWidth / 2 ? parseInt(self.layoutData.rightVal) + 'px' : ''),
                top: _mouse[1] < 0 ? _mouse[1] + 'px' : (self.layoutData.topVal + 2) + 'px',
                data: data
            }];

            return tips;
        }

        setData(data, flag) {
            var self = this;

            if (flag) {
                this.datas = this.datas.concat(data);
            } else {
                this.datas = data;
            }

            this.setScales(this.datas);
        }

    }

    module.exports = ChartDataSet;

});

define(function(require, exports, module) {

    var Utils = require('k-chart/Utils');
    var observer = require('k-chart/core/Observer');
    var matrix = require('k-chart/core/matrix');


    class ChartDataSet extends observer {

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

            this.options = Utils.merge(defaults, options);
            this.datas = [];

        }

        setScales(data) {
            var self = this;
            var scales;
            var domains;
            var ranges;
            var layoutData;
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

            data = data || this.datas;

            function setUp(data) {
                scales = self.options.axis.map(function(axis, index) {
                    if (axis) {
                        var extent = extents[axis.type](data);
                        var scale = Utils[axis.type];
                        return scale(extent);
                    }
                    return null;
                });

                domains = scales.map(function(scale, index) {
                    return scale ? scale.ticks().map(function(label) {
                        return self.options.axis[index].tick.label(label);
                    }) : null;
                });

                layoutData = self.layoutData = matrix({
                    width: self.options.width,
                    height: self.options.height,
                    leftVal: self.options.grid.left,
                    bottomVal: self.options.grid.bottom,
                    rightVal: self.options.grid.right,
                    topVal: self.options.grid.top,
                    hSymmetrical: self.options.grid.hSymmetrical
                }, domains);

                console.log('domains:', domains);
                console.log('layoutData:', layoutData);

                ranges = [
                    [layoutData.topVal, self.options.height - layoutData.bottomVal],
                    [layoutData.leftVal, self.options.width - layoutData.rightVal],
                    [layoutData.leftVal, self.options.width - layoutData.rightVal],
            		[layoutData.topVal, self.options.height - layoutData.bottomVal]
                ];

                console.log('ranges:', ranges);

                scales.forEach(function(scale, index) {
            		return scale ? scale.range(ranges[index]) : null;
            	});

                self['scales'] = scales;

            }

            setUp(data);
        }

        getGridLineData() {
            var scaleX = this.scales[1];
            var scaleY = this.scales[0];
            var rangeX = scaleX.range();
            var ticksX = scaleX.ticks();
            var rangeY = scaleY.range();
            var ticksY = scaleY.ticks();
            var result = [];

            ticksX.forEach(function(d) {
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
        			style: d === 0 ? 'graph-zero' : ''
        		});
        	});

            return result;
        }

        setData(data, flag) {
            var self = this;

            if (flag) {
                this.datas = this._datas.concat(data);
            } else {
                this.datas = data;
            }

            this.setScales(this.datas);

            setInterval(function() {
                var rdm = getRandom(100, 600);
                self.options.width = rdm;
                self.setScales(self.datas);
            }, 1000);
        }

    }

    function getRandom(start, stop) {
        return Math.floor(Math.random() * (stop - start) + start);
    }

    module.exports = ChartDataSet;

});

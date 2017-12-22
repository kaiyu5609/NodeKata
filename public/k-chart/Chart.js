define(function(require, exports, module) {
    var { d3 } = require('../core/shim/shim');
    var EventEmitter = require('../core/event-emitter/EventEmitter');

    var Utils = require('./core/Utils');
    var ChartDataSet = require('./core/ChartDataSet');

    var d3SvgPaint = require('./elements/d3SvgPaint');
    var d3SvgGridLine = require('./elements/d3SvgGridLine');
    var d3SvgAxisNode = require('./elements/d3SvgAxisNode');
    var d3SvgAxisTips = require('./elements/d3SvgAxisTips');
    var d3SvgGridLayer = require('./elements/d3SvgGridLayer');
    var d3SvgAxisSubline = require('./elements/d3SvgAxisSubline');
    var d3SvgTooltips = require('./elements/d3SvgTooltips');

    class Chart extends EventEmitter {

        constructor(options) {
            super(options);

            var defaults = {
                width: options.domEl.offsetWidth || 600,
                height: 300,
                grid: {
                    left: 15,
                    bottom: 15,
                    right: 15,
                    top: 15,
                    display: 'block'
                },
                axis: [{
                    type: 'linear',
                    extent: function(extent) {
                        return extent;
                    },
                    tick: {
                        label: function(label) {
                            return label;
                        }
                    }
                }, {
                    type: 'time',
                    extent: function(extent) {
                        return extent;
                    },
                    tick: {
                        label: function(label) {
                            return Utils.timeFormat(label);
                        }
                    }
                }, null, null]
            };

            this.options = options = Utils.merge(defaults, options);

            // console.log(options);

            this.container = d3.select(options.domEl);

            this._dataSet = new ChartDataSet(options);

            this._bindEvents();

            this._dataSet.setData(this._getChartDefaultData());
        }

        _bindEvents() {
            var self = this, options = this.options;

            // this.chartStore.$watch
            this._dataSet.$watch('scales', function(scales) {
                // 绘制SVG
                self.context = d3SvgPaint(options);

                // 绘制网格线和坐标轴
                if (options.grid.display === 'block') {
                    // 网格线
                    var gridLineData = this.getGridLineData();
                    self.context.call(d3SvgGridLine, gridLineData);

                    // 坐标轴
                    var axisData = this.getAxisData();
                    self.context.call(d3SvgAxisNode, axisData);

                }
            });

            this.on('plot-did-mount', function() {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData();
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData();
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 网格事件触发层
                var gridLayerData = self._dataSet.getGridLayerData();
                var gridLayer = d3SvgGridLayer(self.context, gridLayerData);
                gridLayer.on('mousemove', function(ev) {
                    var mouse = d3.mouse(this);
                    self.fire('axis-subline-enter', mouse);
                }).on('mouseout', function (ev) {
                    self.fire('axis-subline-leave');
                });
            });

            this.on('axis-subline-enter', function(mouse) {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData(mouse);
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData(mouse);
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 信息提示框
                var tooltipsData = self._dataSet.getTooltipsData(mouse);
                self.container.call(d3SvgTooltips, tooltipsData);
            }).on('axis-subline-leave', function() {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData();
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData();
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 信息提示框
                var tooltipsData = self._dataSet.getTooltipsData();
                self.container.call(d3SvgTooltips, tooltipsData);
            });

            // 浏览器窗口大小发生改变
            Utils.bind(window, 'resize', function(ev) {
                // console.log('resize', ev);
                var offsetWidth = options.domEl.offsetWidth;
                if (offsetWidth === options.width) { return false; }

                // console.log(offsetWidth);

                options.width = offsetWidth;
                self._dataSet.resize = { width: offsetWidth };
            });


        }

        _getChartDefaultData() {
            return [
                { time: "2016/8/2 09:30", series: "深圳成指", open: 0, high: 10, low: 0, close: 0 },
                { time: "2016/8/2 15:00", series: "深圳成指", open: 0, high: 10, low: 0, close: 0 }
            ];
        }

        render(data) {
            // console.log("chart's render");

            this._isEmptyPlot = false;
            if (!data.length) {
                this._isEmptyPlot = true;
                data = this._getChartDefaultData();
            }

            this._dataSet.setData(data);
        }
    }

    module.exports = Chart;
});

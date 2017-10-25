define(function(require, exports, module) {
    var d3 = require('d3');
    var EventEmitter = require('k-chart/core/event-emitter/EventEmitter');
    var Utils = require('k-chart/Utils');

    var ChartDataSet = require('k-chart/core/ChartDataSet');

    var d3SvgPaint = require('k-chart/elements/d3SvgPaint');
    var d3SvgGridLine = require('k-chart/elements/d3SvgGridLine');

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
                    tick: {
                        label: function(label) {
                            return label;
                        }
                    }
                }, {
                    type: 'time',
                    tick: {
                        label: function(label) {
                            return Utils.timeFormat(label);
                        }
                    }
                }, null, null]
            };

            this.options = options = Utils.merge(defaults, options);

            console.log(options);

            var container = this.container = d3.select(options.domEl);

            var dataSet = this._dataSet = new ChartDataSet(options);

            var context = this.context = d3SvgPaint(options);

            dataSet.$watch('scales', function(scales) {
                
                if (options.grid.display === 'block') {
                    var gridLineData = this.getGridLineData();
                    context.call(d3SvgGridLine, gridLineData);
                }




            });


        }

        render(data) {
            console.log('chart-render');
            this._dataSet.setData(data);
        }
    }

    module.exports = Chart;
});

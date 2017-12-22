define(function(require, exports, module) {
    var Utils = require('../core/Utils');
    var Chart = require('../Chart');
    var d3SvgCandlestick = require('../shapes/d3SvgCandlestick');

    class Candlestick extends Chart {

        constructor(options) {
            var defaults = {
                axis: [{
                    type: 'klinear'
                }]
            };

            options = Utils.merge(defaults, options);

            super(options);

            this.options = options;

            this._bindSelfEvents();
        }

        _bindSelfEvents() {
            var self = this;

            this._dataSet.$watch('scales', function(scales) {
                var data = [], size = 0, band = 1;

                if (!self._isEmptyPlot) {
                    data = this.getCandlestickData();
                    size = data.length;
                }

                if (size) {
                    band = Math.floor(this.layoutData.plotWidth / size * 0.6);
                    band = band < 15 ? band : 15;
                    band = band > 1 ? band : 1;
                }

                self.context.call(d3SvgCandlestick, function(v) {// xScale
                    return scales[1](v) - band / 2;
                }, function(v) {// yScale
                    return scales[0](v);
                }, function(v) {// wScale
                    return band;
                }, data);

                self.fire('plot-did-mount');
            });

            Utils.bind(window, 'resize', function(ev) {
                console.log('resize');
            });
        }

        render(data) {
            super.render(data);
        }
    }

    module.exports = Candlestick;
});

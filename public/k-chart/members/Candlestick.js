define(function(require, exports, module) {
    var d3 = require('d3');
    var Utils = require('k-chart/Utils');
    var Chart = require('k-chart/Chart');

    // console.log("Utils", Utils);

    class Candlestick extends Chart {
        constructor(options) {
            var defaults = {

            };

            options = Utils.merge(defaults, options);

            super(options);

            this.options = options;

            this._dataSet.$watch('scales', function(scales) {
                // console.log(scales);
            });
        }

        render(data) {
            super.render(data);
            // console.log('kline-render2');
        }
    }

    module.exports = Candlestick;
});

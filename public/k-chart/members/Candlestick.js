define(function(require, exports, module) {
    var d3 = require('d3');
    var Utils = require('k-chart/Utils');
    var Chart = require('k-chart/Chart');


    // console.log("Utils", Utils);

    class Candlestick extends Chart {
        constructor(options) {
            super(options);
        }

        render() {
            // console.log('kline-render2');
        }
    }

    module.exports = Candlestick;
});

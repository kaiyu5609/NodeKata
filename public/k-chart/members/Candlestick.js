define(function(require, exports, module) {
    var d3 = require('d3');
    var Utils = require('k-chart/Utils');
    var Chart = require('k-chart/Chart');




    class Candlestick extends Chart {
        constructor(options) {
            super(options);
        }

        render() {
            console.log('render2');
        }
    }

    module.exports = Candlestick;
});

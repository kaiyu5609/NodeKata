define(function(require, exports, module) {
    var Utils = require('k-chart/core/Utils');
    var ChartDataSet = require('k-chart/core/ChartDataSet');

    class CandlestickDataSet extends ChartDataSet {

        constructor(options) {
            super(options);
        }

    }

    module.exports = CandlestickDataSet;

});

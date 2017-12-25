define(function(require, exports, module) {
    var Utils = require('./Utils');
    var ChartDataSet = require('./ChartDataSet');

    class CandlestickDataSet extends ChartDataSet {

        constructor(options) {
            super(options);
        }

    }

    module.exports = CandlestickDataSet;

});

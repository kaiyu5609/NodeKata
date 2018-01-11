define(function(require, exports, module) {

    var Chart = require('./Chart');
    var Candlestick = require('./Components/candlestick/Candlestick');

    module.exports = {
        Chart: Chart,
        Candlestick: Candlestick
    };
});

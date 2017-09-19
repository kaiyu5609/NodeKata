require.config({
   baseUrl: '/',
   paths: {
       jquery: './lib/jquery/dist/jquery',
       d3: './lib/d3/d3.min'
   }
});


define(function(require, exports, module) {

    var $ = require('jquery');
    var Chart = require('k-chart/Chart');
    var Candlestick = require('k-chart/members/Candlestick');



    var kline = new Candlestick({
        domEl: document.getElementById('candlestick'),
        width: 500,
        height: 400
    });

    kline.render();



});

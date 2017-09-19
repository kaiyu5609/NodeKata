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
        height: 400,
        dataSet: null
    });

    kline.render();

    kline.on('k-event', function(data) {
          console.log(data);
    });

    setTimeout(function() {
        kline.fire('k-event', 13412515);
    }, 500);


});

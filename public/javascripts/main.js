require.config({
   baseUrl: '/',
   paths: {
       jquery: './lib/jquery/dist/jquery',
       d3: './lib/d3/d3.min'
   }
});


define(function(require, exports, module) {

    // request
    // require('test/core/request/Request');




    var $ = require('jquery');
    var Chart = require('k-chart/Chart');
    var Candlestick = require('k-chart/members/Candlestick');

    /*var options = {
        domEl: document.getElementById('candlestick'),
        dataSet: null,
        title: {
            left: 'center',
            // right: '',
            text: 'K线图'
        },
        grid: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: 500,
            height: 400
        },
        series: {
            item: {

            }
        },
        scales: [
            {

            }, {

            }
        ],
        tooltip: {
            bordeRadius: 4,
            borderWidth: 1,
            borderColor: '#09d',
            backgroundColor: '#09d',
            textStyle: {
                fontSize: 12,
                color: '#333'
            },
            position: function (pos, params, el, elRect, size) {

            }
        },
        legend: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            data: []
        },
        animation: false
    };*/

    var options = {
        domEl: document.getElementById('candlestick'),
        dataSet: null,
        title: {
            left: 'center',
            // right: '',
            text: 'K线图'
        },
        grid: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: 500,
            height: 400
        },
        series: {
            item: {

            }
        },
        scales: [
            {

            }, {

            }
        ],
        animation: false
    };

    var kline = new Candlestick(options);

    kline.render();


});

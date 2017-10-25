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

    // matrix
    // require('test/core/matrix');



    var Utils = require('k-chart/Utils');
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
            left: 50,
            right: 15,
            // display: 'none'
        },
        series: {
            item: {

            }
        },
        axis: [
            {
                type: 'klinear'
            }
        ],
        animation: false
    };

    var kline = new Candlestick(options);

    var data = [
        {
            time: "2016/8/2 09:30",
            series: "深圳成指",
            open: 19.79,
            high: 19.79,
            low: 17.85,
            close: 18.8
        }, {
            time: "2016/8/2 10:30",
            series: "深圳成指",
            open: 18.89,
            high: 18.8,
            low: 17.86,
            close: 17.95
        }, {
            time: "2016/8/2 11:30",
            series: "深圳成指",
            open: 18.05,
            high: 17.97,
            low: 17.25,
            close: 17.7
        }, {
            time: "2016/8/2 14:00",
            series: "深圳成指",
            open: 18.3,
            high: 17.5,
            low: 17.41,
            close: 18.2
        }, {
            time: "2016/8/2 15:00",
            series: "深圳成指",
            open: 19.3,
            high: 18.28,
            low: 18.21,
            close: 19.2
        }
    ];

    setTimeout(function() {
        kline.render(data);
    }, 500);



});

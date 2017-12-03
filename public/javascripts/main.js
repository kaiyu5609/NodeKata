require.config({
   baseUrl: '/',
   paths: {
       jquery: './lib/jquery/dist/jquery',
       d3: './lib/d3/d3.min',
       database: './javascripts/data'
   }
});


define(function(require, exports, module) {

    // request
    // require('test/core/request/Request');

    // matrix
    // require('test/core/matrix');

    // Utils
    require('test/core/Utils');

    


    var Utils = require('k-chart/core/Utils');
    var $ = require('jquery');
    var Chart = require('k-chart/Chart');

    var Candlestick = require('k-chart/members/Candlestick');
    var database = require('database');

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
            left: 30,
            right: 15,
            hSymmetrical: true
            // display: 'none'
        },
        series: {
            item: {

            }
        },
        axis: [
            {
                extent: function(d) {
                    // return [d[0] * 1000000, d[1] * 1000000];
                },
                tick: {
                    label: function (d) {
                        // console.log(d)
                    }
                }
            }
        ],
        animation: false
    };

    var kline = new Candlestick(options);


    database.queryKlineData().then(function(data) {
        var _data = data;
        data = [];

        _data.forEach(function(d, i) {
            if (i % 4 === 0) {
                data.push(d);
            }
        });

        setTimeout(function() {
            kline.render(data);
        }, 500);


        setTimeout(function() {
            // kline.render([]);
        }, 1500);
    });

    // var xline = 100, yline = 20;
    // setInterval(function () {
    //     xline += 10;
    //     yline += 10;
    //     kline.fire('axis-subline-enter', [xline, yline]);
    // }, 1000);


    $('.btn').on('click', function() {
        $('#candlestick').show();
    })
});

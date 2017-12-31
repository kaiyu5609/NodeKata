require.config({
   baseUrl: '/',
   paths: {
       jquery: './lib/jquery/dist/jquery.min',
       d3: './lib/d3/d3.min',
       lodash: './lib/lodash/dist/lodash.min',
       database: './javascripts/data'
   }
});


define(function(require, exports, module) {
    var $ = require('jquery');
    var d3 = require('d3');
    var lodash = require('lodash');
    var Request = require('../core/request/Request');

    // request
    // require('test/core/request/Request');

    // matrix
    // require('test/k-chart/core/matrix');

    // Utils
    // require('test/k-chart/core/Utils');

    // DataSet
    // var DataSet = require('dataset/DataSet');
    // var dataset = new DataSet({});
    // console.log(dataset);

    // ArrayRowDataSet
    // lodash、fecha、numeral、decimal、expr、pinyin
    var ArrayRowDataSet = require('data/memory/ArrayRowDataSet');

    var columns = [
        { dataIndex: 'id', vtype: 'number' },
        { dataIndex: 'name', vtype: 'cn_string' },
        { dataIndex: 'score1', vtype: 'number' },
        { dataIndex: 'score2', vtype: 'number' }
    ];

    var datas = [
        { 'id': 1, 'name': '交易重演', 'score1': 90, 'score2': 82 },
        { 'id': 2, 'name': '实时监控', 'score1': 98, 'score2': 85 },
        { 'id': 3, 'name': '访问控制', 'score1': 85, 'score2': 80 },
        { 'id': 4, 'name': '市场分析', 'score1': 85, 'score2': 79 }
    ];

    var arrayRowDataSet = new ArrayRowDataSet({
        columnModel: columns,
        data: datas
    });
    console.log(arrayRowDataSet);

    var orderResult = arrayRowDataSet.orderBy(['-score1']).done();
    console.log(orderResult);
    arrayRowDataSet.orderBy(['-score1', '-score2']).limit(0, 2).value().then(function(res) {
        console.log(res.data);
    });

    var maxVal = arrayRowDataSet.max('score1').then(function(res) {
        console.log(res);
    });

    var Utils = require('chart/core/Utils');
    var Chart = require('chart/Chart');
    var Candlestick = require('chart/members/Candlestick');

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

    var queryKlineData = Request({
        url: '/query/kline-data-1'
    }).get().then(function(res) {
        var _data = res.data;
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

});

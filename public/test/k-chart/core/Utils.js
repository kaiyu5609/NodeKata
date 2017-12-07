define(function(require, exports, module) {

    var Utils = require('k-chart/core/Utils');

    console.log(Utils);

    var data = [
        {"time":"2016/8/2 09:30","series":"深圳成指","open":19.79,"high":19.79,"low":17.85,"close":18.85},
        {"time":"2016/8/2 09:31","series":"深圳成指","open":18.8,"high":18.89,"low":17.86,"close":17.95},
        {"time":"2016/8/2 09:32","series":"深圳成指","open":17.97,"high":18.05,"low":17.25,"close":17.7},
        {"time":"2016/8/2 09:33","series":"深圳成指","open":17.5,"high":18.3,"low":17.41,"close":18.2},
        {"time":"2016/8/2 09:34","series":"深圳成指","open":18.28,"high":19.3,"low":18.21,"close":19.2},
        {"time":"2016/8/2 09:35","series":"深圳成指","open":19.22,"high":19.39,"low":18.76,"close":19.09},
        {"time":"2016/8/2 09:36","series":"深圳成指","open":18.92,"high":19.48,"low":18.86,"close":19.2},
        {"time":"2016/8/2 09:37","series":"深圳成指","open":19.2,"high":19.36,"low":18.48,"close":18.75},
        {"time":"2016/8/2 09:38","series":"深圳成指","open":18.5,"high":18.84,"low":18.4,"close":18.4},
        {"time":"2016/8/2 09:39","series":"深圳成指","open":18.4,"high":19.44,"low":18.35,"close":19.36},

        {"time":"2016/8/2 09:30","series":"深圳综指","open":21.25,"high":21.94,"low":21.2,"close":21.81},
        {"time":"2016/8/2 09:31","series":"深圳综指","open":21.79,"high":22.68,"low":21.63,"close":22.52},
        {"time":"2016/8/2 09:32","series":"深圳综指","open":22.5,"high":22.86,"low":22.15,"close":22.61},
        {"time":"2016/8/2 09:33","series":"深圳综指","open":22.68,"high":23.15,"low":22.36,"close":22.5},
        {"time":"2016/8/2 09:34","series":"深圳综指","open":22.44,"high":22.8,"low":22.08,"close":22.23},
        {"time":"2016/8/2 09:35","series":"深圳综指","open":22.12,"high":22.4,"low":21.81,"close":21.98},
        {"time":"2016/8/2 09:36","series":"深圳综指","open":21.97,"high":22.12,"low":21.68,"close":21.8},
        {"time":"2016/8/2 09:37","series":"深圳综指","open":21.89,"high":22.21,"low":21.89,"close":22.15},
        {"time":"2016/8/2 09:38","series":"深圳综指","open":22.2,"high":22.39,"low":21.95,"close":21.98},
        {"time":"2016/8/2 09:39","series":"深圳综指","open":21.95,"high":21.98,"low":21.25,"close":21.57}
    ];

    function getCategorySeries(data) {
        var category = [], series = [], _category = {}, _series = {};
        data.forEach(function (item, index) {
            var t = item['time'], s = item['series'];
            if (!_category.hasOwnProperty(t)) {
                _category[t] = 1;
                category.push(item.time);
            }
            if (!_series.hasOwnProperty(s)) {
                _series[s] = 1;
                series.push(item.series);
            }
        });
        return {
            category: category,
            series: series
        };
    }

    var cs = getCategorySeries(data);

    console.log(cs);

    function getData(data) {
        var res = cs.series.map(function(s, i) {
            var buffer = [], d = {};

            data.forEach(function(item, index) {
                if (item['series'] === s) {
                    d.name = s;
                }
                buffer.push(d);
            });

            return buffer;

        });

        console.log(res);
    }

    getData(data)
















});

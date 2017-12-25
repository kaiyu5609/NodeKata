define(function(require, exports, module) {

    var chart = require('./chart/index');
    var grid = require('./grid/index');
    var data = require('./data/index');

    module.exports = {
        chart: chart,
        grid: grid,
        data: data
    };
});

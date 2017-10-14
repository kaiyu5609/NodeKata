define(function(require, exports, module) {

    var Utils = require('k-chart/Utils');

    var options = {
        width: 800,
        height: 400
    };

    var tickLabelList = [
        ["15.12", "16.35", "17.21", "18.54", "19.89"],
        ["09:30", "10:30", "11:30/13:00", "14:00", "15:00"],
        [],
        []
    ];

    function getLabelsPixel(list) {
        return list.map(function(label) {
            return Utils.measure(label).width + 15;
        });
    }

    function fnMatrix(width, height, tickPixelList) {



        return {
            leftDegress: 0,
            leftValue: 0,
            rightDegress: 0,
            rightValue: 0,
            topDegress: 0,
            topValue: 0,
            bottomDegress: 0,
            bottomValue: 0
        };
    }

    function matrix(width, height, tickLabelList) {
        var tickPixelList = tickLabelList.map(function(list) {
            return getLabelsPixel(list);
        });

        console.log(tickPixelList);

        fnMatrix(width, height, tickPixelList);
    }

    matrix(options.width, options.height, tickLabelList);



});

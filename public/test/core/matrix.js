define(function(require, exports, module) {

    var matrix = require('k-chart/core/matrix');
    var $ = require('jquery');


    var tickLabelList = [
        ["15.12", "16.35", "17.21", "18.54", "19.89"],
        ["09:30", "10:30", "11:30/13:00", "14:00", "15:00"],
        [],
        []
    ];

    function renderTicks(width, matrixOptions, list) {
        var elemStr = '';
        list.forEach(function(label) {
            elemStr += '<span style="transform:rotate(' + matrixOptions.bottomDeg + 'deg);transform-origin:center right;">' + label + '</span>'
        });
        return elemStr;
    }

    function fnLayout(container, tickLabelList) {
        var width = container.outerWidth(true);
        var height = container.outerHeight(true);

        var matrixOptions = matrix(width, height, tickLabelList);

        console.log(matrixOptions);

        container.css({
            borderWidth: (height - matrixOptions.bottomVal) + 'px ' + matrixOptions.rightVal + 'px 0 ' + matrixOptions.leftVal + 'px',
            borderStyle: 'solid',
            borderColor: '#777'
        })
        container.html(renderTicks(width, matrixOptions, tickLabelList[1]));
    }

    var container = $('#matrix');

    fnLayout(container, tickLabelList);
    $(window).on('resize', function() {
        fnLayout(container, tickLabelList);
    });







});

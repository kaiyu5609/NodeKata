define(function(require, exports, module) {

    var matrix = require('../../../src/chart/core/matrix');
    var Utils = require('../../../src/chart/core/Utils');
    var $ = require('jquery');

    var options = {
        grid: {
            left: '20',
            bottom: '40',
            right: '40',
            top: '',
            hSymmetrical: true
        }
    };

    var tickLabelList = [
        ["15.12", "16.35", "17.21", "18.54", "19.89"],
        ["09:30", "10:30", "11:30/13:00", "14:00", "15:00"],
        [],
        []
    ];

    var options2 = {
        grid: {
            left: '20',
            bottom: '40',
            right: '40',
            top: '',
            // hSymmetrical: true
        }
    };

    var tickLabelList2 = [
        ["15.1211111", "16.35", "17.21", "18.54", "19.89"],
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

    function fnLayout(container, options, tickLabelList) {
        var width = container.outerWidth(true);
        var height = container.outerHeight(true);

        var matrixOptions = matrix({
            width: width,
            height: height,
            leftVal: options.grid.left,
            bottomVal: options.grid.bottom,
            rightVal: options.grid.right,
            topVal: options.grid.top,
            hSymmetrical: options.grid.hSymmetrical
        }, tickLabelList);

        // console.log(matrixOptions);

        container.css({
            borderWidth: (height - matrixOptions.bottomVal) + 'px ' + matrixOptions.rightVal + 'px 0 ' + matrixOptions.leftVal + 'px',
            borderStyle: 'solid',
            borderColor: '#777'
        });
        container.html(renderTicks(width, matrixOptions, tickLabelList[1]));

        return matrixOptions;
    }

    var container = $('#matrix');
    var container2 = $('#matrix2');

    fnLayout(container, options, tickLabelList);
    fnLayout(container2, options2, tickLabelList2);

    $(window).on('resize', function() {
        var matrixOptions1 = fnLayout(container, options, tickLabelList);
        var matrixOptions2 = fnLayout(container2, options2, tickLabelList2);

        var matrixOptionsArr = [matrixOptions1, matrixOptions2];

        var leftMaxTick = Utils.max(matrixOptionsArr, function(item) {
            return item.leftVal;
        });
        var rightMaxTick = Utils.max(matrixOptionsArr, function(item) {
            return item.rightVal;
        });

        matrixOptionsArr.map(function(opt) {
            for (var key in opt) {
                if (key === 'leftVal') {
                    opt[key] = leftMaxTick;
                }
                if (key === 'rightVal') {
                    opt[key] = rightMaxTick;
                }
            }
            return opt;
        });


        console.log(leftMaxTick, rightMaxTick);

        console.log(matrixOptionsArr);

    });







});

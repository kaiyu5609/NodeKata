define(function(require, exports, module) {

    var Utils = require('k-chart/Utils');

    // 获取刻度的长度
    function getLabelsPixel(list) {
        return list.map(function(label) {
            return Utils.measure(label).width;
        });
    }

    // 刻度是否会重叠
    function isOverlap(list, meanValue) {
        var len = list.length;
        var flag = false;
        var i, prev, curr;

        for (i = 1; i < len; i++) {
            prev = list[i - 1];
            curr = list[i];
            if ((prev + curr) / 2 >= meanValue) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    // 若重叠，则旋转-30度
    function getXLabelPixel(list, meanValue) {
        var deg = 0, val = 15;

        if (!list.length) {
            return { deg: 0, val: 15 };
        }

        if (isOverlap(list, meanValue)) {
            deg = 30;
            return {
                deg: -deg,
                val: Utils.max(list, function(label) {// 加上val是因为字体为12px(预留3px)
                    return label * Math.sin(deg * Math.PI / 180) + val;
        		})
            };
        }
        return { deg: deg, val: val };
    }

    function fnMatrix(options, tickPixelList) {

        var matrixOptions = {
            leftDeg: 0, leftVal: 0,
            bottomDeg: 0, bottomVal: 0,
            rightDeg: 0, rightVal: 0,
            topDeg: 0, topVal: 0
        };

        var lftTicks = tickPixelList[0].slice();
        var rhtTicks = tickPixelList[2].slice();
        var btmTicks = tickPixelList[1];
        var topTicks = tickPixelList[3];

        var btmFirstTick = btmTicks[0];// btm第一个刻度label长度
        var topFirstTick = topTicks[0];// top第一个刻度label长度

        var btmLastTick = btmTicks[btmTicks.length - 1];// 最后一个刻度label长度
        var topLastTick = topTicks[topTicks.length - 1];// 最后一个刻度label长度

        lftTicks.push(+options.leftVal, btmFirstTick / 2, topFirstTick / 2);
        rhtTicks.push(+options.rightVal, btmLastTick / 2, topLastTick / 2);

        var leftVal = Utils.max(lftTicks);
        var rightVal = Utils.max(rhtTicks);

        if (options.hSymmetrical) {
            if (leftVal < rightVal) {
                leftVal = rightVal;
            } else if (leftVal > rightVal){
                rightVal = leftVal;
            }
        }

        var btmTicksLength = btmTicks.length;
        var topTicksLength = topTicks.length;
        var contentWidth = options.width - leftVal - rightVal;
        // console.log(options);

        var btmMeanVal = btmTicksLength > 1 ? (contentWidth / btmTicksLength) : 5;
        var topMeanVal = topTicksLength > 1 ? (contentWidth / topTicksLength) : 5;

        var btmLayout = getXLabelPixel(btmTicks, btmMeanVal);
        var topLayout = getXLabelPixel(topTicks, topMeanVal);

        matrixOptions.leftVal = leftVal;
        matrixOptions.rightVal = rightVal;
        matrixOptions.bottomDeg = btmLayout.deg;
        matrixOptions.bottomVal = btmLayout.val;
        matrixOptions.topDeg = topLayout.deg;
        matrixOptions.topVal = topLayout.val;

        return matrixOptions;
    }

    function matrix(options, tickLabelList) {
        /**
         * 计算四个轴tickLabel的长度
         * @return [[30.029296875, 30.029296875], [30.029296875, 30.029296875], [0], [0]]
         */
        var tickPixelList = tickLabelList.map(function(list) {
            return list ? getLabelsPixel(list) : [];
        });

        // console.log(tickPixelList);

        /**
         * 计算在当前显示宽度下tickLabel是否会重合，若重合则旋转-30度进行显示
         * @return
            {
                leftDeg: 0, leftVal: 30.029296875,
                bottomDeg: -30, bottomVal: 46.2509765625,
                rightDeg: 0, rightVal: 15.0146484375,
                topDeg: 0, topVal: 0
           }
         */
        return fnMatrix(options, tickPixelList);
    }

    module.exports = matrix;

});

define(function(require, exports, module) {

    function defaultComparator(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

    function quickSort(array, layers, fnCompare) {
        fnCompare = fnCompare || defaultComparator;

        function _quickSort(arr, layer) {
            var len = arr.length;
            if (len <= 1) {
                return arr;
            }

            var mid = arr.splice(Math.floor(len / 2), 1)[0],// 取中间的数
                left = [],
                middle = [],
                right = [];

            arr.forEach(function(item) {
                var c = fnCompare(item, mid, layer);
                if (c === -1) {
                    left.push(item);
                } else if (c === 1) {
                    right.push(item);
                } else {
                    middle.push(item);
                }
            });

            middle.push(mid);

            if (layers > layer) {
                middle = _quickSort(middle, layer + 1);
            }

            left = _quickSort(left, layer);
            right = _quickSort(right, layer);

            return left.concat(middle, right);
        }

        return _quickSort(array, 0);
    }

    module.exports = {
        quickSort: quickSort
    };
});

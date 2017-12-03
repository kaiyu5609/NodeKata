define(function(require, exports, module) {
    'use strict';

    var version = "0.0.1";

    /**
     *不重复ID
     * @public
     * @method uid
     * @returns {String}
     */
    var guid = (function () {
        var u = Date.now();
        return function () {
            return (u++).toString(16);
        };
    })();

    /**
     * Canvas文本
     * @public
     * @method measure
     * @param {String} label
     * @param {String} [font]
     * @returns {Object}
     */
    var measure = (function() {
        try{
            var canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = 1;
            return function (label, font) {
                var context = canvas.getContext("2d");
                context.font = font || '12px Arial';
                return context.measureText(label);
            };
        } catch(e) {
            return function() {
                return 0;
            };
        }
    })();

    /**
     * 转化数字
     * @public
     * @method number
     * @param {String} x
     * @returns {Number}
     */
    function number(x) {
        return x === null ? NaN : +x;
    }

    /**
     * 是否为数字
     * @public
     * @method number
     * @param {String} value
     * @returns {Boolean}
     */
    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    /**
     * 升序
     * @public
     * @method ascending
     * @param {Number} a
     * @param {Number} b
     * @returns {Number}
     */
    function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    /**
     * 二等分
     * @public
     * @method bisect
     * @param {Array} a
     * @param {Number} x
     * @param {Number} lo
     * @param {Number} hi
     * @returns {Number}
     */
    function bisect(a, x, lo, hi) {
        if (arguments.length < 3) {
            lo = 0;
        }
        if (arguments.length < 4) {
            hi = a.length;
        }
        while (lo < hi) {
            var mid = lo + hi >>> 1;

            if (ascending(a[mid], x) > 0) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    /**
     * 遍历对象或数组
     * @public
     * @param {Array | Object} object
     * @param {Function} callback
     * @returns {Array | Object}
     */
    function each(object, callback) {
        var length,
        key,
        i,
        value;

        if (object) {
            length = object.length;
            if (length === undefined) {
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        value = object[key];
                        if (callback.call(value, value, key) === false) {
                            break;
                        }
                    }
                }
            } else {
                for (i = 0; i < length; i++) {
                    value = object[i];
                    if (callback.call(value, value, i) === false) {
                        break;
                    }
                }
            }
        }
        return object;
    }

    /**
     * 数值区间 [min, max]
     * @public
     * @method extent
     * @param {Array} array
     * @param {function} cb
     * @returns {Array}
     */
    function extent(array, cb) {
        var i = -1,
        n = array.length,
        a,
        b,
        c;

        if (cb == null) {
            while (++i < n) {
                if ((b = array[i]) !== null && b >= b) {
                    a = c = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = array[i]) !== null) {
                    if(a > b) {
                        a = b;
                    }

                    if(c < b) {
                        c = b;
                    }
                }
            }
        } else {
            while (++i < n) {
                if ((b = cb(array[i], i, array)) !== null && b >= b) {
                    a = c = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = cb(array[i], i, array)) !== null) {
                    if(a > b) {
                        a = b;
                    }

                    if(c < b) {
                        c = b;
                    }
                }
            }
        }

        return [a, c];
    }

    /**
     * 数据堆叠
     * @public
     * @method stack
     * @param {Array} array
     * @param {Function} callback
     * @returns {Array}
     */
    function stack(array, callback) {
        var result = [0];
        var size = array.length;
        for(var i = 1; i < size; i++) {
            var previous = array[i - 1];
            var current = array[i];
            result.push(callback(previous, current) + result[result.length - 1]);
        }
        return result;
    }

    /**
     * 定义常量
     * @public
     * @method constant
     * @param {Object} x
     * @returns {function}
     */
    function constant(x) {
        return function () {
            return x;
        };
    }

    /**
     * 求最大值
     * @public
     * @method max
     * @param {Array} array
     * @param {function} [f]
     * @returns {Number}
     */
    function max(array, f) {
        var i = -1,
        n = array.length,
        a,
        b;

        if (f == null) {
            while (++i < n) {
                if ((b = array[i]) !== null && b >= b) {
                    a = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = array[i]) !== null && b > a) {
                    a = b;
                }
            }

        } else {
            while (++i < n) {
                if ((b = f(array[i], i, array)) !== null && b >= b) {
                    a = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = f(array[i], i, array)) !== null && b > a) {
                    a = b;
                }
            }
        }

        return a;
    }

    /**
     * 求最小值
     * @public
     * @method min
     * @param {Array} array
     * @param {function} [f]
     * @returns {Number}
     */
    function min(array, f) {
        var i = -1,
        n = array.length,
        a,
        b;

        if (f == null) {
            while (++i < n) {
                if ((b = array[i]) !== null && b >= b) {
                    a = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = array[i]) !== null && a > b) {
                    a = b;
                }
            }

        } else {
            while (++i < n) {
                if ((b = f(array[i], i, array)) !== null && b >= b) {
                    a = b;
                    break;
                }
            }

            while (++i < n) {
                if ((b = f(array[i], i, array)) !== null && a > b) {
                    a = b;
                }
            }
        }

        return a;
    }

    /**
     * 多数组合并
     * @public
     * @method concat
     * @param {Array} arrays
     * @returns {Number}
     */
    function concat(arrays) {
        var n = arrays.length,
        m,
        i = -1,
        j = 0,
        concated,
        array;

        while (++i < n) {
            j += arrays[i].length;
        }

        concated = new Array(j);

        while (--n >= 0) {
            array = arrays[n];
            m = array.length;
            while (--m >= 0) {
                concated[--j] = array[m];
            }
        }

        return concated;
    }

    /**
     * 求平均数
     * @public
     * @method mean
     * @param {Array} array
     * @param {function} [f]
     * @returns {Number}
     */
    function mean(array, f) {
        var s = 0,
        n = array.length,
        a,
        i = -1,
        j = n;

        if (f === null) {
            while (++i < n) {
                if (!isNaN(a = number(array[i]))) {
                    s += a;
                } else {
                    --j;
                }
            }

        } else {
            while (++i < n) {
                if (!isNaN(a = number(f(array[i], i, array)))) {
                    s += a;
                } else {
                    --j;
                }
            }
        }

        if (j) {
            return s / j;
        }
    }

    /**
     * 洗牌
     * @public
     * @method shuffle
     * @param {Array} array
     * @param {Number} [i0] 默认是0
     * @param {Number} [i1] 默认是数组长度
     * @returns {Array}
     */
    function shuffle(array, i0, i1) {
        var m = (i1 === null ? array.length : i1) - (i0 = i0 === null ? 0 : +i0),
        t,
        i;
        while (m) {
            i = Math.random() * m-- | 0;
            t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }

        return array;
    }

    /**
     * 求和
     * @public
     * @method sum
     * @param {Array} array
     * @param {function} [f]
     * @returns {Number}
     */
    function sum(array, f) {
        var s = 0,
        n = array.length,
        a,
        i = -1;

        if (f === null) {
            while (++i < n) {
                a = +array[i];
                if (a) {
                    s += a;
                }
            }
        } else {
            while (++i < n) {
                a = +f(array[i], i, array);
                if (a) {
                    s += a;
                }
            }
        }

        return +s.toFixed(10);
    }

    /**
     * 获取对象的键名
     * @public
     * @method values
     * @param {Object} map
     * @returns {Array}
     */
    function keys(map) {
        var keys = [];
        for (var key in map) {
            keys.push(key);
        }
        return keys;
    }

    /**
     * 获取对象的值
     * @public
     * @method values
     * @param {Object} map
     * @returns {Array}
     */
    function values(map) {
        var values = [];
        for (var key in map) {
            values.push(map[key]);
        }
        return values;
    }

    /**
     * 对象转化成数组
     * @public
     * @method entries
     * @param {Object} map
     * @returns {Array}
     */
    function entries(map) {
        var result = [];
        for (var key in map) {
            result.push({
                key : key,
                value : map[key]
            });
        }
        return result;
    }

    /**
     * 创建指定范围的随机数
     * @public
     * @method uniform
     * @param {Number} min
     * @param {Number} max
     * @returns {Function}
     */
    function uniform(min, max) {
        min = min === null ? 0 : +min;
        max = max === null ? 1 : +max;
        if (arguments.length === 1) {
            max = min;
            min = 0;
        } else {
            max -= min;
        }
        return function () {
            return Math.random() * (max - min) + min;
        };
    }

    /**
     * 求多边形中心点
     * @public
     * @method centroid
     * @param {Array} polygon
     * @returns {Array}
     */
    function centroid(polygon) {
        var i = -1,
        n = polygon.length,
        x = 0,
        y = 0,
        a,
        b = polygon[n - 1],
        c,
        k = 0;
        while (++i < n) {
            a = b;
            b = polygon[i];
            k += c = a[0] * b[1] - b[0] * a[1];
            x += (a[0] + b[0]) * c;
            y += (a[1] + b[1]) * c;
        }

        return k *= 3, [x / k, y / k];
    }

    /**
     * 判断某个点是否在多边形中
     * @public
     * @method range
     * @param {Array} polygon
     * @param {Array} point
     * @returns {boolean}
     */
    function contains(polygon, point) {
        var n = polygon.length,
        p = polygon[n - 1],
        x = point[0],
        y = point[1],
        x0 = p[0],
        y0 = p[1],
        x1,
        y1,
        inside = false;

        for (var i = 0; i < n; ++i) {
            p = polygon[i];
            x1 = p[0];
            y1 = p[1];
            if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) {
                inside = !inside;
            }
            x0 = x1;
            y0 = y1;
        }

        return inside;
    }



    function merge(target, additional, deep) {
        var depth = typeof deep === 'undefined' ? 2 : deep, prop;

        for (prop in additional) {
            if (additional.hasOwnProperty(prop)) {
                if (typeof target[prop] !== 'object' || !depth) {
                    target[prop] = additional[prop];
                } else {
                    merge(target[prop], additional[prop], depth);
                }
            }
        }

        return target;
    }




    /**
     * 创建数据单元
     * @public
     * @method range
     * @param {Number} start 数组元素的最小值
     * @param {Number} stop 数组元素的最大值
     * @param {Number} [step] 默认是1
     * @returns {Array}
     */
    function range(start, stop, step) {
        start = +start;
        stop = +stop;
        step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

        var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);
        while (++i < n) {
            range[i] = +(start + i * step).toFixed(10);
        }

        return range;
    }

    var e10 = Math.sqrt(50);
    var e5 = Math.sqrt(10);
    var e2 = Math.sqrt(2);

    /**
     * 求刻度区间
     * @public
     * @method ticks
     * @param {Number} start
     * @param {Number} stop
     * @param {Number} [count] 默认为 5
     * @returns {Array}
     */
    function ticks(start, stop, count) {
        var step = tickStep(start, stop, count || 5);
        var result = range(
            Math.ceil(start / step) * step,
            Math.floor(stop / step) * step + step / 2,
            step);

        var first = result[0];
        var last  = result[result.length - 1];

        if(first > start) {
            result.splice(0, 0, first - step);
        }

        if(last < stop) {
            result.push(last + step);
        }

        return result;
    }

    /**
     * 步调
     * @private
     * @method tickStep
     * @param {Number} start
     * @param {Number} stop
     * @param {Number} count
     * @returns {Number}
     */
    function tickStep(start, stop, count) {
        var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
        if (error >= e10) {
            step1 *= 10;
        } else if (error >= e5) {
            step1 *= 5;
        } else if (error >= e2) {
            step1 *= 2;
        }
        return stop < start ? -step1 : step1;
    }

    function _ticks(start, stop, count = 5) {
        var step0 = Math.floor(Math.log(stop - start) / Math.log(10));
        var unit = Math.pow(10, step0);

        var min = Math.floor(start / unit) * unit;
        var max = Math.ceil(stop / unit) * unit;

        var step = (max - min) / (count - 1);

        if(unit === 1 && step > 1 && Math.ceil(step) !== step) {
            step = Math.ceil(step);
            max = min + step * (count - 1);
        }

        if(min < 0 && max > 0) {
            min = Math.floor(min / step) * step;
            max = Math.floor(max / step) * step;
        }

        var count0 = Math.floor(Math.log(step) / Math.log(10));

        var result = [];

        for(var i = min; min < max ? i <= max : i >= max; i += step) {
            if(step < 1) {
                result.push(parseFloat(i.toFixed(1 - count0)));
            } else {
                result.push(i);
            }
        }

        return result;
    }

    /**
     * 线性比例
     * @public
     * @method linear
     * @param {Array} domain
     * @returns {linear}
     */
    function linear(domain) {
        var buffer = ticks.apply(null, domain);
        var size = buffer.length;
        var start = buffer[0];
        var stop = buffer[size - 1];
        var range = [1, 0];

        /**
         * @public
         * @method linear
         * @param {Number} x
         * @returns {Number}
         */
        function linear(x) {
            return Math.floor(range[0] - (x - start) / (stop - start) * (range[0] - range[1]));
        }

        /**
         * @public
         * @method range
         * @param {Array} x
         * @returns {linear}
         */
        linear.range = function(x) {
            return x ? (range = x, linear) : range;
        };

        /**
         * @public
         * @method ticks
         * @returns {Array}
         */
        linear.ticks = function() {
            return buffer;
        };

        linear.extent = extent(buffer);

        return linear;
    }

    /**
     * 离散比例
     * @public
     * @method ordinal
     * @param {Array} domain
     * @param {Number} rangeBand [0-1]
     * @returns {ordinal}
     */
    function ordinal(domain, rangeBand) {
        var size = domain.length;
        var start = domain[0];
        var stop = domain[size - 1];
        var range = [1, 0];

        rangeBand = rangeBand || 0;

        var buffer = {};

        domain.forEach(function(tick, index) {
            buffer[tick] = index;
        });

        /**
         * @public
         * @method ordinal
         * @param {String} x
         * @returns {Number}
         */
        function ordinal(x) {
            var n = rangeBand ? 0 : 1;
            var width = (range[1] - range[0]) / (size - n);
            return rangeBand ? Math.floor(range[0] + width * buffer[x] + width * 0.5) : Math.floor(range[0] + width * buffer[x]);
        }

        /**
         * @public
         * @method rangeBand
         * @returns {Number}
         */
        ordinal.rangeBand = function() {
            var width =  (1 - rangeBand * 2) / size * (range[1] - range[0]);
            return rangeBand ? Math.floor(width) : 0;
        };

        /**
         * @public
         * @method range
         * @param {Array} x
         * @returns {ordinal}
         */
        ordinal.range = function(x) {
            return x ? (range = x, ordinal) : range;
        };

        /**
         * @public
         * @method ticks
         * @returns {Array}
         */
        ordinal.ticks = function() {
            return domain;
        };

        return ordinal;
    }

    var TIME_STEPS = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];

    /**
     * @public
     * @method interval
     * @param {Function} local
     * @param {Function} step
     * @param {Function} number
     * @returns {local}
     */
    function interval(local, step, number) {

        function round(date) {
            var d0 = local(date),
            d1 = offset(d0, 1);
            return date - d0 < d1 - date ? d0 : d1;
        }

        function ceil(date) {
            step(date = local(new Date(date - 1)), 1);
            return date;
        }

        function offset(date, k) {
            step(date = new Date(+date), k);
            return date;
        }

        function range(t0, t1, dt) {
            var time = ceil(t0),
            times = [];
            if (dt > 1) {
                while (time < t1) {
                    if (!(number(time) % dt)) {
                        times.push(new Date(+time));
                    }
                    step(time, 1);
                }
            } else {
                while (time < t1) {
                    times.push(new Date(+time));
                    step(time, 1);
                }
            }
            return times;
        }

        local.floor = local;
        local.round = round;
        local.ceil = ceil;
        local.offset = offset;
        local.range = range;

        return local;
    }

    var TIME_LIST = (() => {
        var time = {};

        time.second = interval((date) => {
            return new Date(Math.floor(date / 1e3) * 1e3);
        }, (date, offset) => {
            date.setTime(date.getTime() + Math.floor(offset) * 1e3);
        }, (date) => {
            return date.getSeconds();
        });

        time.minute = interval((date) => {
            return new Date(Math.floor(date / 6e4) * 6e4);
        }, (date, offset) => {
            date.setTime(date.getTime() + Math.floor(offset) * 6e4);
        }, (date) => {
            return date.getMinutes();
        });

        time.hour = interval((date) => {
            var timezone = date.getTimezoneOffset() / 60;
            return new Date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
        }, (date, offset) => {
            date.setTime(date.getTime() + Math.floor(offset) * 36e5);
        }, (date) => {
            return date.getHours();
        });

        time.day = interval((date) => {
            var day = new Date(2e3, 0);
            day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            return day;
        }, (date, offset) => {
            date.setDate(date.getDate() + offset);
        }, (date) => {
            return date.getDate() - 1;
        });

        time.dayOfYear = function (date) {
            var year = time.year(date);
            return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
        };

        [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ]
        .forEach((day, i) => {
            i = 7 - i;
            time[day] = interval((date) => {
                (date = time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
                return date;
            }, (date, offset) => {
                date.setDate(date.getDate() + Math.floor(offset) * 7);
            }, (date) => {
                var day = time.year(date).getDay();
                return Math.floor((time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
            });

            time[day + "OfYear"] = function(date) {
                var day = time.year(date).getDay();
                return Math.floor((time.dayOfYear(date) + (day + i) % 7) / 7);
            };
        });

        time.week = time.sunday;

        time.month = interval((date) => {
            date = time.day(date);
            date.setDate(1);
            return date;
        }, (date, offset) => {
            date.setMonth(date.getMonth() + offset);
        }, (date) => {
            return date.getMonth();
        });

        time.year = interval((date) => {
            date = time.day(date);
            date.setMonth(0, 1);
            return date;
        }, (date, offset) => {
            date.setFullYear(date.getFullYear() + offset);
        }, (date) => {
            return date.getFullYear();
        });

        return [[time.second, 1], [time.second, 5], [time.second, 15], [time.second, 30], [time.minute, 1], [time.minute, 5], [time.minute, 15], [time.minute, 30], [time.hour, 1], [time.hour, 3], [time.hour, 6],	[time.hour, 12], [time.day, 1],	[time.day, 2], [time.week, 1], [time.month, 1], [time.month, 3], [time.year, 1]];
    })();

    function scaleDate(t) {
        return new Date(t);
    }

    function identity(d) {
        return d;
    }

    var scaleMilliseconds = {
        range : function (start, stop, step) {
            return d3.range(Math.ceil(start / step) * step, +stop, step).map(scaleDate);
        },
        floor : identity,
        ceil : identity
    };

    function tickMethod(extent, count) {
        var span = extent[1] - extent[0];
        var target = span / count;
        var i = bisect(TIME_STEPS, target);
        var interval;
        var step;
        if(i === TIME_LIST.length) {
            interval = TIME_LIST[i - 1][0];
            step = range(extent.map(function(d) {
                return d / 31536e6;
            }), count)[2];
        } else if(!i) {
            interval = scaleMilliseconds;
            step = range(extent, count)[2];
        } else {
            var index = target / TIME_STEPS[i - 1] < TIME_STEPS[i] / target ? i - 1 : i;
            var method = TIME_LIST[index];
            interval = method[0];
            step = method[1];
        }

        return interval.range(extent[0], new Date(extent[1] + 1), step);
    }

    /**
     * 时间比例
     * @public
     * @method extime
     * @param {Array} domain
     * @returns {ordinal}
     */
    function extime(domain) {
        var buffer = tickMethod(domain, 5).map(function(d) {
            return new Date(d).getTime();
        });
        var range = [1, 0];

        function timer(x) {
            return Math.floor(range[0] - ((new Date(x)).getTime() - domain[0]) / (domain[1] - domain[0]) * (range[0] - range[1]));
        }
        /**
         * @public
         * @method range
         * @param {Array} x
         * @returns {timer}
         */
        timer.range = function(x) {
            return x ? (range = x, timer) : range;
        };

        /**
         * @public
         * @method ticks
         * @returns {Array}
         */
        timer.ticks = function() {
            return buffer;
        };

        timer.parse = function(x, size) {
            var width = range[1] - range[0];
            var band = width / (size - 1);

            if(x < (band / 2) ) {
                x = x;
            } else if((x + band / 2) > width) {
                x = x + band * 0.5;
            } else {
                x = x + band * 0.5;
            }
            return Math.floor(x / band);
        };

        return timer;
    }

    function time(domain, gs) {
        var range;
        var format = date(domain[0]);

        var exclude = [format('11:30'), format('13:00')].map(function(d) {
            return new Date(d).getTime();
        });

        var scale = extime([domain[0], domain[1] - (exclude[1] - exclude[0]) + (gs || 0)]);

        function exscale(d) {
            var t0 = new Date(d).getTime();
            var t1 = new Date(t0 > exclude[0] ? (t0 - (exclude[1] - exclude[0]) + (gs || 0) ) : t0).getTime();
            return scale(t1);
        }

        exscale.range = function(x) {
            return x ? (range = x, scale.range(x), exscale) : range;
        };

        exscale.parse = function(x, size) {
            var width = range[1] - range[0];

            var band = width / (size - 1);

            if(x < (band / 2) ) {
                x = x;
            } else if((x + band / 2) > width) {
                x = x + band * 0.5;
            } else {
                x = x + band;
            }
            return Math.floor(x / band);
        };

        exscale.ticks = function() {
            return [format('9:30'), format('10:30'), format('11:30'), format('14:00'), format('15:00')].map(function(d){
                return new Date(d).getTime();
            });
        };

        return domain[1] > new Date(format('11:30')).getTime() ? exscale : extime(domain);
    }

    function date(d) {
        var t = new Date(d);
        return function(hms) {
            return t.getFullYear() + '/' + (t.getMonth() + 1) + '/'+ t.getDate() + ' '+ hms;
        };
    }

    function gather(size, range) {
        var gs = 1;
        var time = [1, 3, 5, 10, 15, 30, 60, 180, 300, 600, 900];
        each(time, function(d, i) {
            if(size / (range / d + 2) >= 5) {
                return gs = d, false;
            }
        });

        function dataFilter(data, callback) {
            var result = [];
            var item = [];
            each(data, function(d) {
                var t = new Date(d[0]);
                if(gs < 60) {
                    item.push(d);
                    if(t.getSeconds() % gs === 0) {
                        result.push(callback(item, gs * 1000) || []);
                        item = [];
                    }
                } else if(gs >= 60 && gs <= 900) {
                    item.push(d);
                    if(t.getMinutes() % (gs / 60) === 0) {
                        result.push(callback(item, gs * 1000) || []);
                        item = [];
                    }
                } else {
                    //todo
                    result.push(d);
                }
            });

            return result;
        }

        dataFilter.gs = gs * 1000;

        return dataFilter;
    }

    function fixedZero(val) {
        if (val < 10) {
            return '0' + val;
        }
        return val;
    }

    function timeFormat(d) {
        var t = new Date(d);
        var hh = fixedZero(t.getHours());
        var mm = fixedZero(t.getMinutes());
        return hh + ':' + mm;
    }

    function bind(elements, type, listener) {
        if (!elements.length) {
            elements = [elements];
        }
        each(elements, function(element) {
            element.addEventListener(type, listener, false);
        });
    }



    // 数据转换
    function convertData(response, cType, swap) {

    }


    exports.version  = version;
    exports.guid     = guid;
    exports.measure  = measure;
    exports.each     = each;
    exports.number   = number;
    exports.isNumber = isNumber;
    exports.extent   = extent;
    exports.min      = min;
    exports.max      = max;
    exports.sum      = sum;
    exports.range    = range;
    exports.stack    = stack;
    exports.contains = contains;
    exports.centroid = centroid;
    exports.uniform  = uniform;
    exports.entries  = entries;
    exports.keys     = keys;
    exports.values   = values;
    exports.shuffle  = shuffle;
    exports.constant = constant;
    exports.merge    = merge;
    exports.klinear  = linear;
    exports.linear   = linear;
    exports.time     = time;
    exports.extime   = extime;
    exports.ordinal  = ordinal;
    exports.gather   = gather;
    exports.timeFormat = timeFormat;
    exports.bind     = bind;
    exports.convertData = convertData;

});

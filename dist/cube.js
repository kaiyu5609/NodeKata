var cube =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var context = typeof window !== 'undefined' ? window : global;

    exports.$ = context.jQuery;
    exports.d3 = context.d3;
    exports._ = context._;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

     function indexOfListener(listeners, listener) {
        var i = listeners.length;

        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    function isValidListener(listener) {
        if (typeof listener === 'function' || listener instanceof RegExp) {
            return true;
        } else if (listener && typeof listener === 'object') {
            return isValidListener(listener.listener);
        } else {
            return false;
        }
    }

    class EventEmitter {
        constructor(options) {

        }

        _getEvents() {
            return this._events || (this._events = {});
        }
        /**
         * @param {String|RegExp} name
         * @return {Function[]|Object}
         */
        getListeners(name) {
            var events = this._getEvents();
            var response;
            var key;

            if (name instanceof RegExp) {
                response = {};
                for (key in events) {
                    if (events.hasOwnProperty(key) && name.test(key)) {
                        response[key] = events[key];
                    }
                }
            } else {
                response = events[name] || (events[name] = []);
            }

            return response;
        }
        /**
         * @param {Object[]} listeners
         * @return {Function[]}
         */
        flattenListeners(listeners) {
            var flatListeners = [];
            var i;
            var l;

            for (i = 0, l = listeners.length; i < l; i++) {
                flatListeners.push(listeners[i].listener);
            }

            return flatListeners;
        }
        /**
         * @param {String|RegExp} name
         * @return {Object}
         */
        getListenersAsObject(name) {
            var listeners = this.getListeners(name);
            var response;

            if (listeners instanceof Array) {
                response = {};
                response[name] = listeners;
            }

            return response || listeners;
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        addListener(name, listener) {
            if (!isValidListener(listener)) {
                throw new TypeError('listener must be a function');
            }

            var listeners = this.getListenersAsObject(name);
            var listenerIsWrapped = typeof listener === 'object';
            var key;

            for (key in listeners) {
                if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                    listeners[key].push(listenerIsWrapped ? listener : {
                        listener: listener,
                        once: false
                    });
                }
            }

            return this;
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        on(name, listener) {
            return this.addListener(name, listener);
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        addOnceListener(name, listener) {
            return this.addListener(name, {
                listener: listener,
                once: true
            });
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        once(name, listener) {
            return this.addOnceListener(name, listener);
        }
        /**
         * @param {String} name
         * @return {Object}
         */
        defineEvent(name) {
            this.getListeners(name);
            return this;
        }
        /**
         * @param {String[]} name
         * @return {Object}
         */
        defineEvents(names) {
            for (var i = 0, l = names.length; i < l; i++) {
                this.defineEvent(name[i]);
            }
            return this;
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        removeListener(name, listener) {
            var listeners = this.getListenersAsObject(name);
            var index;
            var key;

            for (key in listeners) {
                if (listeners.hasOwnProperty(key)) {
                    index = indexOfListener(listeners[key], listener);

                    if (index !== -1) {
                        listeners[key].splice(index, 1);
                    }
                }
            }

            return this;
        }
        /**
         * @param {String|RegExp} name
         * @param {Function} listener
         * @return {Object}
         */
        off(name, listener) {
            return this.removeListener(name, listener);
        }
        /**
         * @param {Boolean} remove
         * @param {String|Object|RegExp} name
         * @param {Function[]} [listener]
         * @return {Object}
         */
        manipulateListeners(remove, name, listeners) {
            var i;
            var value;
            var single = remove ? this.removeListener : this.addListener;
            var multiple = remove ? this.removeListeners : this.addListeners;

            if (typeof name === 'object' && !(name instanceof RegExp)) {
                for (i in name) {
                    if (name.hasOwnProperty(i) && (value = name[i])) {
                        if (typeof value === 'function') {
                            single.call(this, i, value);
                        } else {
                            multiple.call(this, i, value);
                        }
                    }
                }
            } else {
                i = listeners.length;
                while (i--) {
                    single.call(this, name, listeners[i]);
                }
            }

            return this;
        }
        /**
         * @param {String|Object|RegExp} name
         * @param {Function[]} [listener]
         * @return {Object}
         */
        addListeners(name, listeners) {
            return this.manipulateListeners(false, name, listeners);
        }
        /**
         * @param {String|Object|RegExp} name
         * @param {Function[]} [listener]
         * @return {Object}
         */
        removeListeners(name, listeners) {
            return this.manipulateListeners(true, name, listeners);
        }
        /**
         * @param {String|RegExp} name
         * @return {Object}
         */
        removeEvent(name) {
            var type = typeof name;
            var events = this._getEvents();
            var key;

            if (type === 'string') {
                delete events[name];
            } else if (name instanceof RegExp) {
                for (key in events) {
                    if (events.hasOwnProperty(key) && name.test(key)) {
                        delete events[key];
                    }
                }
            } else {
                delete this._events;
            }

            return this;
        }
        /**
         * @param {String|RegExp} name
         * @return {Object}
         */
        removeAllListeners(name) {
            return this.removeEvent(name);
        }
        /**
         * @param {String|RegExp} name
         * @param {Array} [args]
         * @return {Object}
         */
        emitEvent(name, args) {
            var listenersMap = this.getListenersAsObject(name);
            var listeners;
            var listener;
            var i;
            var l;
            var key;
            var response;

            for (key in listenersMap) {
                if (listenersMap.hasOwnProperty(key)) {
                    listeners = listenersMap[key].slice(0);

                    for (i = 0, l = listeners.length; i < l; i++) {
                        listener = listeners[i];

                        if (listener.once === true) {
                            this.removeListener(name, listener.listener);
                        }

                        response = listener.listener.apply(this, args || []);

                        if (response === this._getOnceReturnValue()) {
                            this.removeListener(name, listener.listener);
                        }
                    }
                }
            }

            return this;
        }
        /**
         * @param {String|RegExp} name
         * @param {Array} [args]
         * @return {Object}
         */
        trigger(name, args) {
            return this.emitEvent(name, args);
        }
        /**
         * @param {String|RegExp} name
         * @param {...*}
         * @return {Object}
         */
        fire(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(name, args);
        }
        /**
         * @param {*} value
         * @return {Object}
         */
        setOnceReturnValue(value) {
            this._onceReturnValue = value;
            return this;
        }
        /**
         * @return {*|Boolean}
         */
        _getOnceReturnValue() {
            if (this.hasOwnProperty('_onceReturnValue')) {
                return this._onceReturnValue;
            } else {
                return true;
            }

        }
    }

    module.exports = EventEmitter;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
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

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var { d3 } = __webpack_require__(0);
    var EventEmitter = __webpack_require__(1);

    var Utils = __webpack_require__(2);
    var ChartDataSet = __webpack_require__(9);

    var d3SvgPaint = __webpack_require__(12);
    var d3SvgGridLine = __webpack_require__(14);
    var d3SvgAxisNode = __webpack_require__(15);
    var d3SvgAxisTips = __webpack_require__(16);
    var d3SvgGridLayer = __webpack_require__(17);
    var d3SvgAxisSubline = __webpack_require__(18);
    var d3SvgTooltips = __webpack_require__(19);

    class Chart extends EventEmitter {

        constructor(options) {
            super(options);

            var defaults = {
                width: options.domEl.offsetWidth || 600,
                height: 300,
                grid: {
                    left: 15,
                    bottom: 15,
                    right: 15,
                    top: 15,
                    display: 'block'
                },
                axis: [{
                    type: 'linear',
                    extent: function(extent) {
                        return extent;
                    },
                    tick: {
                        label: function(label) {
                            return label;
                        }
                    }
                }, {
                    type: 'time',
                    extent: function(extent) {
                        return extent;
                    },
                    tick: {
                        label: function(label) {
                            return Utils.timeFormat(label);
                        }
                    }
                }, null, null]
            };

            this.options = options = Utils.merge(defaults, options);

            // console.log(options);

            this.container = d3.select(options.domEl);

            this._dataSet = new ChartDataSet(options);

            this._bindEvents();

            this._dataSet.setData(this._getChartDefaultData());
        }

        _bindEvents() {
            var self = this, options = this.options;

            // this.chartStore.$watch
            this._dataSet.$watch('scales', function(scales) {
                // 绘制SVG
                self.context = d3SvgPaint(options);

                // 绘制网格线和坐标轴
                if (options.grid.display === 'block') {
                    // 网格线
                    var gridLineData = this.getGridLineData();
                    self.context.call(d3SvgGridLine, gridLineData);

                    // 坐标轴
                    var axisData = this.getAxisData();
                    self.context.call(d3SvgAxisNode, axisData);

                }
            });

            this.on('plot-did-mount', function() {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData();
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData();
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 网格事件触发层
                var gridLayerData = self._dataSet.getGridLayerData();
                var gridLayer = d3SvgGridLayer(self.context, gridLayerData);
                gridLayer.on('mousemove', function(ev) {
                    var mouse = d3.mouse(this);
                    self.fire('axis-subline-enter', mouse);
                }).on('mouseout', function (ev) {
                    self.fire('axis-subline-leave');
                });
            });

            this.on('axis-subline-enter', function(mouse) {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData(mouse);
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData(mouse);
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 信息提示框
                var tooltipsData = self._dataSet.getTooltipsData(mouse);
                self.container.call(d3SvgTooltips, tooltipsData);
            }).on('axis-subline-leave', function() {
                // 十字辅助线
                var axisSublineData = self._dataSet.getAxisSublineData();
                self.context.call(d3SvgAxisSubline, axisSublineData);

                // 坐标轴提示信息
                var axisTipsData = self._dataSet.getAxisTipsData();
                self.context.call(d3SvgAxisTips, axisTipsData);

                // 信息提示框
                var tooltipsData = self._dataSet.getTooltipsData();
                self.container.call(d3SvgTooltips, tooltipsData);
            });

            // 浏览器窗口大小发生改变
            Utils.bind(window, 'resize', function(ev) {
                // console.log('resize', ev);
                var offsetWidth = options.domEl.offsetWidth;
                if (offsetWidth === options.width) { return false; }

                // console.log(offsetWidth);

                options.width = offsetWidth;
                self._dataSet.resize = { width: offsetWidth };
            });


        }

        _getChartDefaultData() {
            return [
                { time: "2016/8/2 09:30", series: "深圳成指", open: 0, high: 10, low: 0, close: 0 },
                { time: "2016/8/2 15:00", series: "深圳成指", open: 0, high: 10, low: 0, close: 0 }
            ];
        }

        render(data) {
            // console.log("chart's render");

            this._isEmptyPlot = false;
            if (!data.length) {
                this._isEmptyPlot = true;
                data = this._getChartDefaultData();
            }

            this._dataSet.setData(data);
        }
    }

    module.exports = Chart;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var EventEmitter = __webpack_require__(1);

    var uniqueId = {
        prefix: Date.now(),
        counter: 0
    };

    class Component extends EventEmitter {
        constructor(options = {}) {
            super(options);

            this.id = options.id || (uniqueId.prefix + (++uniqueId.counter).toString(16));
            this.domEl = options.domEl;
            this.width = options.width;
            this.height = options.height;
        }

        render() {}
        
    }

    module.exports = Component;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var chart = __webpack_require__(7);
    var grid = __webpack_require__(22);
    var data = __webpack_require__(27);

    module.exports = {
        chart: chart,
        grid: grid,
        data: data
    };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var Chart = __webpack_require__(3);
    var Candlestick = __webpack_require__(20);

    module.exports = {
        Chart: Chart,
        Candlestick: Candlestick
    };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var Utils = __webpack_require__(2);
    var Observer = __webpack_require__(10);
    var matrix = __webpack_require__(11);

    // 随机数据
    function getRandom(start, stop) {
        return Math.floor(Math.random() * (stop - start) + start);
    }

    class ChartDataSet extends Observer {

        constructor(options) {
            super(options);

            var defaults = {
                width: 600,
                height: 300,
                grid: {
                    left: 15,
                    bottom: 15,
                    right: 15,
                    top: 15
                }
            };
            var self = this;

            this.options = Utils.merge(defaults, options);
            this.datas = [];

            // console.log(this.options);

            this.$watch('resize', function(resize) {
                self.options = Utils.merge(self.options, resize);
                self.setScales();
            });
        }

        // 获取布局信息
        _getLayoutData(domains) {
            // console.log(this.options.width);
            return this.layoutData = matrix({
                width: this.options.width,
                height: this.options.height,
                leftVal: this.options.grid.left,
                bottomVal: this.options.grid.bottom,
                rightVal: this.options.grid.right,
                topVal: this.options.grid.top,
                hSymmetrical: this.options.grid.hSymmetrical
            }, domains);
        }

        // 设置比例尺
        setScales(data) {
            if (this.options.grid.display === 'none') { return false; }
            data = data || this.datas;

            var self = this;
            var scales;
            var domains;
            var layoutData;
            var ranges;
            var extents = {
                time: function(data) {
                    return Utils.extent(data, function(d) {
                        return new Date(d.time).getTime();
                    });
                },
                linear: function(data) {
                    return Utils.extent(data, function(d) {
                        return +d.value;
                    });
                },
                klinear: function(data) {
                    var low = Utils.min(data, function(d) {
                        return +d.low;
                    });
                    var high = Utils.max(data, function(d) {
                        return +d.high;
                    });
                    return [low, high];
                }
            };

            scales = self.options.axis.map(function(axis, index) {
                if (!axis) { return null; }
                var extent = extents[axis.type](data);
                var scale = Utils[axis.type];
                extent = axis.extent(extent) || extent;
                return scale(extent);
            });

            domains = scales.map(function(scale, index) {
                if (!scale) { return null; }
                return scale.ticks().map(function(label) {
                    return self.options.axis[index].tick.label(label);
                });
            });

            layoutData = this._getLayoutData(domains);
            // console.log(layoutData);

            ranges = [
                [self.options.height - layoutData.bottomVal, layoutData.topVal],
                [layoutData.leftVal, self.options.width - layoutData.rightVal],
                [layoutData.leftVal, self.options.width - layoutData.rightVal],
        		[layoutData.topVal, self.options.height - layoutData.bottomVal]
            ];

            // console.log('domains:', domains);
            // console.log('layoutData:', layoutData);
            // console.log('ranges:', ranges);

            scales.forEach(function(scale, index) {
                if (!scale) { return null; }
        		return scale.range(ranges[index]);
        	});

            self['scales'] = scales;

        }

        // 获取比例尺
        getScales(index) {
            var map = { 'left': 0, 'bottom': 1, 'right': 2, 'top': 3 };
            if (typeof index === 'string') {
                index = map[index];
            }
            return (index !== undefined) ? this.scales[index] : this.scales;
        }

        // 获取坐标轴的数据
        getAxisData() {
            var self = this;
            var layoutData = this.layoutData;
            var axisData = [
                { 'orient': 'left',   'anchor': 'end',    'rotateAnchor': 'end', 'rotate': layoutData.leftDeg,   'x': -6, 'y': 4, 'ticks': [] },
                { 'orient': 'bottom', 'anchor': 'middle', 'rotateAnchor': 'end', 'rotate': layoutData.bottomDeg, 'x': 0, 'y': 18, 'ticks': [] },
                { 'orient': 'right',  'anchor': 'start',  'rotateAnchor': 'end', 'rotate': layoutData.rightDeg,  'x': 6, 'y': 4,  'ticks': [] },
                { 'orient': 'top',    'anchor': 'middle', 'rotateAnchor': 'end', 'rotate': layoutData.topDeg,    'x': 0, 'y': -5, 'ticks': [] }
            ];

            var translates = {
                0: function(v) {
                    return [layoutData.leftVal, v];
                },
                1: function(v) {
                    return [v, self.options.height - layoutData.bottomVal];
                },
                2: function() {},
                3: function() {}
            };

            // console.log(axisData)

            return axisData.map(function(axis, index) {
                var scale = self.scales[index], ticks;
                if (!scale) {
                    return axis;
                }
                ticks = scale.ticks();

                axis.ticks = ticks.map(function(tick) {
                    return {
                        x: axis.x,
                        y: axis.y,
                        translate: translates[index](scale(tick)),
                        rotate: axis.rotate,
                        anchor: axis.rotate ? axis.rotateAnchor : axis.anchor,
                        tick: self.options.axis[index]['tick']['label'](tick) || tick,
                        value: tick
                    };
                });

                return axis;
            });

        }

        // 获取网格线的数据
        getGridLineData() {
            var scaleX = this.scales[1];
            var scaleY = this.scales[0];
            var rangeX = scaleX.range();
            var ticksX = scaleX.ticks();
            var rangeY = scaleY.range();
            var ticksY = scaleY.ticks();
            var result = [];

            ticksX.forEach(function(d, i) {
        		result.push({
        			x: scaleX(d) + 0.5,
        			y: 0,
        			y1: rangeY[0],
        			y2: rangeY[1]
        		});
        	});

            ticksY.forEach(function(d, i) {
        		result.push({
        			x: rangeX[0] - 1,
        			y: scaleY(d) + 0.5,
        			x1: 0,
        			x2: rangeX[1] - rangeX[0] + 2,
        			style: (d === 0 && i !== 0) ? 'graph-zero' : ''
        		});
        	});

            return result;
        }

        // 获取网格事件触发层数据
        getGridLayerData() {
            var self = this;
            // console.log(self.layoutData.plotWidth)
            return [{
                left: self.layoutData.leftVal + 1,
                top: self.layoutData.topVal + 1,
                width: self.layoutData.plotWidth,
                height: self.layoutData.plotHeight
            }];
        }

        // 十字辅助线的数据
        getAxisSublineData(mouse) {
            var self = this, xScale, datas, index, item, _mouse;

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
                _mouse[0] = xScale(item.time);
            } else {
                _mouse = [-99999, -99999];
            }

            return [{
                klass: 'subline axis-subline-vertical',
                y1: self.layoutData.topVal,
                y2: self.options.height - self.layoutData.bottomVal,
                x: _mouse[0],
                y: 0
            }, {
                klass: 'subline axis-subline-horizontal',
                x1: self.layoutData.leftVal,
                x2: self.options.width - self.layoutData.rightVal,
                x: 0,
                y: _mouse[1] + self.layoutData.topVal
            }];
        }

        // 获取坐标轴提示信息数据
        getAxisTipsData(mouse) {
            /**
                [
                    { "x": 43, "y": 197, "size": 40, "value": "18.20" },
                    { "x": 450, "y": 270, "size": 40, "value": "13:09" },
                    { "x": 787, "y": 197, "size": 0, "value": null },
                    { "x": 450, "y": 15, "size": 0, "value": null }
                ]
            */
            var self = this;
            var xScale, datas, index, item, _mouse;

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
                _mouse[0] = xScale(item.time);
            } else {
                _mouse = [-99999, -99999];
            }

            var xMap = {
                0: self.layoutData.leftVal,
                1: _mouse[0],
                2: self.options.width - self.layoutData.rightVal,
                3: _mouse[0]
            };
            var yMap = {
                0: _mouse[1] + self.layoutData.topVal,
                1: self.options.height - self.layoutData.bottomVal,
                2: _mouse[1] + self.layoutData.topVal,
                3: self.layoutData.topVal
            };

            var fnTransformValue = {
                0: function(axis, scale, x) {
                    var extent = scale.extent;
                    var n = Math.abs(1 - (x / self.layoutData.plotHeight)) * (extent[1] - extent[0]);
                    var v = Math.floor((n + extent[0]) * 10) / 10;
                    return axis['tick']['label'](v) || v;
                },
                1: function(axis, scale, x) {
                    return item ? axis['tick']['label'](item.time) : '';
                },
                2: function(axis, scale, x) {},
                3: function(axis, scale, x) {}
            };

            return this.scales.map(function(scale, index) {
                var value = fnTransformValue[index](self.options.axis[index], scale, _mouse[(index % 2) ^ 1]);
                return {
                    x: xMap[index],
                    y: yMap[index],
                    size: value ? Utils.measure(value).width + 10 : 0,
                    value: value
                };
            });
        }

        // 获取K线图的数据 [time, open, high, low, close, series]
        getCandlestickData() {
            return this.datas.map(function(d) {
                return [d.time, d.open, d.high, d.low, d.close, d.series];
            });
        }

        // 获取信息提示框的数据
        getTooltipsData(mouse) {
            var self = this;
            var xScale, datas, index, item, _mouse, data = [];

            if (mouse) {
                _mouse = mouse.slice();
                xScale = this.getScales('bottom');
                datas = this.datas;
                index = xScale.parse(mouse[0], datas.length);
                item = datas[index];
            } else {
                _mouse = [-99999, -99999];
            }

            for (var k in item) {
                var obj = [];
                obj[0] = k;
                obj[1] = item[k];
                data.push(obj);
            }

            var tips = [{
                left: _mouse[0] < 0 ? _mouse[0] + 'px' : (_mouse[0] > self.layoutData.plotWidth / 2 ? parseInt(self.layoutData.leftVal) + 'px' : ''),
                right: _mouse[0] < 0 ? '' : (_mouse[0] < self.layoutData.plotWidth / 2 ? parseInt(self.layoutData.rightVal) + 'px' : ''),
                top: _mouse[1] < 0 ? _mouse[1] + 'px' : (self.layoutData.topVal + 2) + 'px',
                data: data
            }];

            return tips;
        }

        setData(data, flag) {
            var self = this;

            if (flag) {
                this.datas = this.datas.concat(data);
            } else {
                this.datas = data;
            }

            this.setScales(this.datas);
        }

    }

    module.exports = ChartDataSet;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    'use strict';

    function defineProperty(scope, name, watchers) {
    	var value = scope[name];

    	var getter = function() {
    		return value;
    	};

    	var setter = function(newValue) {
    		var oldValue = value;
    		value = newValue;
    		if(newValue !== oldValue) {
    			watchers.forEach(function(watch) {
    				watch.call(scope, newValue, oldValue);
    			});
    		}
    	};

    	try {
    		Object.defineProperty(scope, name, {
    			set: setter,
    			get: getter
    		});
    	} catch(error) {}
    }

    function Observer(options) {
    	this.$$watchers = {};
    }

    Observer.prototype.$watch = function(name, listener) {
    	if(!this.$$watchers.hasOwnProperty(name)) {
    		this.$$watchers[name] = [];
    		defineProperty(this, name, this.$$watchers[name]);
    	}

    	this.$$watchers[name].push(listener);
    };

    module.exports = Observer;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var Utils = __webpack_require__(2);

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
    function getXLabelPixel(list, meanValue, value) {
        var deg = 0, val = value || 15;

        if (!list.length) {
            return { deg: 0, val: value || 15 };
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

        var leftVal = Utils.max(lftTicks) + 12;// 加12像素：左右padding6
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
        var plotWidth = options.width - leftVal - rightVal;

        // console.log(options);

        var btmMeanVal = btmTicksLength > 1 ? (plotWidth / btmTicksLength) : 5;
        var topMeanVal = topTicksLength > 1 ? (plotWidth / topTicksLength) : 5;

        var btmLayout = getXLabelPixel(btmTicks, btmMeanVal, 25);
        var topLayout = getXLabelPixel(topTicks, topMeanVal);

        var plotHeight = options.height - topLayout.val - btmLayout.val;

        matrixOptions.plotWidth = plotWidth;
        matrixOptions.plotHeight = plotHeight;
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

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var SVG = __webpack_require__(13);
    var container;

    function d3SvgPaint(options) {

        container = container || d3.select(options.domEl);

        container.attr('class', 'k-chart-container')
        .style({
            'position': 'relative',
            'overflow': 'hidden'
        });

    	return SVG(container, options);
    }

    module.exports = d3SvgPaint;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function SVG(container, options) {
        var svg = container.selectAll('svg.k-chart')
        .data(['svg.k-chart']);

        svg.enter()
        .append('svg')
        .style('display', 'block')
        .attr('class', 'k-chart');

        svg.attr({
            'width': options.width,
            'height': options.height
        });

        svg.exit().remove();

        return svg;
    }

    module.exports = SVG;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function d3SvgGridLine(context, data) {

        var grid = context.selectAll('g.grid').data(['grid']);

    	grid.enter().append('g').attr('class', (d) => d);

    	grid.exit().remove();

    	var items = grid.selectAll('line').data(data);

    	items.enter().append('line');

    	items.attr({
            x1: (d) => d.x1,
            x2: (d) => d.x2,
            y1: (d) => d.y1,
            y2: (d) => d.y2,
            class: (d) => d.style,
            transform: (d) => 'translate('+ d.x +', '+ d.y +')'
        });

    	items.exit().remove();

    	return grid;

    }

    module.exports = d3SvgGridLine;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function d3SvgAxisNode(context, data) {

        var axis = context.selectAll('g.axis').data(data);

    	axis.enter().append('g');

        axis.attr('class', (d) => {
            return ['axis axis', d.orient].join('-');
        });

    	axis.exit().remove();

    	var ticks = axis.selectAll('text').data((d) => {
            return d.ticks;
        });

    	ticks.enter().append('text');

        ticks.attr({
            x: function(d) {
                return d.x;
            },
            y: function(d) {
                return d.y;
            },
            transform: function(d, i) {
                return 'translate(' + d.translate + ') rotate(' + d.rotate + ')';
            }
        }).style('text-anchor', function(d) {
            return d.anchor;
        }).text(function(d) {
            return d.tick;
        })

    	ticks.exit().remove();

    }

    module.exports = d3SvgAxisNode;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var TEXT_POINTS = [
    	{x: -8, y: 5, 'align': 'end'},
        {x: 0, y: 15, 'align': 'middle'},
        {x: 8, y: 5, 'align': 'start'},
        {x: 0, y: -5, 'align': 'middle'},
    ];

    function TipsPathData(size) {
    	if(!size) {
    		return [];
    	}
    	return [
    		'M0,0L-3,-3L-3,-10L-'+(size + 3)+',-10L-'+(size + 3)+',10L-3,10L-3,3Z',
            'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',21L-'+ (size / 2) +',21Z',
            'M0,0L 3,3L3,10L'+ (size + 3) +',10L'+ (size + 3) +',-10L3,-10L3,-3Z',
            'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',-21L-'+ (size / 2) +',-21Z',
    	];
    }

    function d3SvgAxisTips(context, data) {

        var tips = context.selectAll('g.axis-tips').data(['axis axis-tips']);

        tips.enter().append('g').attr('class', function(d) { return d; });

        tips.exit().remove();

        var items = tips.selectAll('path').data(data);

        items.enter().append('path');

        items.attr({
            d: function (d, i) {
                return TipsPathData(d.size)[i];
            },
            transform: function (d, i) {
                return 'translate(' + [d.x, d.y] + ')';
            }
        });

        items.exit().remove();

        var texts = tips.selectAll('text').data(data);

        texts.enter().append('text');

        texts.attr({
            x: function(d, i) {
                return TEXT_POINTS[i].x;
            },
            y: function(d, i) {
                return TEXT_POINTS[i].y;
            },
            transform: function(d) {
                return 'translate(' + [d.x, d.y]  + ')';
            }
        }).style('text-anchor', function(d, i) {
            return TEXT_POINTS[i].align;
        }).text(function(d) {
            return d.value;
        });

        texts.exit().remove();

    }

    module.exports = d3SvgAxisTips;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function d3SvgGridLayer(context, data) {

        var layer = context.selectAll('g.grid-layer').data(['grid-layer']);

        layer.enter().append('g');

        layer.attr({
            class: function(d) { return d; }
        });

        layer.exit().remove();

        var rect = layer.selectAll('rect').data(data);

        rect.enter().append('rect');

        rect.attr({
            width: function(d) {
                return d.width;
            },
            height: function(d) {
                return d.height;
            },
            transform: function(d) {
                return 'translate(' + [d.left, d.top] + ')';
            }
        });

        rect.exit().remove();

        return rect;

    }

    module.exports = d3SvgGridLayer;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function d3SvgAxisSubline(context, data) {
        
        var subline = context.selectAll('g.axis-subline').data(['axis-subline']);

        subline.enter().append('g');

        subline.attr('class', function(d) { return d; });

        subline.exit().remove();

        var lines = subline.selectAll('line').data(data);

        lines.enter().append('line');

        lines.attr({
            class: function(d) {
                return d.klass;
            },
            x1: function (d) {
                return d.x1;
            },
            x2: function (d) {
                return d.x2;
            },
            y1: function (d) {
                return d.y1;
            },
            y2: function (d) {
                return d.y2;
            },
            transform: function (d) {
                return 'translate(' + [d.x, d.y] + ')';
            }
        });

        lines.exit().remove();

    }

    module.exports = d3SvgAxisSubline;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function d3SvgTooltips(context, data) {
        var tooltips = context.selectAll('div.k-chart-tooltips').data(data);

        tooltips.enter().append('div');

        tooltips.attr({
            class: function(d) {
                return 'k-chart-tooltips';
            }
        }).style({
            left: function(d) {
                return d.left;
            },
            right: function(d) {
                return d.right;
            },
            top: function(d) {
                return d.top;
            }
        });

        tooltips.exit().remove();

        var rows = tooltips.selectAll('p.row').data(function(d) {
            return d.data;
        });

        rows.enter().append('p');

        rows.attr({
            class: function(d) {
                return 'row';
            }
        }).html(function(d) {
            return d.join(': ');
        });

        rows.exit().remove();

    }

    module.exports = d3SvgTooltips;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var Utils = __webpack_require__(2);
    var Chart = __webpack_require__(3);
    var d3SvgCandlestick = __webpack_require__(21);

    class Candlestick extends Chart {

        constructor(options) {
            var defaults = {
                axis: [{
                    type: 'klinear'
                }]
            };

            options = Utils.merge(defaults, options);

            super(options);

            this.options = options;

            this._bindSelfEvents();
        }

        _bindSelfEvents() {
            var self = this;

            this._dataSet.$watch('scales', function(scales) {
                var data = [], size = 0, band = 1;

                if (!self._isEmptyPlot) {
                    data = this.getCandlestickData();
                    size = data.length;
                }

                if (size) {
                    band = Math.floor(this.layoutData.plotWidth / size * 0.6);
                    band = band < 15 ? band : 15;
                    band = band > 1 ? band : 1;
                }

                self.context.call(d3SvgCandlestick, function(v) {// xScale
                    return scales[1](v) - band / 2;
                }, function(v) {// yScale
                    return scales[0](v);
                }, function(v) {// wScale
                    return band;
                }, data);

                self.fire('plot-did-mount');
            });

            Utils.bind(window, 'resize', function(ev) {
                console.log('resize');
            });
        }

        render(data) {
            super.render(data);
        }
    }

    module.exports = Candlestick;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    function drawCandlestick(d, i, x, y, w) {
        var MathFloor = Math.floor;
        var open = y(d[1]);
        var high = y(d[2]);
        var low = y(d[3]);
        var close = y(d[4]);

        var left = x(d[0]);

        var width = w(d);
        var middle = width / 2;

        if (high !== low) {
            return [
                'M' + MathFloor(left + middle), high,
    			'L' + MathFloor(left + middle), close,
    			MathFloor(left), close,
    			MathFloor(left), open,
    			MathFloor(left + middle), open,
    			MathFloor(left + middle), low,
    			MathFloor(left + middle), open,
    			MathFloor(left + width), open,
    			MathFloor(left + width), close,
    			MathFloor(left + middle), close,
    			MathFloor(left + middle), high + 'Z'
            ].join(' ');
        }

        return [
            'M' + MathFloor(left + middle), high,
			'L' + left, high,
			left + width, high
        ].join(' ');
    }


    function d3SvgCandlestick(context, x, y, w, data) {
        // console.log(data);
        var plot = context.selectAll('g.plot').data(['plot']);

        plot.enter().append('g');

        plot.attr('class', function(d) { return d; });

        plot.exit().remove();

        var items = plot.selectAll('path.item').data(data);

        items.enter().append('path');

        items.attr({
            class: function(d) {
                return ['item', (d[1] < d[4] ? 'plus' : 'minus')].join(' ');
            },
            'data-series': function(d) {
                return d[5];
            },
            'data-category': function(d) {
                return d[0];
            },
            d: function(d, i) {
                return drawCandlestick(d, i, x, y, w);
            }
        });

        items.exit().remove();

    }

    module.exports = d3SvgCandlestick;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var SimpleGrid = __webpack_require__(23);

    module.exports = {
        SimpleGrid: SimpleGrid
    };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var { _ } = __webpack_require__(0);
    var Component = __webpack_require__(4);
    var SimpleGridStore = __webpack_require__(24);
    var SimpleGridView = __webpack_require__(25);

    class SimpleGrid extends Component {
        constructor(options) {
            super(options);
            console.log('grid-options', options);
            options.columnModel = _.cloneDeep(options.columnModel);
            var store, view, dsType = options.dataSet.type;

            store = this.store = new SimpleGridStore(options);
            _.extend(options, {
                action: {},
                store: store
            });

            view = this.view = new SimpleGridView(options);
            _.extend(options, {
                view: view
            });

            this.destroyed = false;
            this._bindEvent();
            this._bindEroMsg();
        }

        _bindEvent() {
            var store = this.store;
            var view = this.view;

            store.on('data-preload', function(params) {
                store._status = 'loading';
                // view.showMask();
            });

            store.on('data-load', function(result) {
                store._status = 'idle';
                // view.hideMask();
            });
        }

        _bindEroMsg() {
            var self = this;

            function errorEvent(errMsg) {
                self.view.showMask(errMsg.message || '系统错误', 3000);
                self.fire('error', errMsg);
            }

            this.store.on('error', errorEvent);
            this.view.on('error', errorEvent);
        }

        render(initParams) {
            this.store.load(initParams);
        }

        destroy() {
            this.destroyed = true;
            // this.store.destroy();
            this.store = null;
            // this.view.destroy();
            this.view = null;
        }
    }

    module.exports = SimpleGrid;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var { _ } = __webpack_require__(0);
    var EventEmitter = __webpack_require__(1);

    class SimpleGridStore extends EventEmitter {

        constructor(options) {
            super(options);
            var self = this;
            var lazyload = false;

            this._status = 'loading';
            this._dataSet = options.dataSet;
            this.currentPage = 1;
            this.total = null;
            this._halfaked = [];

            if (!options.page) {
                this.pageSize = -1;
            } else {
                this.pageType = options.page.type || 'button';
                this.pageSize = options.page.pageSize || 100;
            }

            this.filterInfo = options.filter || [];
            this.sortInfo = options.sort || [];

            this.on('data-loaded', function(result) {
                var data = _addRowNumber(result.data, self.getParams(), true);
                self._halfaked = data;
            });

            options.dataSet.on('data-loaded', function() {
                self.fire('data-changed');
                self.currentPage = 1;
                self.load();
            });

            options.dataSet.on('error', function(errMsg) {
                self.fire('error', errMsg);
            });
        }

        _setUseParams(useParams) {
            this._useParams = useParams;
        }

        _getUseParams() {
            return this._useParams || {};
        }

        getParams() {
            return {
                start: this.pageSize * (this.currentPage - 1) || 0,
                limit: this.pageSize || 100,
                sort: this.getSortState(),
                filter: []
            };
        }

        load(useParams, callback, trigger) {
            var self = this;
            var ds = this._dataSet;
            var params;
            var sorts;

            if (useParams) {
                this._setUseParams(useParams);
                this.currentPage = 1;
                this.fire('data-changed', null);
            }

            params = _.extend(this._dataSet.params || {}, this._getUseParams(), this.getParams());

            this.fire('data-preload', params);

            if (params.bizParameter) {
                ds = ds.find(params.bizParameter);
            }

            sorts = params.sort.map(function(filter) {
                var direction = filter.direction.toUpperCase();
                return direction === 'DESC' ? '-' + filter.property : filter.property;
            });

            ds = ds/*.filter(params.filter)*/.orderBy(sorts);

            console.log('store.load:', params);

            if (params.limit !== -1) {
                ds = ds.limit(params.start, params.limit);
            }

            if (trigger) {
                ds.operate(trigger);
            }

            ds.value().then(function(result) {
                self.fire('data-loaded', result, trigger);

                if (_.isFunction(callback)) {
                    callback(result);
                }
            }, function(err) {
                self.fire('error', err);
            });

        }

        _getHalfaked() {
            return this._halfaked;
        }

        getSortState() {
            return this.sortInfo;
        }

        sort(sorts) {
            if (_.isArray(sorts)) {
                this.sortInfo = sorts;
                this.fire('sort', sorts);
                this.load(null, null, 'sort');// TODO
            }
        }
    }

    function _addRowNumber(data, params, lazyload) {
        var start = params.start + 1;
        if (!lazyload) {
            start = 1;
        }
        data.forEach(function(d, i) {
            d.rownumber = start + i;
        });
        return data;
    }

    module.exports = SimpleGridStore;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var { _, $ } = __webpack_require__(0);
    var Utils = __webpack_require__(26);
    var Component = __webpack_require__(4);

    var GRID_TITLE_HEIGHT = 34;
    var GRID_HEADER_HEIGHT = 35;
    var GRID_BODY_HEIGHT = 34;
    var GRID_TOOLBAR_HEIGHT = 49;
    var CELL_PADDING = 21;
    var FLEX_MIN_WIDTH = 35;
    var CHECKBOX_WIDTH = 37;

    var Tmpl = {
        titleTmpl: titleTmpl,
        headerContainer: headerContainer,
        headerTmpl: headerTmpl,
        bodyTmpl: bodyTmpl,
        renderTmpl: renderTmpl,
        renderEditTmpl: renderEditTmpl,
        pageTmpl: pageTmpl,
        zeroDataMask: zeroDataMask
    };

    function pickText(fragment) {
        var htmlString = new RegExp('\<.+?\>', 'g');
        if (htmlString.test(fragment)) {
            return fragment.replace(htmlString, '');
        }
        return fragment;
    }

    function _calcGridProp(options) {
        var width = options.width,
            height = options.height,
            tHeight = options.title ? GRID_TITLE_HEIGHT : 0,
            hHeight = GRID_HEADER_HEIGHT,
            fHeight = options.page ? GRID_TOOLBAR_HEIGHT : 0;

        return {
            width: width,
            height: height,
            title: { height: tHeight },
            header: {
                height: function(h) {
                    if (+h) hHeight = +h;
                    return hHeight;
                }
            },
            body: {
                height: function(h) {
                    if (+h) {
                        return +h - tHeight - hHeight - fHeight;
                    }
                    return 500 - tHeight - hHeight - fHeight;
                }
            },
            footer: {
                height: fHeight
            }
        };
    }

    function _scrollEvent(gridHeader, gridBody) {
        gridBody.on('scroll', function(ev) {
            var target = ev.currentTarget,
                left = target.scrollLeft,
                top = target.scrollTop,
                offset = {
                    scrollLeft: left,
                    scrollTop: top,
                    scrollWidth: target.scrollWidth,
                    scrollHeight: target.scrollHeight,
                    viewClientWidth: gridBody.width(),
                    viewClientHeight: gridBody.height()
                };

            gridHeader.css({
                'left': -left + 'px'
            });
            gridBody.trigger('scrollend', offset);
        })
    }

    function _gridBodyEvent(gridHeader, gridBody, selType, rowSet) {
        var items = [];
        var selected = [];
        var selectedAll = false;
        var preActived = null;
        var preselect = rowSet.preselect || function() { return true; };

        return {
            once: function() {
                gridBody.on('click.row dblclick.row', 'ul.s-record-rows', items, function(ev) {
                    var li = $(this),
                        rownumber = li.data('rownumber'),
                        filterItem;

                    filterItem = items.filter(function(item) {
                        return item.rownumber == rownumber;
                    })[0];

                    gridBody.trigger('item' + ev.type, {
                        'item': filterItem,
                        'event': ev
                    });
                });

                gridBody.on('click.cell', 'li.s-record-cell', items, function(ev) {
                    var li = $(this),
                        ul = li.parent('ul.s-record-rows'),
                        rownumber = ul.data('rownumber'),
                        dataIndex = li.data('dataindex'),
                        filterItem;

                    filterItem = items.filter(function(item) {
                        return item.rownumber == rownumber;
                    })[0];

                    gridBody.trigger('cellclick', {
                        'value': filterItem[dataIndex],
                        'item': filterItem,
                        'columnIndex': li.index(),
                        'rowIndex': items.indexOf(filterItem),
                        'event': ev
                    });

                    if (li.hasClass('checkbox-col') && !li.hasClass('s-readonly')) {
                        if (ul.hasClass('s-record-selected')) {
                            ul.removeClass('s-record-selected');
                            selected.splice(selected.indexOf(ul.get(0)), 1);

                            gridHeader.find('li.checkbox-col').removeClass('s-record-selected');
                            gridBody.trigger('selectionchange');
                        } else {
                            if (preselect() !== false) {
                                ul.addClass('s-record-selected');
                                selected.push(ul.get(0));
                                gridBody.trigger('selectionchange');
                            }
                        }
                        ev.bubbles = false;
                        return false;
                    }
                    var activeRowClass = rowSet.activeClass || '';
                    if (preActived && preActived !== ul) {
                        preActived.removeClass('s-record-active ' + activeRowClass);
                    }
                    preActived = ul.addClass('s-record-active ' + activeRowClass);
                });
            },
            setItems: function(sourceItems) {
                items = sourceItems;

                var rows = gridBody.find('ul.s-record-rows');
                var selectRowNumbers = selected.map(function(item) {
                    return $(item).data('rownumber');
                });

                _.forEach(rows, function(row) {
                    var $row = $(row);
                    if (_.includes(selectRowNumbers, $row.data('rownumumber'))) {
                        return $row.addClass('s-record-selected');
                    }
                    if (preActived && preActived.data('rownumber') === $row.data('rownumber')) {
                        preActived = $row.addClass('s-record-selec ' + rowSet.activeClass || '');
                    }
                });

                if (selectedAll) {
                    gridHeader.find('li.checkbox-col').addClass('s-record-selected');
                } else {
                    gridHeader.find('li.checkbox-col').removeClass('s-record-selected');
                }
            }
        }
    }

    var sort = 's-column-sort';
    var asc = 's-column-asc';
    var desc = 's-column-desc';

    function _gridHeaderEvent(gridHeader, gridBody, bodyEvt, opts) {
        gridHeader.on('click', 'li.s-record-cell', function(ev) {
            var li = $(this);
            var doSort = li.data('sort');
            var property = li.data('index');
            var direction = 'asc';
            opts.rows.preselect = opts.rows.preselect || function() { return true; };

            if (li.hasClass(sort)) {
                if (li.hasClass(asc)) {
                    li.removeClass(asc).addClass(desc);
                    direction = 'desc';
                } else {
                    li.removeClass(desc).addClass(asc);
                    direction = 'asc';
                }
            } else {
                li.addClass(sort).addClass(asc);
            }

            if (doSort !== false && property) {
                gridHeader.trigger('headerclick', property);
                gridHeader.trigger('sort', {
                    'property': property,
                    'direction': direction
                });
            }
        });
    }

    function _getSimpleGridView(options) {
        var wrapId = ['s', options.domEl.id].join('-');
        var container = $(options.domEl).empty();
        var gridWrapper = $('<div class="s-grid-panel"></div>').attr('id', wrapId);
        var gridTitleTmpl = Tmpl.titleTmpl();
        var gridHeaderTmpl = Tmpl.headerTmpl();

        var gridHeaderContainer = Tmpl.headerContainer();
        var gridBodyTmpl = Tmpl.bodyTmpl();
        var renderTmpl = Tmpl.renderTmpl();
        var renderEditTmpl = Tmpl.renderEditTmpl();
        var gridToolbarTmpl = Tmpl.pageTmpl();

        var gridTitle = options.title ? _.template(gridTitleTmpl)({
            title: options.title
        }) : null;
        var gridHeaderFn = _.template(gridHeaderTmpl);
        var gridHeader = $(gridHeaderContainer).append(gridHeaderFn({
            columns: options.columns
        }));

        var gridProp = _calcGridProp(options);
        var gridToolbar = gridProp.footer.height ? gridToolbarTmpl : null;

        gridWrapper.width(gridProp.width).prepend(gridTitle);
        var gridBody = gridWrapper.append(gridHeader)
        .append(gridBodyTmpl).find('.s-grid-body');

        gridWrapper.append(gridToolbar);
        gridWrapper.appendTo(container);

        gridProp.header.height(gridHeader.get(0).offsetHeight);
        gridBody.height(gridProp.body.height());

        var fnRender;
        if (options.checkbox) {
            fnRender = _.template(renderEditTmpl, {
                'imports': { 'pickText': pickText }
            });
        } else {
            fnRender = _.template(renderTmpl, {
                'imports': { 'pickText': pickText }
            });
            gridHeader.find('li.checkbox-col').remove();
        }

        var tableEvent = _gridBodyEvent(gridHeader, gridBody, options.selType, options.rows || {});
        tableEvent.once();
        _gridHeaderEvent(gridHeader, gridBody, tableEvent, options);

        _scrollEvent(gridHeader, gridBody);

        return {
            panel: gridWrapper,
            header: gridHeader,
            body: gridBody,
            render: function(obj) {
                var total = obj.items.length;

                gridWrapper.find('.s-record-body').eq(0).empty()
                    .width(total ? 'auto' : gridHeader.find('.s-record-header').outerWidth())
                    .height(total ? 'auto' : 1)
                    .append(fnRender(obj));

                tableEvent.setItems(obj.items);
            }
        };
    }

    function _setRowClass(rows) {
        if (rows && _.isFunction(rows.setRowClass)) {
            return rows.setRowClass;
        }
        return function(record) { return ''; };
    }

    function _setCheckboxReadonly(rows) {
        if (rows && _.isFunction(rows.checkboxReadonly)) {
            return rows.checkboxReadonly;
        }
        return function(record) { return false; };
    }

    class SimpleGridView extends Component {

        constructor(options) {
            super(options);

            this.columns = options.columns || options.columnModel;
            this._dataSet = options.dataSet;
            this.store = options.store;

            this._columns = this._initColumnProp(this.columns, options);

            var view = this.__grid__ = _getSimpleGridView({
                title: options.title,
                domEl: options.domEl,
                width: options.width,
                height: options.height,
                dataSet: options.dataSet,
                columns: this._columns,
                rows: options.rows || {},
                checkbox: options.checkbox,
                page: options.page,
                selType: '',
                multiColumnSort: ''
            });

            this._fnSetRowClass = _setRowClass(options.rows);
            this._fnCheckboxReadonly = _setCheckboxReadonly(options.rows);

            this._bindEvent(view, options);
        }

        _initColumnProp(columns, options) {
            var self = this;
            var calcWidth;
            var colFmtFn = {};

            this._flexBox = {
                count: 0,
                cols: {},
                share: 0,
                shareWidth: null,
                constWidth: options.checkbox ? CHECKBOX_WIDTH : 0
            };

            columns.forEach(function(column) {
                setColumnWidth(column);
                setColumnRender(column);
            });

            this._updateFlexBox();

            function setColumnWidth(column) {
                if (column.width === undefined) {
                    if (_.isNumber(column.flex)) {
                        self._flexBox.cols[column.dataIndex] = column;
                        self._flexBox.share += column.flex;
                        self._flexBox.count++;
                    } else {
                        column.width = _.min([_.max([column.minWidth, Utils.measureText(column.text).width + 5]), column.maxWidth]);
                    }
                }
                self._flexBox.constWidth += +column.width || 0;
            }

            function setColumnRender(column) {
                if (_.isUndefined(column.renderer)) {
                    if (_.isString(column.format)) {
                        if (column.vtype === 'number') {
                            colFmtFn[column.dataIndex] = colFmtFn[column.dataIndex]; /*||numberFormat(column.format)*/

                            column.renderer = function(value) {
                                // return colFmtFn[column.dataIndex](value);
                                return value;// TODO
                            };
                        } else if (column.vtype === 'date') {
                            colFmtFn[column.dataIndex] = colFmtFn[column.dataIndex]; /*||numberFormat(column.format)*/

                            column.renderer = function(value) {
                                // return colFmtFn[column.dataIndex](value);
                                return value;// TODO
                            };
                        } else {
                            console.error('format ' + column.dataIndex + ' but vtype is undefined');
                            column.renderer = function(value) { return value; };
                        }
                    } else {
                        column.renderer = function(value) { return value; };
                    }
                }
            }

            return columns;
        }

        _bindEvent(view, options) {
            var self = this;

            this.store.on('data-loaded', function(result, trigger, append) {
                var data = self.store._getHalfaked();

                view.render({
                    columns: self._columns,
                    items: result.data,
                    fnSetRowClass: self._fnSetRowClass,
                    fnCheckboxReadonly: self._fnCheckboxReadonly
                });

                self.fire('rendered');
            });

            this.store.on('data-loaded', function(result) {
                var el = $(self.domEl);
                var zeroMaskEl = el.find('.szse-empty-data');

                if (result.data && result.data.length === 0) {
                    if (zeroMaskEl.length !== 0) {
                        zeroMaskEl.show();
                    } else {
                        zeroMaskEl = $(Tmpl.zeroDataMask());
                        el.find('.s-grid-body').append(zeroMaskEl);
                    }
                } else {
                    if (zeroMaskEl.length !== 0) {
                        zeroMaskEl.hide();
                    }
                }
            });

            view.body.on('itemclick', function(ev, args) {
                console.log(args);
                self.fire('row-clicked', args.item, args.event);
            });

            view.body.on('itemdblclick', function(ev, args) {
                console.log(args);
                self.fire('row-dblclicked', args.item, args.event);
            });

            view.body.on('scrollend', function(ev, offset) {
                // console.log(offset);
                if (options.action && _.isFunction(options.action.scroll)) {
                    options.action.scroll(offset);
                }
                self.fire('scroll', offset);
            });

            view.header.on('headerclick', function(ev, property) {
                var col = self._columns.filter(function(column) {
                    return column.dataIndex === property;
                })[0];
                self.fire('header-clicked', col);
            });

            view.header.on('sort', function(ev, sortInfo) {
                console.log('sortInfo:', sortInfo);
                var sorts = self.store.getSortState();
                _.remove(sorts, function(sort, i) {
                    return sort.property == sortInfo.property;
                });
                sorts.unshift(sortInfo);
                console.log('sorts:', sorts);
                options.store.sort(sorts);
            });
        }

        _updateFlexBox(column) {
            var flexBox =this._flexBox;
            var isFlexCol;

            if (column) {
                isFlexCol = flexBox.cols[column.dataIndex];
                if (isFlexCol) {
                    delete flexBox.cols[column.dataIndex];
                    flexBox.count--;
                    flexBox.share = flexBox.share - column.flex;
                    flexBox.constWidth += column.width;
                } else {
                    flexBox.constWidth += column.width - column._preWidth;
                }
            }

            var calcWidth, flexCol, countColsMinWidth, colSize;
            var nextShare = [], nextSubShareWidth = 0, nextShareFlex = 0;

            if (flexBox.count) {
                colSize = this.columns.length;
                flexBox.containerWidth = _.isNumber(this.width) ? this.width - 18 : +this.width.match(/[\d|\.]+/)[0] / 100 * Utils.getDOMOffset(this.domEl).width - 18;

                calcWidth = (flexBox.containerWidth - flexBox.constWidth - CELL_PADDING * colSize) / flexBox.share;
                flexBox.shareWidth = calcWidth < FLEX_MIN_WIDTH ? FLEX_MIN_WIDTH : calcWidth;

                _.forEach(flexBox.cols, function(col) {

                    if (col.minWidth && col.minWidth > col.flex * flexBox.shareWidth) {
                        col.width = col.minWidth;
                        nextSubShareWidth += col.minWidth - flexBox.shareWidth;
                        nextShareFlex += flexBox.share - col.flex;
                    } else {
                        nextShare.push(col);
                    }
                });

                if (nextSubShareWidth) {
                    calcWidth = (calcWidth * nextShareFlex - nextSubShareWidth) / nextShareFlex;
                    flexBox.shareWidth = calcWidth < FLEX_MIN_WIDTH ? FLEX_MIN_WIDTH : calcWidth;

                    nextShare.forEach(function(col) {
                        col.width = Math.round(col.flex * flexBox.shareWidth);
                    });
                } else {
                    for (var dataIndex in flexBox.cols) {
                        flexCol = flexBox.cols[dataIndex];
                        flexCol.width = Math.round(flexCol.flex * flexBox.shareWidth);
                    }
                }
            }
        }

        getSelection() {
            return [];
        }

    }

    function titleTmpl() {
        return `<div class="s-grid-title"><%=title%></div>`;
    }

    function headerContainer() {
        return `<div class="s-grid-header"></div>`;
    }

    function headerTmpl() {
        return `<div class="s-record-header">
            <ul class="s-record-rows">
                <li class="s-record-cell checkbox-col" data-sort="false">
                    <div class="s-checkbox">
                        <label class="s-checkbox-label"></label>
                    </div>
                </li>
                <% _.forEach(columns, function(column, index) {%>
                    <li class="s-record-cell <% if (column.sortDir) { %> s-column-<%=column.sortDir%> <% } %>" data-index="<%-column.dataIndex%>" data-sort="<%=column._sortable%>">
                        <div style="width:<%-column.width%>px" class="s-column-align-<%=column.align%> s-column-cell-<%=column.dataIndex%>" title="<%=column.title || column.text%>">
                            <%=column.text%>
                        </div>
                    </li>
                <% }) %>
            </ul>
        </div>`;
    }

    function bodyTmpl() {
        return `<div class="s-grid-body">
            <div class="s-grid-view">
                <div class="s-record-body"></div>
            </div>
        </div>`;
    }

    function renderTmpl() {
        return `<% _.forEach(items, function(item, idx) { %>
            <ul class="s-record-rows <%=fnSetRowClass(item)%><% if (idx % 2 !== 0) { %>s-stripe-rows<% }%>" data-rownumber="<%=item.rownumber%>" tabindex="0">
                <% _.forEach(columns, function(column, index) { %>
                    <li class="s-record-cell" data-dataindex="<%=column.dataIndex%>">
                        <% var _cellData = column.renderer(item[column.dataIndex], {rowIndex: idx}, {data: item})%>
                        <div style="width: <%-column.width%>px;" <% if (column.align) { %> class="s-column-align-<%=column.align%>" <% } %> title="<%=pickText(_cellData)%>">
                            <%= _cellData %>
                        </div>
                    </li>
                <% }) %>
            </ul>
        <% }) %>`;
    }

    function renderEditTmpl() {
        return `<% _.forEach(items, function(item, idx) { %>
            <ul class="s-record-rows <%=fnSetRowClass(item)%> <% if (idx % 2 !== 0) { %>s-stripe-rows<% }%> <% if (fnCheckboxReadonly(item)) { %>s-readonly<% } %>" data-rownumber="<%=item.rownumber%>" tabindex="0">
                <li class="s-record-cell checkbox-col<% if (fnCheckboxReadonly(item)) { %> s-readonly<% } %>">
                    <div class="s-checkbox">
                        <label class="s-checkbox-label"></label>
                    </div>
                </li>
                <% _.forEach(columns, function(column, index) { %>
                    <li class="s-record-cell" data-dataindex="<%=column.dataIndex%>">
                        <% var _cellData = column.renderer(item[column.dataIndex], {rowIndex: idx}, {data: item})%>
                        <div style="width: <%-column.width%>px;" <% if (column.align) { %> class="s-column-align-<%=column.align%>" <% } %> title="<%=pickText(_cellData)%>">
                            <%= _cellData %>
                        </div>
                    </li>
                <% }) %>
            </ul>
        <% }) %>`;
    }

    function pageTmpl() {
        return `<div class="s-grid-toolbar s-toolbar-bottom">
            <div class="s-toolbar-text s-inline-block sp-displayInfo">暂无数据</div>
            <div class="s-toolbar-text s-inline-block">
                每页 <select class="sp-pagesize" name=""></select> 条
            </div>
            <div class="s-inline-block s-page-position-rside">
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-first">
                        <span><<</span>
                    </a>
                </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-prev">
                        <span><</span>
                    </a>
                </div>
                <div class="s-toolbar-input s-btn-disabled s-inline-block">
                    <input type="text" name="" placeholder="" class="sp-currentPage">
                </div>
                <div class="s-toolbar-text s-inline-block sp-afterTextItem">of </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-next">
                        <span>></span>
                    </a>
                </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-last">
                        <span>>></span>
                    </a>
                </div>
            </div>
            <div class="s-toolbar-button s-btn-disabled s-inline-block s-refresh-position-rside">
                <a herf="javascript:void(0)" class="s-refresh">
                    <span>刷新</span>
                </a>
            </div>
        </div>`;
    }

    function zeroDataMask() {
        return `<div class="szse-empty-data glyphicon glyphicon-info-sign pull-left">暂无数据</div>`;
    }


    module.exports = SimpleGridView;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
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
    var measureText = (function() {
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


    var getDOMOffset = (function() {
        var options = { visibility: 'hidden', display: 'block' };
        var cssExpand = ['Top', 'Right', 'Bottom', 'Left'];
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
        var originElem, storeWidth, recursion = 0;

        var css = function(elem, attr) {
            if (elem && elem.nodeType === 1) {
                return window.getComputedStyle(elem, null)[attr];
            }
        };

        var augmentWidthOrHeight = function(elem, name) {
            var i = name === 'width' ? 1 : 0, val = 0;
            for ( ; i < 4; i += 2) {
                val -= parseInt(css(elem, 'padding' + cssExpand[i]), 10);
                val -= parseInt(css(elem, 'border' + cssExpand[i] + 'Width'), 10);
            }
            return val;
        };

        var getWidthOrHeight = function(elem, name) {
            var val = (name === 'width') ?
                (elem && elem.nodeType === 1 && elem.offsetWidth) :
                (elem && elem.nodeType === 1 && elem.offsetHeight);
            return (val + augmentWidthOrHeight(elem, name));
        };

        var swap = function(elem, options, callback) {
            var ret, name, old ={};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.call(elem);
            for(name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        };

        var getOffset = function(elem, minHeight) {
            var width, height;
            if (!originElem) { originElem = elem; }

            if (elem && elem.nodeType === 1 && (elem.offsetWidth === 0 && elem.offsetHeight === 0)) {
                if (rdisplayswap.test(css(elem, 'display'))) {
                    return swap(elem, options, function() {
                        width = getWidthOrHeight(originElem, 'width');
                        height = getWidthOrHeight(originElem, 'height');

                        if (!width) { return getOffset(elem.parentNode); }

                        if (!height) {
                            storeWidth = width;
                            return getOffset(elem.parentNode);
                        }

                        originElem = undefined;
                        return {
                            width: width,
                            height: height
                        };
                    });
                } else {
                    width = getWidthOrHeight(elem, 'width');
                    if (!storeWidth && width) {
                        storeWidth = width;
                    }
                    return getOffset(elem.parentNode);
                }
            } else {
                width = getWidthOrHeight(elem, 'width');
                if (elem && elem.nodeName === 'BODY') {
                    height = minHeight || 300;
                } else {
                    height = getWidthOrHeight(elem, 'height');
                    height = height >= 300 ? height : minHeight || 300;
                }
                if (storeWidth && storeWidth > 0) {
                    width = storeWidth;
                }
                originElem = storeWidth = undefined;
                return {
                    width: width,
                    height: height
                };
            }
        };

        return getOffset;

    })();


    exports.version  = version;
    exports.guid     = guid;
    exports.measureText  = measureText;
    exports.getDOMOffset = getDOMOffset;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var ArrayRowDataSet = __webpack_require__(28);

    module.exports = {
        ArrayRowDataSet: ArrayRowDataSet
    };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
    var _ = __webpack_require__(0).lodash;
    var RowDataSet = __webpack_require__(29);
    var Sort = __webpack_require__(31);

    class ArrayRowDataSet extends RowDataSet {

        constructor(options) {
            super(options || {});

            this.type = 'array';
            this.columnModel = options.columnModel;
            this._actions = [];
            if (options.data && options.data.length) {
                this.total = options.data.length;
            }

            this._datas = this._extendPropsToDatas(options.data);

            this._sourceDatas = options.data;
        }

        setData(datas, flag) {
            if (flag) {
                datas = this._datas.concat(datas);
                this._datas = this._extendPropsToDatas(datas);
                this.fire('data-changed', this._datas);
            } else {
                this._datas = this._extendPropsToDatas(datas);
                this.fire('data-changed', this._datas);
            }
        }

        _extendPropsToDatas(datas) {
            var columns = this.columnModel, arr = [], result;

            columns.forEach(function(column) {
                if (column.vtype === 'cn_string') {
                    arr.push(column.dataIndex);
                }
            });

            result = datas.map(function(data, index) {
                data._id = index;
                arr.forEach(function(dataIndex) {
                    // data['cn_' + dataIndex] = Pinyin.translate(data[dataIndex] || '');
                    data['cn_' + dataIndex] = data[dataIndex] || '';
                });
                return data;
            });

            return result;
        }

        value() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._value
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions).value();
        }

        _value() {
            return this._datas;
        }

        done() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._done
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions).done();
        }

        _done() {
            return this._datas;
        }

        addColumns() {

        }

        _addColumns(columns) {

        }

        changeDecimalToNumber(items) {

        }

        doCalculateColumn(columnModels, datas, formula) {

        }

        limit(start, limit) {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._limit
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions);
        }

        _limit(start, limit) {
            if (+start < 0 || +limit < 0) {
                return [];
            }
            var datas = this._chainResult || this._datas, stop;
            if (limit === undefined) {
                return datas.slice(start);
            }
            stop = Math.min(start + limit, datas.length);
            return datas.slice(start, stop);
        }

        orderBy(iteratees) {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._orderBy
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions);
        }

        _orderBy(iteratees) {
            var datas = this._chainResult || this._datas, self = this;
            var layers, key, dire, result;

            try {
                datas = datas.slice();
                if (!(iteratees instanceof Array) || iteratees.length === 0) {
                    return datas;
                }

                iteratees = iteratees.map(function(iteratee) {
                    if (iteratee.charAt(0) === '-') {
                        return {
                            field: iteratee.substring(1),
                            dire: -1
                        };
                    } else if (iteratee.charAt(0) === '+') {
                        return {
                            field: iteratee.substring(1),
                            dire: 1
                        };
                    }
                    return {
                        field: iteratee,
                        dire: 1
                    }
                });

                iteratees.push({
                    field: '_id',
                    dire: 1
                });

                layers = iteratees.length;

                result = Sort.quickSort(datas, layers, function(item, mid, layer) {
                    key = iteratees[layer].field;
                    dire = iteratees[layer].dire;
                    return self._compareAscending(item[key], mid[key]) * dire;
                });

                return result;
            } catch (e) {
                console.log(e);
            }
        }

        _compareAscending(value, other) {
            if (value !== other) {
                var valIsNull = value === null,
                    valIsUndef = value === undefined,
                    valIsReflexive = value === value;

                var othIsNull = other === null,
                    othIsUndef = other === undefined,
                    othIsReflexive = other === other;

                if (
                    (value > other && !othIsNull) ||
                    !valIsReflexive ||
                    (valIsNull && !othIsUndef && othIsReflexive) ||
                    (valIsUndef && othIsReflexive)
                ) {
                    return 1;
                }

                if (
                    (value < other && !valIsNull) ||
                    !othIsReflexive ||
                    (othIsUndef && valIsReflexive)
                ) {
                    return -1;
                }
            }
            return 0;
        }

        _pageSort(from, limit, iteratees, fnCompare) {

        }

        _getColumnByDataIndex(dataIndex) {

        }

        groupBy(columnName, aggregeteFn) {

        }

        _groupBy(columnName, aggregeteFn) {

        }

        filter() {

        }

        query() {

        }

        operate(operation) {
            var self = this;
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: function() {
                    return self._chainResult || self._datas;
                }
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        max(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._max
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _max(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.maxBy(datas, columnName)[columnName]
            };
        }

        min(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._min
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _min(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.minBy(datas, columnName)[columnName]
            };
        }

        extent(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._extent
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _extent(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: [_.minBy(datas, columnName)[columnName], _.maxBy(datas, columnName)[columnName]]
            };
        }

        sum(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._sum
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _sum(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.sumBy(datas, columnName)
            };
        }

        avg(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._avg
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _avg(columnName) {
            var datas = this._chainResult || this._datas;
            if (datas.length > 0) {
                return {
                    column: columnName,
                    value: _.sumBy(datas, columnName) / data.length
                };
            }
        }

        count() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._count
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _count() {
            var datas = this._chainResult || this._datas;
            var length = datas.length;
            return {
                value: length
            };
        }

    }


    class ActionWrapper {

        constructor(ds, actions, operation) {
            this.ds = ds;
            this._actions = actions || [];

            if (operation === 'statistic') {
                return this.value(operation);
            }
        }

        _setActions(actions) {
            var i, index = -2, len = actions.length, arr = [];

            for (i = 0; i < len; i++) {
                if (actions[i].func.name === '_orderBy') {
                    var args = Array.prototype.slice.call(actions[i].args);
                    // console.log(args);
                }
                if (actions[i].func.name === '_limit') {

                }
            }

            if (arr.length !== 0) {

            }

            return actions;
        }

        value(operation) {
            var actions = this._actions, self = this, args, result;
            actions = this._setActions(actions);

            // console.log('actions:', actions);

            return new Promise(function(resolve, reject) {
                actions.forEach(function(action, index) {
                    try {
                        if (!((args = action.args) instanceof Array)) {
                            args = Array.prototype.slice.call(args);
                        }
                        result = self.ds._chainResult = action.func.apply(self.ds, args);
                    } catch (e) {
                        self.ds._chainResult = null;
                        console.log(action.func.name + ' 函数出错');
                        reject(action.func.name + '函数出错');
                        return;
                    }
                });
                self.ds._chainResult = null;
                resolve(operation === 'statistic' ? result : {
                    data: result
                });
            })

        }

        done() {
            var actions = this._actions, self = this, args, result;
            actions = this._setActions(actions);

            console.log('actions:', actions);

            actions.forEach(function(action, index) {
                if (!((args = action.args) instanceof Array)) {
                    args = Array.prototype.slice.call(args);
                }
                result = self.ds._chainResult = action.func.apply(self.ds, args);
            });
            self.ds._chainResult = null;
            return result;
        }


    }


    ActionWrapper.prototype.count = ArrayRowDataSet.prototype.count;
    ActionWrapper.prototype.limit = ArrayRowDataSet.prototype.limit;
    ActionWrapper.prototype.orderBy = ArrayRowDataSet.prototype.orderBy;
    ActionWrapper.prototype.operate = ArrayRowDataSet.prototype.operate;


    module.exports = ArrayRowDataSet;


}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var DataSet = __webpack_require__(30);

    class RowDataSet extends DataSet {

        constructor(config) {
            super(config);
        }

        find(bizParameter) {
            // <debug>
            console.warn("The Method <find> subclass that you are using definde a function to extend.");
            // </debug>
        }

        sort(sorts) {
            // <debug>
            console.warn("The Method <sort> subclass that you are using definde a function to extend.");
            // </debug>
        }

        filter(filters) {
            // <debug>
            console.warn("The Method <filter> subclass that you are using definde a function to extend.");
            // </debug>
        }

        count() {
            // <debug>
            console.warn("The Method <count> subclass that you are using definde a function to extend.");
            // </debug>
        }

        sum(fieldName) {
            // <debug>
            console.warn("The Method <sum> subclass that you are using definde a function to extend.");
            // </debug>
        }

        max(fieldName) {
            // <debug>
            console.warn("The Method <max> subclass that you are using definde a function to extend.");
            // </debug>
        }

        min(fieldName) {
            // <debug>
            console.warn("The Method <min> subclass that you are using definde a function to extend.");
            // </debug>
        }

        operate() {
            // <debug>
            console.warn("The Method <operate> subclass that you are using definde a function to extend.");
            // </debug>
        }

        orderBy() {
            // <debug>
            console.warn("The Method <orderBy> subclass that you are using definde a function to extend.");
            // </debug>
        }

        catch() {
            // <debug>
            console.warn("The Method <catch> subclass that you are using definde a function to extend.");
            // </debug>
        }

        saveAs(parameters, format) {
            // <debug>
            console.warn("The Method <saveAs> subclass that you are using definde a function to extend.");
            // </debug>
        }

    }

    module.exports = RowDataSet;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

    var EventEmitter = __webpack_require__(1);

    class DataSet extends EventEmitter {
        constructor(options) {
            super(options);
            this.data = options.data;
        }
    }

    module.exports = DataSet;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {

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
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=cube.js.map
define(function(require, exports, module) {
    var { lodash } = require('../../../core/shim/shim');
    var EventEmitter = require('../../../core/event-emitter/EventEmitter');

    class SimpleGridStore extends EventEmitter {
        constructor(options) {
            super(options);

        }

        _setUseParams(useParams) {

        }

        _getUseParams() {

        }

        getParams() {

        }

        load(useParams, callback, trigger) {

        }

        _getHalfaked() {

        }

        getSortState() {

        }

        sort(sorts) {

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

});

define(function(require, exports, module) {

    var EventEmitter = require('core/event-emitter/EventEmitter');

    class DataSet extends EventEmitter {
        constructor(options) {
            super(options);
            this.data = options.data;
        }
    }

    module.exports = DataSet;

});

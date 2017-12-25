define(function(require, exports, module) {
    var EventEmitter = require('../core/event-emitter/EventEmitter');

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

});

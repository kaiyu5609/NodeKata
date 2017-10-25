define(function(require, exports, module) {
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

});

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

	try{
		Object.defineProperty(scope, name, {
			set: setter,
			get: getter
		});
	} catch(error) {}
}

function observer() {
	this.$$watchers = {};
}

observer.prototype.$watch = function(name, cb) {
	if(!this.$$watchers.hasOwnProperty(name)) {
		this.$$watchers[name] = [];
		defineProperty(this, name, this.$$watchers[name]);
	}

	this.$$watchers[name].push(cb);
};

/**
 * Export `observer`
 */
module.exports = observer;
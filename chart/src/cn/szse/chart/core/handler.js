'use strict';

var utils = require('./utils');

var callEvent = function(callback) {
	return function(event) {
		event = event || window.event;
		callback.call(this, event);
	};
};

var handler = function(elements, type, callback) {
	if(!elements.length) {
		elements = [elements];
	}

	utils.each(elements, function(element) {
		if (element.addEventListener) {
			element.addEventListener(type, callEvent(callback), false);
		} else if (element.attachEvent) {
			if (type === 'input') {
				type = "propertychange";
			}
			element.attachEvent('on' + type, callEvent(callback));
		}
	});
};

/**
 * Export `handler`
 */
module.exports = handler;
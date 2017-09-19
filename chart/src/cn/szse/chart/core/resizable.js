'use strict';
var handler  = require('./handler');
var observer = require('./observer');

var resizable = new observer();

handler(window, 'resize', function(event) {
	resizable.resize = event;
});

module.exports = resizable;
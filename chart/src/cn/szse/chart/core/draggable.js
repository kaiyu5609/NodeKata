'use strict';

var handler    = require('./handler');
var observer = require('./observer');

var draggable = new observer();

handler(document, 'mousedown', function(event) {
	if(event.target && event.target.tagName.toLocaleLowerCase() === 'rect') {
		draggable.uid = event.target.id;
		draggable['start'+ draggable.uid] = [event.pageX, event.pageY];
		draggable.$EventIsSelection = true;
	}			
});

handler(document, 'mousemove', function(event) {
	if(draggable.$EventIsSelection) {
		draggable['drag'+ draggable.uid] = [event.pageX, event.pageY];
	}
});

handler(document, 'mouseup', function(event) {			
	draggable['stop'+ draggable.uid] = [event.pageX, event.pageY];
	draggable.$EventIsSelection = false;
});

module.exports = draggable;


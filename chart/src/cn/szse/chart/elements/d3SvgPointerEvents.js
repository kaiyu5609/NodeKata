'use strict';

var CLASS_LIST = [
	'cursor-line-vertical', 
	'cursor-line-horizontal'
	];

var CLASS_MAPS = CLASS_LIST.map((d) => 'line.' + d).join(',');

/**
 * PointerEvents
 * @private	 
 * @method d3SvgPointerEvents
 * @param {Document} context
 * @param {Array} data 
 * @returns {void}
 */
function d3SvgPointerEvents(context, data) {
	var pointer = context.selectAll('g.pointer-events').data(['pointer-events']);
	pointer.enter().append('g').attr('class', (d) => d);
	pointer.exit().remove();

	var lines = pointer.selectAll(CLASS_MAPS).data(data);
	lines.enter().append('line').attr('class', (d, i) => {
		return CLASS_LIST[i];
	});

	lines.attr('x1', function(d) {
		return d.x1;
	}).attr('x2', function(d) {
		return d.x2;
	}).attr('y1', function(d) {
		return d.y1;
	}).attr('y2', function(d) {
		return d.y2;
	}).attr('transform', function(d) {
		return 'translate('+ d.x +', '+ d.y +')';
	});
	
	lines.exit().remove();
}

/**
 * Export `d3SvgPointerEvents`
 */
module.exports = d3SvgPointerEvents;
'use strict';

/**
 * 比例尺刻度
 * @public	 
 * @method d3SvgAxisNodes
 * @param {Document} context
 * @param {Array} data [{x: number, y: number, value: number, tick: string}, ...]
 * @param {String} orient `left|right|top|bottom`
 * @param {String} label 坐标刻度说明
 * @returns {void}
 */	
function d3SvgAxisNodes(context, data, orient, label) {
	var axis = context.selectAll('g.axis-'+ orient).data([orient]);
	axis.enter().append('g').attr('class', 'axis axis-' + orient);
	axis.exit().remove();

	var items = axis.selectAll('text').data(data);
	items.enter().append('text')
	.attr('x', function(d) {
		return d.x;
	}).attr('y', function(d) {
		return d.y;
	});
	
	items
	.attr('class', function(d) {
		return d.hasOwnProperty('value') ? (d.value >= 0 ? 'tick-plus' : 'tick-minus') : 'tick-nums';
	})
	.style('text-anchor', function(d) {
		return d.anchor;
	}).text(function(d) {
		return d.tick;
	}).attr('transform', function(d) {
		return 'translate('+ d.translate +')rotate('+ d.rotate +')';
	});

	items.exit().remove();
}

/**
 * Export `d3SvgAxisNodes`
 */
module.exports = d3SvgAxisNodes;
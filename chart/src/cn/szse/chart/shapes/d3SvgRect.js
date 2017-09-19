'use strict';

/**
 * 矩形
 * @public	 
 * @method d3SvgRect
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgRect(context, array, x, y, w, h, style) {
	var rect = context.selectAll('g.graph-rect').data(['graph-rect']);
	
	rect.enter().append('g').attr('class', (d) => d);
	rect.exit().remove();

	var items = rect.selectAll('rect').data(array);	
	items.enter().append('rect').attr('class', (d) => style(d));

	items.attr('width', (d, i) => w(d, i)).attr('height', (d, i) =>  h(d, i)).attr('x', (d, i) => x(d, i) + 0.5).attr('y', (d, i) => y(d, i));
	
	items.exit().remove();
}

/**
 * Export `d3SvgRect`
 */
module.exports = d3SvgRect;
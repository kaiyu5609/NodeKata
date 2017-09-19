'use strict';

/**
 * 圆点
 * @public	 
 * @method d3SvgPoint
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgPoint(context, array) {
	var points = context.selectAll('g.point-hover').data(['point-hover']);
	points.enter().append('g').attr('class', (d) => d);
	points.exit().remove();

	var items = points.selectAll('circle').data(array);
	items.enter().append('circle').attr('r', 2);

	items.attr('cx', (d) => d.x + 0.5).attr('cy',  (d) => d.y);

	items.exit().remove();
}

/**
 * Export `d3SvgPoint`
 */
module.exports = d3SvgPoint;
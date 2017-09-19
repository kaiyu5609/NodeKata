'use strict';

/**
 * 圆点
 * @public	 
 * @method d3SvgMarker
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgMarker(context, array, x, y, style) {

	var markerC = [];
	var markerX = [];

	array.forEach(function(d) {
		if(d[2] === 'C') {
			markerX.push(d);
		} else {
			markerC.push(d);
		}
	});

	var marker = context.selectAll('g.graph-marker').data(['graph-marker']);
	
	marker.enter().append('g').attr('class', (d) => d);
	marker.exit().remove();

	var point = marker.selectAll('circle').data(markerC);
	point.enter().append('circle').attr('r', 5).attr('class', (d) => style(d));

	point.attr('cx', (d) => x(d) + 0.5).attr('cy',  (d) => y(d));
	
	point.exit().remove();

	var path = marker.selectAll('path.marker-x').data(markerX);
	path.enter()
	.append('path')
	.attr('d', function() {
		return 'M-2,-2L2, 2M2,-2L-2,2';
	}).attr('class', 'marker-x');

	path.attr('transform', function(d) {
		return 'translate('+ x(d) +','+ y(d) +')';
	})

	//path.attr('cx', (d) => x(d) + 0.5).attr('cy',  (d) => y(d));
	
	path.exit().remove();
}

/**
 * Export `d3SvgMarker`
 */
module.exports = d3SvgMarker;
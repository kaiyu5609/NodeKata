'use strict';

/**
 * SVG画布
 * @public	 
 * @method d3SvgPaint
 * @param {String} id
 * @param {Document} domEl
 * @param {Number} width
 * @param {Number} height
 * @returns {Document:SVG}
 */	
function d3SvgPaint(context, id, width, height) {
	var svg = context.selectAll('svg#svg-'+ id).data(['svg-'+id]);

	svg.enter().append('svg').attr('id', (d) => d).attr('version', '1.1');

	svg.attr('width', width).attr('height', height);

	svg.exit().remove();

	return svg;
}

/**
 * Export `d3SvgPaint`
 */
module.exports = d3SvgPaint;
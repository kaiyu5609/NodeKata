'use strict';

/**
 * 鼠标选区
 * @public	 
 * @method d3SvgHover
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgSelection(context, x, y, width, height) {	
	var rect = context.selectAll('rect.graph-selection').data(['graph-selection']);

	rect.enter().append('rect').attr('class', (d) => d);

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ x +','+ y +')';
	});

	rect.exit().remove();

	return rect;
}
/**
 * Export `d3SvgSelection`
 */
module.exports = d3SvgSelection;
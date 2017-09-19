'use strict';

/**
 * 鼠标Hover事件
 * @public	 
 * @method d3SvgHover
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgHover(context, id, x, y, width, height) {	
	var rect = context.selectAll('rect.graph-hover').data([{name: 'graph-hover', left: x, top: y}]);

	rect.enter().append('rect').attr('class', (d) => d.name).attr('id', id);

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ d.left +','+ d.top +')';
	});

	rect.exit().remove();

	return rect;
}
/**
 * Export `d3SvgHover`
 */
module.exports = d3SvgHover;
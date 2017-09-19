'use strict';

/**
 * 图形遮罩层
 * @public	 
 * @method d3SvgMask
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgMask(context, id, x, y, width, height) {
	var defs = context.selectAll('defs').data(['defs']);
	defs.enter().append('defs');
	defs.exit().remove();

	var mask = defs.selectAll('clipPath#'+ id).data([id]);
	mask.enter().append('clipPath').attr('id', id);
	mask.exit().remove();

	var rect = mask.selectAll('rect.'+ id).data([id]);
	rect.enter().append('rect').attr('class', id);

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ x +','+ y +')';
	});

	rect.exit().remove();
}

/**
 * Export `d3SvgMask`
 */
module.exports = d3SvgMask;
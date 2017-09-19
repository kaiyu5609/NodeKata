'use strict';

/**
 * 图形说明
 * @public	 
 * @method d3SvgDesc
 * @param {Document} context
 * @param {String} desc
 * @returns {void}
 */
function d3SvgDesc(context, desc) {
	var describe = context.selectAll('desc.svg-desc').data([desc]);

	describe.enter().append('desc').attr('class', 'svg-desc').text((d) => d);

	describe.exit().remove();
}

/**
 * Export `d3SvgDesc`
 */
module.exports = d3SvgDesc;
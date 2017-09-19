'use strict';

/**
 * 图形说明
 * @public	 
 * @method d3SvgMessage
 * @param {Document} context
 * @param {String} desc
 * @returns {void}
 */
function d3SvgMessage(context, desc) {
	var message = context.selectAll('text.svg-message').data([desc]);

	message.enter().append('text').attr('class', 'svg-message').attr('text-anchor', 'middle');

	message.attr('x', function(d) {
		return d.x;
	}).attr('y', function(d) {
		return d.y;
	}).text((d) => d.label);

	message.exit().remove();
}

/**
 * Export `d3SvgMessage`
 */
module.exports = d3SvgMessage;
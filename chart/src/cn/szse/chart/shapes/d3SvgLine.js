'use strict';
var colors = require('./../core/colors');
var themes = require('./../core/themes');
function d3SvgPath(x, y, defined, smooth) {
	var line = d3.svg.line();
	return line.x(x).y(y).defined(defined).interpolate(smooth ? 'monotone' : false);
}

/**
 * 折线
 * @public	 
 * @method d3SvgLine
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgLine(context, eid, uid, data, x, y, defined, smooth) {
	var line = d3SvgPath(x, y, defined, smooth);

	var wrap = context.selectAll('g.graph-line').data(['graph-line']);
	wrap.enter().append('g').style('clip-path', 'url(#'+ uid +')').attr('class', (d) => d);

	wrap.exit().remove();

	var items = wrap.selectAll('path.graph-line').data(data);

	items.enter().append('path')
	.attr('class', 'graph-line');
	//console.log(eid);
	items.attr('d', (d) => {
		return line(d);
	})
	.attr("stroke", (d, i) => {
		try{
			return themes.skin[eid][i];
		} catch(e) {
			return colors.Accent[i + 4][i];
		}
		
	})
	.attr('fill', () => 'none');

	themes.$watch('skin', function(skin) {
		items.attr("stroke", (d, i) => {
			try{
				return themes.skin[eid][i];
			} catch(e) {
				return colors.Accent[i + 4][i];
			}
		});
	});

	items.exit().remove();
}

/**
 * Export `d3SvgLine`
 */
module.exports = d3SvgLine;
'use strict';

function gridLineData(scaleX, scaleY) {
	var rangeX = scaleX.range();
	var ticksX = scaleX.ticks();

	var rangeY = scaleY.range();
	var ticksY = scaleY.ticks();

	var result = [];

	if(Math.floor(scaleX(ticksX[0])) !== Math.floor(rangeX[0])) {
		result.push({
			x: Math.floor(rangeX[0]) + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	}

	ticksX.forEach(function(d) {
		result.push({
			x: scaleX(d) + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	});

	if(Math.floor(scaleX(ticksX[ticksX.length - 1])) !== Math.floor(rangeX[1])) {
		result.push({
			x: rangeX[1] + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	}

	ticksY.forEach(function(d, i) {
		result.push({
			x: rangeX[0] - 1,
			y: scaleY(d) + 0.5,
			x1: 0,
			x2: rangeX[1] - rangeX[0] + 2,
			style: d === 0 ? 'graph-zero' : '' 
		});
	});

	return result;
}

/**
 * 图形网络线
 * @public	 
 * @method d3SvgGridLine
 * @param {Document} context
 * @param {Function} scaleX
 * @param {Function} scaleY 
 * @returns {void}
 */	
function d3SvgGridLine(context, scaleX, scaleY, ticksX) {
	var data = gridLineData(scaleX, scaleY);

	var grid = context.selectAll('g.grid-line').data(['grid-line']);

	grid.enter().append('g').attr('class', (d) => d);

	grid.exit().remove();

	var items = grid.selectAll('line').data(data);

	items.enter().append('line');

	items.attr('x1', (d) => d.x1)
	.attr('x2', (d) => d.x2)
	.attr('y1', (d) => d.y1)
	.attr('y2', (d) => d.y2)
	.attr('class', (d) => d.style)
	.attr('transform', (d) => 'translate('+ d.x +', '+ d.y +')');

	items.exit().remove();

	return grid;
}

/**
 * Export `d3SvgGridLine`
 */
module.exports = d3SvgGridLine;
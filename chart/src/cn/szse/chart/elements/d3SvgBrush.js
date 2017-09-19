'use strict';
function d3SvgBrush(context, left, top, x, h, extent) {
	var wrap = context.selectAll('g.brush').data(['brush']);

	wrap.enter().append('g').attr('class', (d) => d);

	wrap.attr('transform', function(d) {
		return 'translate('+ 0 +', '+ top +')';
	})

	wrap.exit().remove();

	var brush = d3.svg.brush()
	.x(x)
	//.extent(extent)
	.on("brushstart", function() {
		var extent = brush.extent();
		var start = Math.floor(extent[0]);
		var stop = Math.floor(extent[1]);
	})
	.on("brushend", function(d) {
		var extent = brush.extent();
		var start = Math.floor(extent[0]);
		var stop = Math.floor(extent[1]);

		if(stop !== start) {
			console.log(stop, start);
			//chart.fire('brush-end', category[start], category[stop]);
		}			
	})
	.on("brush", function() {
		var extent = brush.extent();
		var start = Math.floor(extent[0]);
		var stop = Math.floor(extent[1]);
	});

	wrap.call(brush).selectAll('rect').attr('height', h);
}

/**
 * Export `d3SvgBrush`
 */
module.exports = d3SvgBrush;
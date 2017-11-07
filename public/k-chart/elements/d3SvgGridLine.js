define(function(require, exports, module) {

    function d3SvgGridLine(context, data) {

        var grid = context.selectAll('g.grid').data(['grid']);

    	grid.enter().append('g').attr('class', (d) => d);

    	grid.exit().remove();

    	var items = grid.selectAll('line').data(data);

    	items.enter().append('line');

    	items.attr({
            x1: (d) => d.x1,
            x2: (d) => d.x2,
            y1: (d) => d.y1,
            y2: (d) => d.y2,
            class: (d) => d.style,
            transform: (d) => 'translate('+ d.x +', '+ d.y +')'
        });

    	items.exit().remove();

    	return grid;

    }

    module.exports = d3SvgGridLine;

});

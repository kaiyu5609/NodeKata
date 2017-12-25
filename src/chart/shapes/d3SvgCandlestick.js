define(function(require, exports, module) {

    function drawCandlestick(d, i, x, y, w) {
        var MathFloor = Math.floor;
        var open = y(d[1]);
        var high = y(d[2]);
        var low = y(d[3]);
        var close = y(d[4]);

        var left = x(d[0]);

        var width = w(d);
        var middle = width / 2;

        if (high !== low) {
            return [
                'M' + MathFloor(left + middle), high,
    			'L' + MathFloor(left + middle), close,
    			MathFloor(left), close,
    			MathFloor(left), open,
    			MathFloor(left + middle), open,
    			MathFloor(left + middle), low,
    			MathFloor(left + middle), open,
    			MathFloor(left + width), open,
    			MathFloor(left + width), close,
    			MathFloor(left + middle), close,
    			MathFloor(left + middle), high + 'Z'
            ].join(' ');
        }

        return [
            'M' + MathFloor(left + middle), high,
			'L' + left, high,
			left + width, high
        ].join(' ');
    }


    function d3SvgCandlestick(context, x, y, w, data) {
        // console.log(data);
        var plot = context.selectAll('g.plot').data(['plot']);

        plot.enter().append('g');

        plot.attr('class', function(d) { return d; });

        plot.exit().remove();

        var items = plot.selectAll('path.item').data(data);

        items.enter().append('path');

        items.attr({
            class: function(d) {
                return ['item', (d[1] < d[4] ? 'plus' : 'minus')].join(' ');
            },
            'data-series': function(d) {
                return d[5];
            },
            'data-category': function(d) {
                return d[0];
            },
            d: function(d, i) {
                return drawCandlestick(d, i, x, y, w);
            }
        });

        items.exit().remove();

    }

    module.exports = d3SvgCandlestick;

});

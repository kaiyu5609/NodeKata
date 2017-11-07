define(function(require, exports, module) {

    var TEXT_POINTS = [
    	{x: -8, y: 5, 'align': 'end'},
        {x: 0, y: 15, 'align': 'middle'},
        {x: 8, y: 5, 'align': 'start'},
        {x: 0, y: -5, 'align': 'middle'},
    ];

    function TipsPathData(size) {
    	if(!size) {
    		return [];
    	}
    	return [
    		'M0,0L-3,-3L-3,-10L-'+(size + 3)+',-10L-'+(size + 3)+',10L-3,10L-3,3Z',
            'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',21L-'+ (size / 2) +',21Z',
            'M0,0L 3,3L3,10L'+ (size + 3) +',10L'+ (size + 3) +',-10L3,-10L3,-3Z',
            'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',-21L-'+ (size / 2) +',-21Z',
    	];
    }

    function d3SvgAxisTips(context, data) {

        var tips = context.selectAll('g.axis-tips').data(['axis axis-tips']);

        tips.enter().append('g').attr('class', function(d) { return d; });

        tips.exit().remove();

        var items = tips.selectAll('path').data(data);

        items.enter().append('path');

        items.attr({
            d: function (d, i) {
                return TipsPathData(d.size)[i];
            },
            transform: function (d, i) {
                return 'translate(' + [d.x, d.y] + ')';
            }
        });

        items.exit().remove();

        var texts = tips.selectAll('text').data(data);

        texts.enter().append('text');

        texts.attr({
            x: function(d, i) {
                return TEXT_POINTS[i].x;
            },
            y: function(d, i) {
                return TEXT_POINTS[i].y;
            },
            transform: function(d) {
                return 'translate(' + [d.x, d.y]  + ')';
            }
        }).style('text-anchor', function(d, i) {
            return TEXT_POINTS[i].align;
        }).text(function(d) {
            return d.value;
        });

        texts.exit().remove();

    }

    module.exports = d3SvgAxisTips;

});

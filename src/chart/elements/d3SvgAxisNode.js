define(function(require, exports, module) {

    function d3SvgAxisNode(context, data) {

        var axis = context.selectAll('g.axis').data(data);

    	axis.enter().append('g');

        axis.attr('class', (d) => {
            return ['axis axis', d.orient].join('-');
        });

    	axis.exit().remove();

    	var ticks = axis.selectAll('text').data((d) => {
            return d.ticks;
        });

    	ticks.enter().append('text');

        ticks.attr({
            x: function(d) {
                return d.x;
            },
            y: function(d) {
                return d.y;
            },
            transform: function(d, i) {
                return 'translate(' + d.translate + ') rotate(' + d.rotate + ')';
            }
        }).style('text-anchor', function(d) {
            return d.anchor;
        }).text(function(d) {
            return d.tick;
        })

    	ticks.exit().remove();

    }

    module.exports = d3SvgAxisNode;

});

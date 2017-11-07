define(function(require, exports, module) {

    function d3SvgAxisSubline(context, data) {
        
        var subline = context.selectAll('g.axis-subline').data(['axis-subline']);

        subline.enter().append('g');

        subline.attr('class', function(d) { return d; });

        subline.exit().remove();

        var lines = subline.selectAll('line').data(data);

        lines.enter().append('line');

        lines.attr({
            class: function(d) {
                return d.klass;
            },
            x1: function (d) {
                return d.x1;
            },
            x2: function (d) {
                return d.x2;
            },
            y1: function (d) {
                return d.y1;
            },
            y2: function (d) {
                return d.y2;
            },
            transform: function (d) {
                return 'translate(' + [d.x, d.y] + ')';
            }
        });

        lines.exit().remove();

    }

    module.exports = d3SvgAxisSubline;
});

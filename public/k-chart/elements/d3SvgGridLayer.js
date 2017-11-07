define(function(require, exports, module) {

    function d3SvgGridLayer(context, data) {

        var layer = context.selectAll('g.grid-layer').data(['grid-layer']);

        layer.enter().append('g');

        layer.attr({
            class: function(d) { return d; }
        });

        layer.exit().remove();

        var rect = layer.selectAll('rect').data(data);

        rect.enter().append('rect');

        rect.attr({
            width: function(d) {
                return d.width;
            },
            height: function(d) {
                return d.height;
            },
            transform: function(d) {
                return 'translate(' + [d.left, d.top] + ')';
            }
        });

        rect.exit().remove();

        return rect;

    }

    module.exports = d3SvgGridLayer;

});

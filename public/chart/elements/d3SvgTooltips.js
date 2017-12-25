define(function(require, exports, module) {

    function d3SvgTooltips(context, data) {
        var tooltips = context.selectAll('div.k-chart-tooltips').data(data);

        tooltips.enter().append('div');

        tooltips.attr({
            class: function(d) {
                return 'k-chart-tooltips';
            }
        }).style({
            left: function(d) {
                return d.left;
            },
            right: function(d) {
                return d.right;
            },
            top: function(d) {
                return d.top;
            }
        });

        tooltips.exit().remove();

        var rows = tooltips.selectAll('p.row').data(function(d) {
            return d.data;
        });

        rows.enter().append('p');

        rows.attr({
            class: function(d) {
                return 'row';
            }
        }).html(function(d) {
            return d.join(': ');
        });

        rows.exit().remove();

    }

    module.exports = d3SvgTooltips;

});

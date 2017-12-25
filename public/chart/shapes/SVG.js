define(function(require, exports, module) {

    function SVG(container, options) {
        var svg = container.selectAll('svg.k-chart')
        .data(['svg.k-chart']);

        svg.enter()
        .append('svg')
        .style('display', 'block')
        .attr('class', 'k-chart');

        svg.attr({
            'width': options.width,
            'height': options.height
        });

        svg.exit().remove();

        return svg;
    }

    module.exports = SVG;

});

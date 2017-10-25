define(function(require, exports, module) {

    function SVG(container, options) {
        var svg = container.selectAll('svg.k-chart')
        .data(['svg.k-chart']);

        svg.enter()
        .append('svg')
        .attr('class', 'k-chart')
        .style('display', 'block');

        svg.attr('width', options.width)
        .attr('height', options.height);

        svg.exit().remove();

        return svg;
    }

    module.exports = SVG;

});

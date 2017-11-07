define(function(require, exports, module) {

    var SVG = require('k-chart/shapes/SVG');
    var container;

    function d3SvgPaint(options) {

        container = container || d3.select(options.domEl);

        container.attr('class', 'k-chart-container')
        .style({
            'position': 'relative',
            'overflow': 'hidden'
        });

    	return SVG(container, options);
    }

    module.exports = d3SvgPaint;

});

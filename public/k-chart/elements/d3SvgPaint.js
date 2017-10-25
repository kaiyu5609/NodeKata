define(function(require, exports, module) {

    var SVG = require('k-chart/shapes/SVG');

    function d3SvgPaint(options) {

    	var container = d3.select(options.domEl)
            .attr('class', 'k-chart-container')
            .style({
                'position': 'relative',
                'overflow': 'hidden'
            });

    	var context = SVG(container, options);

    	return context;
    }

    module.exports = d3SvgPaint;

});

define(function(require, exports, module) {
    var d3 = require('d3');
    var SVG = require('k-chart/shapes/SVG');
    var Utils = require('k-chart/Utils');



    class Chart {
        constructor(options) {
            this.options = options;
            this.container = d3.select(options.domEl);

            this.container
            .attr('class', 'k-chart-container')
            .style('position', 'relative')
            .style('overflow', 'hidden')
            .call(SVG, this.options);
        }

        render() {
            console.log('render');
        }
    }

    module.exports = Chart;
});

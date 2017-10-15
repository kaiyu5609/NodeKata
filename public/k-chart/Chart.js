define(function(require, exports, module) {
    var d3 = require('d3');
    var EventEmitter = require('k-chart/core/event-emitter/EventEmitter');
    var Utils = require('k-chart/Utils');
    var SVG = require('k-chart/shapes/SVG');




    class Chart extends EventEmitter {
        constructor(options) {
            super(options);
            this.options = options;
            this.container = d3.select(options.domEl);

            this.container
            .attr('class', 'k-chart-container')
            .style('position', 'relative')
            .style('overflow', 'hidden')
            .call(SVG, this.options);

            // console.log("options:", options);


        }

        render() {
            // console.log('chart-render');
        }
    }

    module.exports = Chart;
});

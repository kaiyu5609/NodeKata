define(function(require, exports, module) {
    var Component = require('../Component');
    var SimpleGridStore = require('./core/SimpleGridStore');
    var SimpleGridView = require('./core/SimpleGridView');

    class SimpleGrid extends Component {
        constructor(options) {
            super(options);
            console.log('grid-options', options);
        }

        _bindEvent() {

        }

        _bindEroMsg() {

        }

        render(initParams) {

        }

        destroy() {

        }
    }

    module.exports = SimpleGrid;

});

define(function(require, exports, module) {
    var { _ } = require('../../core/shim/shim');
    var Component = require('../Component');
    var SimpleGridStore = require('./core/SimpleGridStore');
    var SimpleGridView = require('./core/SimpleGridView');

    class SimpleGrid extends Component {
        constructor(options) {
            super(options);
            console.log('grid-options', options);
            options.columnModel = _.cloneDeep(options.columnModel);
            var store, view, dsType = options.dataSet.type;

            store = this.store = new SimpleGridStore(options);
            _.extend(options, {
                action: {},
                store: store
            });

            view = this.view = new SimpleGridView(options);
            _.extend(options, {
                view: view
            });

            this.destroyed = false;
            this._bindEvent();
            this._bindEroMsg();
        }

        _bindEvent() {
            var store = this.store;
            var view = this.view;

            store.on('data-preload', function(params) {
                store._status = 'loading';
                // view.showMask();
            });

            store.on('data-load', function(result) {
                store._status = 'idle';
                // view.hideMask();
            });
        }

        _bindEroMsg() {
            var self = this;

            function errorEvent(errMsg) {
                self.view.showMask(errMsg.message || '系统错误', 3000);
                self.fire('error', errMsg);
            }

            this.store.on('error', errorEvent);
            this.view.on('error', errorEvent);
        }

        render(initParams) {
            this.store.load(initParams);
        }

        destroy() {
            this.destroyed = true;
            // this.store.destroy();
            this.store = null;
            // this.view.destroy();
            this.view = null;
        }
    }

    module.exports = SimpleGrid;

});

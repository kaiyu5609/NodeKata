define(function(require, exports, module) {
    var { _ } = require('../../../core/shim/shim');
    var EventEmitter = require('../../../core/event-emitter/EventEmitter');

    class SimpleGridStore extends EventEmitter {

        constructor(options) {
            super(options);
            var self = this;
            var lazyload = false;

            this._status = 'loading';
            this._dataSet = options.dataSet;
            this.currentPage = 1;
            this.total = null;
            this._halfaked = [];

            if (!options.page) {
                this.pageSize = -1;
            } else {
                this.pageType = options.page.type || 'button';
                this.pageSize = options.page.pageSize || 100;
            }

            this.filterInfo = options.filter || [];
            this.sortInfo = options.sort || [];

            this.on('data-loaded', function(result) {
                var data = _addRowNumber(result.data, self.getParams(), true);
                self._halfaked = data;
            });

            options.dataSet.on('data-loaded', function() {
                self.fire('data-changed');
                self.currentPage = 1;
                self.load();
            });

            options.dataSet.on('error', function(errMsg) {
                self.fire('error', errMsg);
            });
        }

        _setUseParams(useParams) {
            this._useParams = useParams;
        }

        _getUseParams() {
            return this._useParams || {};
        }

        getParams() {
            return {
                start: this.pageSize * (this.currentPage - 1) || 0,
                limit: this.pageSize || 100,
                sort: this.getSortState(),
                filter: []
            };
        }

        load(useParams, callback, trigger) {
            var self = this;
            var ds = this._dataSet;
            var params;
            var sorts;

            if (useParams) {
                this._setUseParams(useParams);
                this.currentPage = 1;
                this.fire('data-changed', null);
            }

            params = _.extend(this._dataSet.params || {}, this._getUseParams(), this.getParams());

            this.fire('data-preload', params);

            if (params.bizParameter) {
                ds = ds.find(params.bizParameter);
            }

            sorts = params.sort.map(function(filter) {
                var direction = filter.direction.toUpperCase();
                return direction === 'DESC' ? '-' + filter.property : filter.property;
            });

            ds = ds/*.filter(params.filter)*/.orderBy(sorts);

            console.log('store.load:', params);

            if (params.limit !== -1) {
                ds = ds.limit(params.start, params.limit);
            }

            if (trigger) {
                ds.operate(trigger);
            }

            ds.value().then(function(result) {
                self.fire('data-loaded', result, trigger);

                if (_.isFunction(callback)) {
                    callback(result);
                }
            }, function(err) {
                self.fire('error', err);
            });

        }

        _getHalfaked() {
            return this._halfaked;
        }

        getSortState() {
            return this.sortInfo;
        }

        sort(sorts) {
            if (_.isArray(sorts)) {
                this.sortInfo = sorts;
                this.fire('sort', sorts);
                this.load(null, null, 'sort');// TODO
            }
        }
    }

    function _addRowNumber(data, params, lazyload) {
        var start = params.start + 1;
        if (!lazyload) {
            start = 1;
        }
        data.forEach(function(d, i) {
            d.rownumber = start + i;
        });
        return data;
    }

    module.exports = SimpleGridStore;
});

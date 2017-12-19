define(function(require, exports, module) {

    var RowDataSet = require('dataset/RowDataSet');

    class ArrayRowDataSet extends RowDataSet {

        constructor(options) {
            super(options || {});

            this.type = 'array';
            this.columnModel = options.columnModel;
            this._actions = [];
            if (options.data && options.data.length) {
                this.total = options.data.length;
            }

            this._datas = this._extendPropsToDatas(options.data);

            this._sourceDatas = options.data;
        }

        setData(datas, flag) {

        }

        _extendPropsToDatas(datas) {

        }

        value() {

        }

        _value() {

        }

        done() {

        }

        _done() {

        }

        addColumns() {

        }

        _addColumns(columns) {

        }

        changeDecimalToNumber(items) {

        }

        doCalculateColumn(columnModels, datas, formula) {

        }

        limit(start, limit) {

        }

        _limit(start, limit) {

        }

        orderBy(iteratees) {

        }

        _orderBy(iteratees) {

        }

        _compareAscending(value, other) {

        }

        _pageSort(from, limit, iteratees, fnCompare) {

        }

        _getColumnByDataIndex(dataIndex) {

        }

        groupBy(columnName, aggregeteFn) {

        }

        _groupBy(columnName, aggregeteFn) {

        }

        filter() {

        }

        query() {

        }

        max(columnName) {

        }

        _max(columnName) {

        }

        min(columnName) {

        }

        _min(columnName) {

        }

        extent(columnName) {

        }

        _extent(columnName) {

        }

        sum(columnName) {

        }

        _sum(columnName) {

        }

        avg(columnName) {

        }

        _avg(columnName) {

        }

        count() {

        }

        _count() {

        }

    }


    class ActionWrapper {

        constructor(ds, actions, operation) {
            this.ds = ds;
            this._actions = actions || [];

            if (operation === 'statistic') {
                return this.value(operation);
            }
        }

        _setActions(actions) {
            var i, index = -2, len = actions.length, arr = [];

            for (i = 0; i < len; i++) {
                if (actions[i].func.name === '_orderBy') {
                    var args = Array.prototype.slice.call(actions[i].args);
                    console.log(args);
                }
                if (actions[i].func.name === '_limit') {

                }
            }

            if (arr.length !== 0) {

            }

            return actions;
        }

        value(operation) {
            var actions = this._actions, self = this, args, result;
            actions = this._setActions(actions);

            console.log('actions:', actions);

            return new Promise(function(resolve, reject) {
                actions.forEach(function(action, index) {
                    try {
                        if (!((args = action.args) instanceof Array)) {
                            args = Array.prototype.slice.call(args);
                        }
                        result = self.ds._chainResult = action.func.apply(self.ds, args);
                    } catch (e) {
                        self.ds._chainResult = null;
                        console.log(action.func.name + ' 函数出错');
                        reject(action.func.name + '函数出错');
                        return;
                    }
                });
                self.ds._chainResult = null;
                resolve(operation === 'statistic' ? result : {
                    data: result
                });
            })

        }

        done() {
            var actions = this._actions, self = this, args, result;
            actions = this._setActions(actions);

            console.log('actions:', actions);

            actions.forEach(function(action, index) {
                if (!((args = action.args) instanceof Array)) {
                    args = Array.prototype.slice.call(args);
                }
                result = self.ds._chainResult = action.func.apply(self.ds, args);
            });
            self.ds._chainResult = null;
            return result;
        }


    }


    ActionWrapper.prototype.count = ArrayRowDataSet.prototype.count;
    ActionWrapper.prototype.limit = ArrayRowDataSet.prototype.limit;
    ActionWrapper.prototype.orderBy = ArrayRowDataSet.prototype.orderBy;


    module.exports = ArrayRowDataSet;


});

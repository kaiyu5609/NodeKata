define(function(require, exports, module) {

    var RowDataSet = require('dataset/RowDataSet');

    class ArrayRowDataSet extends RowDataSet {

        constructor(config) {
            super(config || {});

            this.type = 'array';
            this.columnModels = config.columnModel;
            this._actions = [];
            if (config.data && config.data.length) {
                this.total = config.data.length;
            }

            this._datas = this._extendPropsToDatas(config.data);

            this._sourceDatas = config.data;
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
            
        }

        done() {

        }


    }


    ActionWrapper.prototype.count = ArrayRowDataSet.prototype.count;
    ActionWrapper.prototype.limit = ArrayRowDataSet.prototype.limit;
    ActionWrapper.prototype.orderBy = ArrayRowDataSet.prototype.orderBy;


    module.exports = ArrayRowDataSet;


});

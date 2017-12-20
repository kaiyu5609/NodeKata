define(function(require, exports, module) {
    var _ = require('lodash');
    var RowDataSet = require('dataset/RowDataSet');
    var Sort = require('dataset/core/Sort');

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
            if (flag) {
                datas = this._datas.concat(datas);
                this._datas = this._extendPropsToDatas(datas);
                this.fire('data-changed', this._datas);
            } else {
                this._datas = this._extendPropsToDatas(datas);
                this.fire('data-changed', this._datas);
            }
        }

        _extendPropsToDatas(datas) {
            var columns = this.columnModel, arr = [], result;

            columns.forEach(function(column) {
                if (column.vtype === 'cn_string') {
                    arr.push(column.dataIndex);
                }
            });

            result = datas.map(function(data, index) {
                data._id = index;
                arr.forEach(function(dataIndex) {
                    // data['cn_' + dataIndex] = Pinyin.translate(data[dataIndex] || '');
                    data['cn_' + dataIndex] = data[dataIndex] || '';
                });
                return data;
            });

            return result;
        }

        value() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._value
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions).value();
        }

        _value() {
            return this._datas;
        }

        done() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._done
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions).done();
        }

        _done() {
            return this._datas;
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
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._limit
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions);
        }

        _limit(start, limit) {
            if (+start < 0 || +limit < 0) {
                return [];
            }
            var datas = this._chainResult || this._datas, stop;
            if (limit === undefined) {
                return datas.slice(start);
            }
            stop = Math.min(start + limit, datas.length);
            return datas.slice(start, stop);
        }

        orderBy(iteratees) {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._orderBy
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions);
        }

        _orderBy(iteratees) {
            var datas = this._chainResult || this._datas, self = this;
            var layers, key, dire, result;

            try {
                datas = datas.slice();
                if (!(iteratees instanceof Array) || iteratees.length === 0) {
                    return datas;
                }

                iteratees = iteratees.map(function(iteratee) {
                    if (iteratee.charAt(0) === '-') {
                        return {
                            field: iteratee.substring(1),
                            dire: -1
                        };
                    } else if (iteratee.charAt(0) === '+') {
                        return {
                            field: iteratee.substring(1),
                            dire: 1
                        };
                    }
                    return {
                        field: iteratee,
                        dire: 1
                    }
                });

                iteratees.push({
                    field: '_id',
                    dire: 1
                });

                layers = iteratees.length;

                result = Sort.quickSort(datas, layers, function(item, mid, layer) {
                    key = iteratees[layer].field;
                    dire = iteratees[layer].dire;
                    return self._compareAscending(item[key], mid[key]) * dire;
                });

                return result;
            } catch (e) {
                console.log(e);
            }
        }

        _compareAscending(value, other) {
            if (value !== other) {
                var valIsNull = value === null,
                    valIsUndef = value === undefined,
                    valIsReflexive = value === value;

                var othIsNull = other === null,
                    othIsUndef = other === undefined,
                    othIsReflexive = other === other;

                if (
                    (value > other && !othIsNull) ||
                    !valIsReflexive ||
                    (valIsNull && !othIsUndef && othIsReflexive) ||
                    (valIsUndef && othIsReflexive)
                ) {
                    return 1;
                }

                if (
                    (value < other && !valIsNull) ||
                    !othIsReflexive ||
                    (othIsUndef && valIsReflexive)
                ) {
                    return -1;
                }
            }
            return 0;
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
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._max
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _max(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.maxBy(datas, columnName)[columnName]
            };
        }

        min(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._min
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _min(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.minBy(datas, columnName)[columnName]
            };
        }

        extent(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._extent
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _extent(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: [_.minBy(datas, columnName)[columnName], _.maxBy(datas, columnName)[columnName]]
            };
        }

        sum(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._sum
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _sum(columnName) {
            var datas = this._chainResult || this._datas;
            return {
                column: columnName,
                value: _.sumBy(datas, columnName)
            };
        }

        avg(columnName) {
            if (!columnName) throw 'invalid params';
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: [columnName],
                func: this.ds._avg
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _avg(columnName) {
            var datas = this._chainResult || this._datas;
            if (datas.length > 0) {
                return {
                    column: columnName,
                    value: _.sumBy(datas, columnName) / data.length
                };
            }
        }

        count() {
            if (this instanceof ArrayRowDataSet) {
                this.ds = this;
            }
            var action = [{
                args: arguments,
                func: this.ds._count
            }];
            var actions = this._actions.concat(action);
            return new ActionWrapper(this.ds, actions, 'statistic');
        }

        _count() {
            var datas = this._chainResult || this._datas;
            var length = datas.length;
            return {
                value: length
            };
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
                    // console.log(args);
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

            // console.log('actions:', actions);

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

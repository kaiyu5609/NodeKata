define(function(require, exports, module) {

    var DataSet = require('dataset/DataSet');

    class RowDataSet extends DataSet {

        constructor(config) {
            super(config);
        }

    }

    module.exports = RowDataSet;

});

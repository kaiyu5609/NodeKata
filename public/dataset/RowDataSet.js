define(function(require, exports, module) {

    var DataSet = require('dataset/DataSet');

    class RowDataSet extends DataSet {

        constructor(config) {
            super(config);
        }

        find(bizParameter) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        sort(sorts) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        filter(filters) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        count() {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        sum(fieldName) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        max(fieldName) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        min(fieldName) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        operate() {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        orderBy() {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        catch() {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

        saveAs(parameters, format) {
            // <debug>
            console.warn("The Method <> subclass that you are using definde a function to extend.");
            // </debug>
        }

    }

    module.exports = RowDataSet;

});

define(function(require, exports, module) {

    var context = typeof window !== 'undefined' ? window : global;

    exports.$ = context.jQuery;
    exports.d3 = context.d3;
    exports._ = context._;
});

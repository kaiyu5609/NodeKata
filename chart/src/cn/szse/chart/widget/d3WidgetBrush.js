'use strict';
var element = require('./../elements/d3SvgBrush');

function d3WidgetBrush($scope) {
	var $Layout = $scope.$Layout;
	var TOP_VALUE = $Layout.TOP_VALUE;
	var height = $scope.height - $Layout.TOP_VALUE - $Layout.BOTTOM_VALUE;
	return function(context, x, extent) {
		context.call(element, 0, TOP_VALUE, x, height, extent);
	}
}
/**
 * Export `d3WidgetBrush`
 */
module.exports = d3WidgetBrush;

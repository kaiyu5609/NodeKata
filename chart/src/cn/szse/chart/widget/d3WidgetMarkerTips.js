'use strict';

var element = require('./../elements/d3SvgMarkerTips');

//d3WidgetMarkerTips
function d3WidgetMarkerTips($scope) {

	return function (context) {
		context.call(element, [{left: -9999, top: -9999}]);

		//监听数据变化时,更新 RECT_STORAGE;
		$scope.$watch('MARKER_ACTIVE', function(data) {
			context.call(element, data);
		});

		$scope.$watch('resizable', function() {
			context.call(element, [{left: -9999, top: -9999}]);
		});
	};
}

/**
 * Export `d3WidgetMarkerTips`
 */
module.exports = d3WidgetMarkerTips;
'use strict';

var element = require('./../elements/d3SvgPointerEvents');
/**
 * d3WidgetPointerEvents
 * @public	 
 * @method d3WidgetPointerEvents
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetPointerEvents($scope) {
	var data = [{
		style: "cursor-line-vertical",
		y1: $scope.$Layout.TOP_VALUE,
		y2: $scope.height - $scope.$Layout.BOTTOM_VALUE,
		x: -9999,
		y: -9999
	}, {
		style:"cursor-line-horizontal",
		x1: $scope.$Layout.LEFT_VALUE,
		x2: $scope.width - $scope.$Layout.RIGHT_VALUE,
		x: -9999,
		y: -9999
	}];

	return function(context) {
		context.call(element, data);
		
		//窗口大小变化时，重置PointEvents坐标;
		$scope.$watch('resizable', function() {
			data[0].y1 = $scope.$Layout.TOP_VALUE;
			data[0].y2 = $scope.height - $scope.$Layout.BOTTOM_VALUE;
			data[0].x = -9999;
			data[0].y = -9999;

			data[1].x1 = $scope.$Layout.LEFT_VALUE,
			data[1].x2 = $scope.width - $scope.$Layout.RIGHT_VALUE;
			data[1].x = -9999;
			data[1].y = -9999;
			context.call(element, data);
		});

		//数据加载完成时,重置PointEvents坐标;
		$scope.$watch('$DATA_LOAD', function() {
			data[0].y1 = $scope.$Layout.TOP_VALUE;
			data[0].y2 = $scope.height - $scope.$Layout.BOTTOM_VALUE;
			data[0].x = -9999;
			data[0].y = -9999;

			data[1].x1 = $scope.$Layout.LEFT_VALUE,
			data[1].x2 = $scope.width - $scope.$Layout.RIGHT_VALUE;
			data[1].x = -9999;
			data[1].y = -9999;
			context.call(element, data);
		});

		//鼠标移动时,设置PointEvents坐标;
		$scope.$watch('$EVENT_HOVER', function(mouse) {
			data[0].x = mouse[0];
			data[0].y = 0;		
			data[1].x = 0;
			data[1].y = mouse[1];
			context.call(element, data);
		});
	};
}

/**
 * Export `d3WidgetPointerEvents`
 */
module.exports = d3WidgetPointerEvents;
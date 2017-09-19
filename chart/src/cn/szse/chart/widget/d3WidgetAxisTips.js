'use strict';

var utils = require('./../core/utils');
var element = require('./../elements/d3SvgAxisTips');
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
			x: -9999,
			y: $scope.$Layout.TOP_VALUE,
			size: 0,
			value: 0
		},{
			x: $scope.width - $scope.$Layout.RIGHT_VALUE,
			y: -9999,
			size: 0,
			value: 0
		},{
			x: -9999,
			y: $scope.height - $scope.$Layout.BOTTOM_VALUE,
			size:  0,
			value: '9:30'
		},{
			x: $scope.$Layout.LEFT_VALUE,
			y: -9999,
			size: 0,
			value: 0
		}
	];

	//console.log($scope.height,$scope.$Layout.BOTTOM_VALUE)

	return function(context) {
		var TIPS_PIXEL = [
			{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
			{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
			{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
			{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
		];

		context.call(element, data);

		//窗体变化时,设置AxisTips;
		$scope.$watch('resizable', function() {

			[$scope.$Layout.TOP_VALUE,
			$scope.width - $scope.$Layout.RIGHT_VALUE,
			$scope.height - $scope.$Layout.BOTTOM_VALUE + 1,
			$scope.$Layout.LEFT_VALUE].forEach(function(v, i) {
				data[i][i % 2 ? 'x' : 'y'] = v;
				data[i][i % 2 ? 'y' : 'x'] = -9999;
			});

			TIPS_PIXEL = [
				{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
				{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
				{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
				{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
			];

			context.call(element, data);
		});

		//数据变化时,设置AxisTips;
		$scope.$watch('$EVENT_TIPS', function(tips) {
			var result = tips.data || [];

			result.forEach(function(v, i) {
				var mod = i % 2 ? 'y' : 'x';
				data[i][mod] = tips[mod];
				data[i].value = v;
				data[i].size = v ? utils.measure(v).width + 10 : 0;
			});
			context.call(element, data);
		});

		//鼠标移动时,设置AxisTips;
		$scope.$watch('$AXIS_TIPS', function(extents) {
			var mouse = $scope.$EVENT_HOVER;

			var data = extents.map(function(extent, index) {
				if(!extent) {
					return null;
				}
				if(index === 2) {
					return $scope.$Config[index].data.label(extent);
				}
				var num = (Math.abs((TIPS_PIXEL[index].value - (mouse[TIPS_PIXEL[index].index] - TIPS_PIXEL[index].fixed) / TIPS_PIXEL[index].size)) * (extent[1] - extent[0]));
				return $scope.$Config[index].data.label(Math.floor((num + extent[0]) * 10) / 10);
			});

			$scope.$EVENT_TIPS = {
				x: mouse[0],
				y: mouse[1],
				data: data
			};			
		});
	};
}

/**
 * Export `d3WidgetPointerEvents`
 */
module.exports = d3WidgetPointerEvents;
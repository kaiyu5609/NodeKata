'use strict';

var utils   = require('./../core/utils');
var element = require('./../elements/d3SvgMessage');

/**
 * d3WidgetMessage
 * @public	 
 * @method d3WidgetMessage
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetMessage($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	$scope.$LOAD_MESSAGE = {
		x: width / 2 + x,
		y: height / 2 + y,
		label: '暂无数据！'
	};

	return function(context) {
		context.call(element, $scope.$LOAD_MESSAGE);

		//数据加载完成时,清空Massage;
		$scope.$watch('$DATA_LOAD', function() {
			$scope.$LOAD_MESSAGE.label = '';

			context.call(element, $scope.$LOAD_MESSAGE);
		});

		//窗口大小变化时，提示信息自适应;
		$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;
			$scope.$LOAD_MESSAGE.x = width / 2 + x;
			$scope.$LOAD_MESSAGE.y = height / 2 + y;

			context.call(element, $scope.$LOAD_MESSAGE);
		});
	};
}

/**
 * Export `d3WidgetMessage`
 */
module.exports = d3WidgetMessage;
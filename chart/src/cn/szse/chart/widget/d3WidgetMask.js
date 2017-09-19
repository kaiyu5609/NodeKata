'use strict';

var utils   = require('./../core/utils');
var element = require('./../elements/d3SvgMask');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetMask($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	return function(context) {
		context.call(element, $scope.uid, x, y, width  * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);

		//数据加载完成时,蒙板大小100%;
		$scope.$watch('$DATA_LOAD', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.uid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		//窗口大小变化时，蒙板大小自适应;
		$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.uid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});	

		//动画: 蒙板尺寸缩放;
		$scope.$watch('progress', function(progress) {
			context.call(element, $scope.uid, x, y, width  * (utils.isNumber(progress) ? progress : 1), height);
		});
	};
}

/**
 * Export `d3WidgetMask`
 */
module.exports = d3WidgetMask;
'use strict';
var utils   = require('./../core/utils');
var handler = require('./../core/handler');
var element = require('./../elements/d3SvgHover');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetHover($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	return function(context) {
		var guid;
		context.call(element, $scope.guid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height)
		.select('rect.graph-hover')
		/*.on('mousedown', function() {
			var mouse = d3.mouse(this);
			$scope.$EventIsSelection = true;
			$scope.$EventSelectionStart = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
		})*/
		.on('mousemove', function() {
			var mouse = d3.mouse(this);
			$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
			this.__mouse__ = $scope.mouse;
		}).on('mousedown', function() {
			var mouse = d3.mouse(this);
			$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
		}).on('mouseout', function() {
			$scope.mouse = [-9999, -9999];
		}).on('touchmove', function() {
			var mouse = d3.mouse(this);
			if(mouse[0] >= 0 && mouse[0] <= width *$scope.progress && mouse[1] >= 0 && mouse[1] <= height) {
				$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
				this.__mouse__ = $scope.mouse;
			}
		}).on('touchend', function() {
			if(guid) {
				clearTimeout(guid);
				guid = null;
			}
			guid = setTimeout(function() {
				$scope.mouse = [-9999, -9999];
			}, 3000);
		});

		//监听数据变化时,设置hover区间;
		$scope.$watch('$DATA_LOAD', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.guid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		//监听窗口变化时, 设置hover区间;	
		$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.guid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		//动画：Progress变化时, 设置hover区间;	
		$scope.$watch('progress', function(progress) {
			context.call(element, $scope.guid, x, y, width  * (utils.isNumber(progress) ? progress : 1), height);
		});

		

		/*d3.select(window).on('mouseup', function() {
			var mouse = d3.mouse(this);
			$scope.$EventIsSelection = false;
			//console.log(111)
		});*/
	};
}

/**
 * Export `d3WidgetHover`
 */
module.exports = d3WidgetHover;
'use strict';

var draggable = require('./../core/draggable');
var element = require('./../elements/d3SvgSelection');

/**
 * d3WidgetSelection
 * @public	 
 * @method d3WidgetSelection
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetSelection($scope) {
	var offsetLeft = 0;
	var offsetTop  = 0;

	var startX = 0;
	var startY = 0;

	var stopX = 0;
	var stopY = 0;

	draggable.$watch('start'+$scope.guid, function(domain) {
		$scope.$EVENT_START = domain;
	});

	draggable.$watch('drag'+$scope.guid, function(domain) {
		$scope.$EVENT_DRAG = domain;
	});

	draggable.$watch('stop'+$scope.guid, function(domain) {
		if(draggable.$EventIsSelection) {
			$scope.$EVENT_STOP = domain;
		}
	});

	return function(context) {
		context.call(element, 0, 0, 0, $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE);
		$scope.mouse = [-9999, -9999];

		//区间变化;
		$scope.$watch('$EVENT_SELECTION', function(events) {
			var TOP_VALUE = $scope.$Layout.TOP_VALUE;
			var BOTTOM_VALUE = $scope.$Layout.BOTTOM_VALUE;

			context.call(element, events[0], TOP_VALUE, events[1], $scope.height - TOP_VALUE - BOTTOM_VALUE)
		});

		//监听窗口变化时, 更新元素坐标;
		$scope.$watch('resizable', function(events) {
			var TOP_VALUE = $scope.$Layout.TOP_VALUE;
			var BOTTOM_VALUE = $scope.$Layout.BOTTOM_VALUE;
			context.call(element, events[0], TOP_VALUE, 0, $scope.height - TOP_VALUE - BOTTOM_VALUE)
		});

		//播放过程中, 区间 Width：0px;
		$scope.$watch('progress', function(progress) {
			var TOP_VALUE = $scope.$Layout.TOP_VALUE;
			var BOTTOM_VALUE = $scope.$Layout.BOTTOM_VALUE;

			context.call(element, 0, 0, 0, $scope.height - TOP_VALUE - BOTTOM_VALUE)
		});

		//鼠标拖拽开始;
		$scope.$watch('$EVENT_START', function(domain) {
			startX = $scope.mouse[0];
			startY = $scope.mouse[1];

			offsetLeft = domain[0] - startX;
			offsetTop  = domain[1] - startY;
		});

		//鼠标拖拽中;
		$scope.$watch('$EVENT_DRAG', function(domain) {
			var LEFT_VALUE = $scope.$Layout.LEFT_VALUE;
			var RIGHT_VALUE = $scope.$Layout.RIGHT_VALUE;

			var number = Math.min(Math.max(domain[0] - offsetLeft, LEFT_VALUE), $scope.width - RIGHT_VALUE);
			var size = Math.floor(($scope.width - LEFT_VALUE - RIGHT_VALUE) * $scope.progress) + LEFT_VALUE;

			if(startX > 0) {
				$scope.$EVENT_SELECTION = [Math.min(startX, number), Math.abs(startX - Math.min(number, size))];
			}
			
		});

		//鼠标拖拽停止;
		$scope.$watch('$EVENT_STOP', function(domain) {
			var LEFT_VALUE = $scope.$Layout.LEFT_VALUE;
			var RIGHT_VALUE = $scope.$Layout.RIGHT_VALUE;
			var size = $scope.width - RIGHT_VALUE - LEFT_VALUE;
			var extent = $scope.$Extents[2];

			if(domain[0] === startX) {
				$scope.$EVENT_SELECTION = [startX, 0];
			} else if($scope.$EVENT_SELECTION) {
				var a = $scope.$EVENT_SELECTION[0];
				var b = $scope.$EVENT_SELECTION[1];

				if(extent[1] - extent[0] !== 0) {
					var start = ((a - LEFT_VALUE) / size * (extent[1] - extent[0]));
					var stop = ((a + b - LEFT_VALUE) / size * (extent[1] - extent[0]));
					if($scope.progress === 1) {
						console.log('TIME:', new Date(Math.floor((start + extent[0]) * 10) / 10), new Date(Math.floor((stop + extent[0]) * 10) / 10));
					}					
				}
			}
		});
	};
}

/** 
 * Export `d3WidgetSelection`
 */
module.exports = d3WidgetSelection;
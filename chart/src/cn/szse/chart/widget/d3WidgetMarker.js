'use strict';

var element = require('./../shapes/d3SvgMarker');
//var markertips = require('./../widget/d3WidgetMarkerTips');
/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetMarker($scope) {
	return function(context, x, y, style) {
		//初始化marker数据;
		$scope.$MARKER_STORAGE = [];

		//创建无数据的元素;
		context.call(element, [], x, y, style)/*.select('g.graph-marker')*/;

		//监听窗口变化时, 更新元素坐标;
		$scope.$watch('resizable', function() {
			context.call(element, $scope.$MARKER_STORAGE[0] || [], x, y, style);
		});

		//监听数据变化时,更新 MARKER_STORAGE;
		$scope.$watch('MARKER_DATA', function(data) {
			$scope.$MARKER_STORAGE = [data, data];
		});

		//数据变化时,更新元素个数;
		$scope.$watch('$MARKER_STORAGE', function(data) {
			context.call(element, data[0], x, y, style);
		});

		//动画: 运行时间内，计算元素个数;
		$scope.$watch('progress', function(progress) {
			var start = $scope.$Extents[2][0];
			var stop = $scope.$Extents[2][1];

			var current = Math.floor((stop - start) * progress + start);

			$scope.$MARKER_SIZE = binary($scope.$MARKER_STORAGE[1] || [], current);

			if($scope.$MARKER_SIZE === -1) {
				$scope.$MARKER_STORAGE = [[], $scope.$MARKER_STORAGE[1] || []];
			}
		});

		//动画: 更新元素个数;
		$scope.$watch('$MARKER_SIZE',function(size) {
			$scope.$MARKER_STORAGE = [($scope.$MARKER_STORAGE[1] || []).slice(0, size + 1), $scope.$MARKER_STORAGE[1] || []];
			$scope.$CURRENT_MARKER = ($scope.$MARKER_STORAGE[1] || [])[size];
		});
	};
}

function binary(data, dest) {
	var h = data.length - 1;
	var l = 0;
	while(l <= h ) {
		var m = l + ((h - l) >> 1);
		var t = new Date(data[m][0]).getTime();
		if(t === dest) {
			return m;
		} else if(dest > t) {
			/*if((data[m + 1] && dest < new Date( data[m + 1][0]).getTime()) || data[m + 1] === undefined) {
				return m;
			}*/

			if(data[m + 1] === undefined) {
				return m;
			}

			if(data[m + 1] && dest < new Date( data[m + 1][0]).getTime()) {
				return m;
			}

			l = m + 1;
		} else {
			h = m -1;
		}
	}
	return -1;
}

/**
 * Export `d3WidgetMarker`
 */
module.exports = d3WidgetMarker;
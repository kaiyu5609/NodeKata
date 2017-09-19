'use strict';
var utils = require('./../core/utils');
var element = require('./../shapes/d3SvgCandlestick');

/**
 * d3WidgetCandlestick
 * @public	 
 * @method d3WidgetCandlestick
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetCandlestick($scope) {
	return function(context, x, y, w, h, style) {
		//初始化marker数据;
		$scope.$CANDLESTICK_STORAGE = [];

		//创建无数据的元素;
		context.call(element, [], x, y, w, h, style);

		//监听数据变化时,更新 CANDLESTICK_STORAGE;
		$scope.$watch('CANDLESTICK_DATA', function(data) {
			$scope.$CANDLESTICK_STORAGE = [data, data];
		});

		$scope.$watch('resizable', function() {
			context.call(element, $scope.progress === 1 ? $scope.$DATA_STORAGE : $scope.CANDLESTICK_CHANGE, x, y, w, h, style);
		});

		//数据变化时,更新元素个数;
		$scope.$watch('$CANDLESTICK_STORAGE', function(data) {
			$scope.$DATA_STORAGE = data[0];
			$scope.progress = 1.0;
			$scope.$DATA_LOAD = utils.guid();
		});

		$scope.$watch('$DATA_LOAD', function(data) {

			context.call(element, $scope.$DATA_STORAGE || [], x, y, w, h, style);
		});

		$scope.$watch('progress', function(progress) {
			var start = $scope.$Extents[2][0];
			var stop = $scope.$Extents[2][1];

			var excludeStart = new Date(start);
			excludeStart.setHours('11');
			excludeStart.setMinutes('30');
			excludeStart.setSeconds('00');

			var excludeStop = new Date(stop);
			excludeStop.setHours('13');
			excludeStop.setMinutes('00');
			excludeStop.setSeconds('00');

			var current = 0;
			if(start > excludeStop.getTime() || stop < excludeStart.getTime()) {
				current = Math.floor((stop - start) * progress + start);
			} else {
				current = Math.floor((stop - start -  1.5 * 60 * 60 * 1000) * progress + start);
			}

			if(current > excludeStart.getTime()) {
				current += 1.5 * 60 * 60 * 1000;
			}

			$scope.$CANDLESTICK_SIZE = binary($scope.$CANDLESTICK_STORAGE[1] || [], current);

		});

		$scope.$watch('$CANDLESTICK_SIZE',function(size) {

			$scope.CANDLESTICK_CHANGE = ($scope.$CANDLESTICK_STORAGE[1] || []).slice(0, size + 1);
			//console.log($scope.CANDLESTICK_CHANGE.length);
			context.call(element, $scope.CANDLESTICK_CHANGE || [], x, y, w, h, style);
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

			/*if(data[m + 1] === undefined) {
				return m;
			}*/

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
module.exports = d3WidgetCandlestick;
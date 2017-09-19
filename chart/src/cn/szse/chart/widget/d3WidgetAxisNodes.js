'use strict';

var element = require('./../elements/d3SvgAxisNodes');

/**
 * d3WidgetAxisNodes
 * @public	 
 * @method d3WidgetAxisNodes
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetAxisNodes($scope) {

	var ticks = getScaleTicks($scope);
	var array = ['top', 'right', 'bottom', 'left'];

	return function (context) {
		array.forEach(function(orient, i) {
			context.call(element, ticks[i] || [], orient);
		});
		
		//窗体变化时,设置刻度;
		$scope.$watch('resizable', function() {
			ticks = getScaleTicks($scope);
			array.forEach(function(orient, i) {
				context.call(element, ticks[i] || [], orient);
			});
		});

		//数据变化时,设置刻度;
		$scope.$watch('$DATA_LOAD', function() {
			ticks = getScaleTicks($scope);
			array.forEach(function(orient, i) {
				context.call(element, ticks[i] || [], orient);
			});
		});
	};
}


function getScaleTicks($scope) {
	var ANCHORS = ['middle', 'start' , 'middle', 'end'];

	var POINTS = [[0, -5], [8, 3], [0, 18], [-8, 3]];

	var DEGRESS = [
		$scope.$Layout.TOP_DEGRESS, 
		$scope.$Layout.RIGHT_DEGRESS, 
		$scope.$Layout.BOTTOM_DEGRESS, 
		$scope.$Layout.LEFT_DEGRESS
	];

	var transform = function(d, i) {
		var array = [
			[d, $scope.$Layout.TOP_VALUE],
			[$scope.width - $scope.$Layout.RIGHT_VALUE, d],
			[d, $scope.height - $scope.$Layout.BOTTOM_VALUE],
			[$scope.$Layout.LEFT_VALUE, d]
		];
		return array[i];
	};
	
	var ticks = $scope.$Scale.get().map(function(scale, index) {
		if(!scale) {
			return null;
		}

		return scale.ticks().map(function(d, i) {
			var data = {
				translate: transform(scale(d), index),
				x: POINTS[index][0],
				y: POINTS[index][1],
				rotate: DEGRESS[index],
				anchor: DEGRESS[index] ? 'end' : ANCHORS[index]
			};

			if($scope.$Config[index].data) {
				if($scope.$Config[index].data.label) {
					data.tick = $scope.$Config[index].data.label(d);					
				} else {
					data.tick = d;
				}

				if($scope.$Config[index].data.value) {
					data.value = $scope.$Config[index].data.value(d);
				}
			}

			return data;
		});
	});

	return ticks;
}

/**
 * Export `d3WidgetAxisNodes`
 */
module.exports = d3WidgetAxisNodes;
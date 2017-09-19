'use strict';

var utils = require('./../core/utils');
var element = require('./../shapes/d3SvgLine');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetLine($scope) {

	return function(context, eid, id, x, y, defined, smooth) {
		//console.log(eid);
		context.call(element, eid, id, [], x, y, defined, smooth);

		//窗口大小变化时，折线自适应;
		$scope.$watch('resizable', function() {
			context.call(element, eid, id, [$scope.$DATA_STORAGE || []], x, y, defined, smooth);
		});

		$scope.$watch('LINE_DATA', function(data) {
			$scope.$DATA_STORAGE = data;
		});

		$scope.$watch('$DATA_STORAGE', function(data) {
			$scope.progress = 1.0;
			$scope.$DATA_LOAD = utils.guid();
			var array = utils.range(1, $scope.$DATA_STORAGE[0].length).map(function(i){
				return $scope.$DATA_STORAGE.map(function(d) {
					return [d[0], d[i]];
				})
			});
			
			context.call(element, eid, id, array , x, y, defined, smooth);			
		});
	};
}

/**
 * Export `d3WidgetLine`
 */
module.exports = d3WidgetLine;
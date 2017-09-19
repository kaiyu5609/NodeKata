'use strict';

var utils = require('./../core/utils');
var element = require('./../shapes/d3SvgLine');

/**
 * d3WidgetPath
 * @public	 
 * @method d3WidgetPath
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetPath($scope) {

	return function(context, id, x, y, defined, smooth) {
		context.call(element, id, [], x, y, defined, smooth);

		//窗口大小变化时，折线自适应;
		$scope.$watch('resizable', function() {
			context.call(element, id, $scope.$PATH_STORAGE, x, y, defined, smooth);
		});

		$scope.$watch('PATH_DATA', function(data) {
			$scope.$PATH_STORAGE = data;
		});

		$scope.$watch('$PATH_STORAGE', function(data) {
			context.call(element, id, $scope.$PATH_STORAGE , x, y, defined, smooth);
		});
	};
}

/**
 * Export `d3WidgetPath`
 */
module.exports = d3WidgetPath;
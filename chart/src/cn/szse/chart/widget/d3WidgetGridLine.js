'use strict';

var element = require('./../elements/d3SvgGridLine');

/**
 * d3WidgetGridLine
 * @public	 
 * @method d3WidgetGridLine
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetGridLine($scope) {

	return function(context, scaleX, scaleY) {
		context.call(element, scaleX(), scaleY());

		//窗体变化时,设置网格线;
		$scope.$watch('resizable', function() {
			context.call(element, scaleX(), scaleY());
		});

		//监听数据变化时,设置网格线;
		$scope.$watch('$DATA_LOAD', function() {
			context.call(element, scaleX(), scaleY());
		});
	};
}

/**
 * Export `d3WidgetGridLine`
 */
module.exports = d3WidgetGridLine;
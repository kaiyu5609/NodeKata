'use strict';

var utils = require('./../core/utils');
var element = require('./../elements/d3SvgTooltips');
/**
 * d3WidgetTooltips
 * @public	 
 * @method d3WidgetTooltips
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetTooltips($scope) {

	var data = [{name:'34242'}];

	return function(context) {

		// console.log(context);
		// console.log($scope);
		
		context.call(element, data);

		//窗体变化时,设置AxisTips;
		$scope.$watch('resizable', function() {
			
			context.call(element, data);
		});

		//数据变化时,设置AxisTips;
		$scope.$watch('tips', function(tips) {
			
			context.call(element, data);
		});

		//鼠标移动时,设置AxisTips;
		$scope.$watch('$EVENT_HOVER', function(mouse) {
			
		});

		console.log($scope)

		$scope.$watch('CANDLESTICK_DATA', function(data) {
			
			console.log(data);
		});

	};
}

/**
 * Export `d3WidgetTooltips`
 */
module.exports = d3WidgetTooltips;
'use strict';
var Observer = require('./../core/observer');
var element = require('./../elements/d3SvgPaint');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetPaint(id, width, height, $scope) {
	var wrapper = d3.select('#'+ id).style('position', 'relative');

	var context = element(wrapper, id, width, height);
	
	//窗口变化，更新svg属性
	$scope.$watch('resizable', function() {
		context.attr('width', $scope.width).attr('height', $scope.height);
	});
	return context;
}

/**
 * Export `d3WidgetPaint`
 */
module.exports = d3WidgetPaint;
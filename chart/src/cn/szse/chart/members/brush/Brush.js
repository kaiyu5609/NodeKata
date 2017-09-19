'use strict';

var utils = require('./../../core/utils');
var colors = require('./../../core/colors');
var dataset = require('./../../core/dataset');

var d3WidgetMask = require('./../../widget/d3WidgetMask');
var d3WidgetHover = require('./../../widget/d3WidgetHover');
var d3WidgetSelection = require('./../../widget/d3WidgetSelection');
var d3WidgetPaint = require('./../../widget/d3WidgetPaint');
var d3WidgetMarker = require('./../../widget/d3WidgetMarker');
var d3WidgetLine = require('./../../widget/d3WidgetLine');
var d3WidgetBrush = require('./../../widget/d3WidgetBrush');
var d3WidgetMessage = require('./../../widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./../../widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./../../widget/d3WidgetGridLine');
var d3WidgetAxisNodes = require('./../../widget/d3WidgetAxisNodes');
var d3WidgetPointerEvents = require('./../../widget/d3WidgetPointerEvents');

class Brush {
	constructor(options) {
		var date = new Date();
		var day = date.getFullYear() + '/' + (date.getMonth() + 1) + '/'+ date.getDate();
		var scope = dataset(options, [[day + ' 9:30', -2],[day + ' 15:00', 2]]);
		scope.guid = utils.guid();
		scope.uid = 's-chart-el-'+ scope.guid;
		scope.progress = 0;

		function x(d, i) {
			return scope.$Scale.get(2)(new Date(d[0]).getTime());
		}

		function y(d) {
			return scope.$Scale.get(3)(d[1]);
		}

		function defined(d) {
			return !isNaN(d[1]);
		}

		var context = d3WidgetPaint(options.id, scope.width, scope.height, scope)
		.call(d3WidgetMask(scope))
		//.call(d3WidgetPointerEvents(scope))
		.call(d3WidgetGridLine(scope), function() {
			return scope.$Scale.get(2);
		}, function() {
			return scope.$Scale.get(3);
		})
		.call(d3WidgetAxisNodes(scope))
		//.call(d3WidgetAxisTips(scope))
		.call(d3WidgetMessage(scope))
		.call(d3WidgetLine(scope), scope.uid, x, y, defined, true)
		.call(d3WidgetBrush(scope), scope.$Scale.get(2), null)
		//.call(d3WidgetSelection(scope))
		//.call(d3WidgetHover(scope));

		this.$WATCHER = scope;
	}

	progress(x) {
		this.$WATCHER.progress = x;
	}

	mouse(x) {
		//console.log("Brush",this.$WATCHER.mouse);
		//this.$WATCHER.$EVENT_HOVER = x;
	}

	render(data) {
		this.$WATCHER.LINE_DATA = data;
	}
}


/**
 * Export `chart.Brush`
 */
module.exports = Brush;
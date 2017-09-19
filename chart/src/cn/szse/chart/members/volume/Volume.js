'use strict';

var utils = require('./../../core/utils');
var colors = require('./../../core/colors');
var dataset = require('./../../core/dataset');
var resizable = require('./../../core/resizable');

var d3WidgetMask = require('./../../widget/d3WidgetMask');
var d3WidgetRect = require('./../../widget/d3WidgetRect');
var d3WidgetHover = require('./../../widget/d3WidgetHover');
var d3WidgetSelection = require('./../../widget/d3WidgetSelection');
var d3WidgetPaint = require('./../../widget/d3WidgetPaint');
var d3WidgetMarker = require('./../../widget/d3WidgetMarker');
var d3WidgetMessage = require('./../../widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./../../widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./../../widget/d3WidgetGridLine');
var d3WidgetAxisNodes = require('./../../widget/d3WidgetAxisNodes');
var d3WidgetPointerEvents = require('./../../widget/d3WidgetPointerEvents');

class Volume {
	constructor(options) {
		var date = new Date();
		var day = date.getFullYear() + '/' + (date.getMonth() + 1) + '/'+ date.getDate();

		if(options.width === '100%') {
			if(options.domEl) {
				options.width = options.domEl.offsetWidth;
			} else {
				options.width = document.getElementById(options.id).offsetWidth;
			}
		}

		var scope = dataset(options, [[day + ' 9:30', -2],[day + ' 15:00', 2]]);
		scope.guid = utils.guid();
		scope.uid = 's-chart-el-'+ scope.guid;
		scope.progress = 0;

		resizable.$watch('resize', function() {
			if(options.domEl) {
				scope.width = options.domEl.offsetWidth;
				scope.resizable = [scope.width, scope.height];
			} else {
				scope.width = document.getElementById(options.id).offsetWidth;
				scope.resizable = [scope.width, scope.height];
			}
		});

		function x(d, i) {
			var size = (scope.RECT_DATA || []).length;
			var band = 1;
			if(size) {
				band = Math.floor((scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE) / size);
				band = band > 20 ? 20 : band;
			}
			return scope.$Scale.get(2)(new Date(d[0]).getTime()) - Math.floor(band * 0.45) + 1;
		}

		function y(d) {
			return scope.$Scale.get(3)(d[1]);
		}

		function w(d) {
			var size = (scope.RECT_DATA || []).length;
			if(size) {
				var band = Math.floor((scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE) / size);
				band = band > 20 ? 20 : band;
				band = Math.floor(band * 0.9) - Math.floor(band * 0.9) % 2 - 2;
				return band > 3 ? band : 3;
			}
			return 1;
		}

		function h(d) {
			return scope.height - scope.$Layout.BOTTOM_VALUE - scope.$Scale.get(3)(d[1]);
		}
		
		function style(d) {
			return d[2];
		}

		var context = d3WidgetPaint(options.id, scope.width, scope.height, scope)
		.call(d3WidgetMask(scope))
		.call(d3WidgetPointerEvents(scope))
		.call(d3WidgetGridLine(scope), function() {
			return scope.$Scale.get(2);
		}, function() {
			return scope.$Scale.get(3);
		})
		.call(d3WidgetAxisNodes(scope))
		.call(d3WidgetAxisTips(scope))
		.call(d3WidgetMessage(scope))
		.call(d3WidgetRect(scope), x, y, w, h, style)
		.call(d3WidgetHover(scope));

		var tips = d3.select('#' + options.id).append('div').attr('class', 'chart-tooltips');

		scope.element_tips = {
			left: options.left,
			right:options.right,
			tips: tips,
			label: options.tooltips
		};

		this.$WATCHER = scope;
	}

	progress(x) {
		this.$WATCHER.progress = x;
	}

	mouse(layers) {
		var layerX = layers[0];
		var layerY = layers[1];
		var $WATCHER = this.$WATCHER;
		var $Layout = $WATCHER.$Layout;
		var $Config = $WATCHER.$Config;
		var LEFT_VALUE = $Layout.LEFT_VALUE;

		var x = layerX - LEFT_VALUE;

		if($WATCHER.guid !== layers[2]) {
			layerY = -9999;
		}

		var tips = $WATCHER.element_tips.tips.node();

		if(x > 0) {
			var index = $WATCHER.$Scale.get(2).parse(x, $WATCHER.RECT_DATA.length);
			var data = $WATCHER.RECT_DATA[index];
			var label = $WATCHER.RECT_DATA[index][0];

			$WATCHER.$EVENT_HOVER = [$WATCHER.$Scale.get(2)(label), layerY];

			$WATCHER.$AXIS_TIPS = $WATCHER.$Extents.map(function(extent, index) {
				return index === 2 ? label : extent;
			});

			tips.removeAttribute('style');
			tips.style.display = 'block';
			if(x > $WATCHER.width / 2) {
				tips.style.left = $WATCHER.element_tips.left + 'px';
			} else {
				tips.style.right = $WATCHER.element_tips.right + 'px';
			}

			if(typeof $WATCHER.element_tips.label === 'function') {
				tips.innerHTML =  $WATCHER.element_tips.label(data)
			} else {
				tips.innerHTML = data.join('<br>');
			}
		} else {
			$WATCHER.$EVENT_TIPS = {x: -9999, y: -9999, data:[null, null, null, null]};
			$WATCHER.$EVENT_HOVER = layers;
			tips.style.display = 'none';
		}
	}

	render(dataset) {

		var $WATCHER = this.$WATCHER;
		var $Layout = $WATCHER.$Layout;
		var LEFT_VALUE  = $Layout.LEFT_VALUE;
		var RIGHT_VALUE = $Layout.RIGHT_VALUE;

		var width = $WATCHER.width - LEFT_VALUE - RIGHT_VALUE;

		/*var dataset = data.map(function(d) {
			return [new Date(d[0]).getTime(), +d[1], d[2]]
		});*/
		var start = dataset[0];
		var last = dataset[dataset.length - 1];

		var startTime = new Date(start[0]);
		var lastTime = new Date(last[0]);

		var excludeStart = new Date(last[0]);
		excludeStart.setHours('11');
		excludeStart.setMinutes('30');
		excludeStart.setSeconds('00');

		var excludeStop = new Date(last[0]);
		excludeStop.setHours('13');
		excludeStop.setMinutes('00');
		excludeStop.setSeconds('00');

		var filter;
		if(startTime.getTime() >= excludeStop.getTime() || lastTime.getTime() <= excludeStart.getTime()) {
			filter = utils.gather(width, (lastTime.getTime() - startTime.getTime()) / 1000);
		} else {
			filter = utils.gather(width, (lastTime.getTime() - startTime.getTime() - 1.5 * 60 * 60 * 1000) / 1000);
		}

		$WATCHER.DATA_GS = filter.gs;

		$WATCHER.RECT_DATA = filter(dataset, this.DATA_FILTER || function(d) {return d[d.length - 1]});
	}
}


/**
 * Export `chart.Volume`
 */
module.exports = Volume;
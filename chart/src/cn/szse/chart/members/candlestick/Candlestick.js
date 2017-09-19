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
var d3WidgetPath = require('./../../widget/d3WidgetPath');
var d3WidgetCandlestick = require('./../../widget/d3WidgetCandlestick');
var d3WidgetMessage = require('./../../widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./../../widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./../../widget/d3WidgetGridLine');
var d3WidgetMarkerTips = require('./../../widget/d3WidgetMarkerTips');
var d3WidgetAxisNodes = require('./../../widget/d3WidgetAxisNodes');
var d3WidgetPointerEvents = require('./../../widget/d3WidgetPointerEvents');

class Candlestick {
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

		var scope = dataset(options, [[day + " 9:30", 4, 2, 1, 3], [day + " 15:00", 4, 2, 1, 3]]);

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
			var size = (scope.$DATA_STORAGE || []).length;

			var band = 0;
			if(size) {
				band = Math.floor((scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE) / size);
				band = band > 3 ? (band > 20 ? 20 : band) : 3;
			}
			return scope.$Scale.get(2)(new Date(d[0]).getTime()) - Math.floor(band * 0.45) + 1;
		}

		function y(d) {
			return scope.$Scale.get(3)(d);
		}

		function markerY(d) {
			return scope.$Scale.get(3)(d[1])
		}

		function lineY(d) {
			return scope.$Scale.get(3)(d[1])
		}

		function w(d) {
			var size = (scope.$DATA_STORAGE || []).length;

			if(size) {
				var band = Math.floor((scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE) / size);
				band = band > 20 ? 20 : band;
				band = Math.floor(band * 0.9) - Math.floor(band * 0.9) % 2 - 2;
				return band > 3 ? band : 3;
			}
			return 1;
		}

		function h(d) {
			return 1;
		}

		function defined(d) {
			return !isNaN(d[1]);
		}

		//this['_tooltips_'] = d3.select('#' + options.id).append('div').attr('class', 'chart-tooltips');

		this[0] = d3WidgetPaint(options.id, scope.width, scope.height, scope)
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
		.call(d3WidgetCandlestick(scope), x, y, w, h)
		.call(d3WidgetPath(scope), scope.uid, x, lineY, defined, true)
		.call(d3WidgetSelection(scope))
		.call(d3WidgetHover(scope))
		.call(d3WidgetMarker(scope), x, markerY, function(d) {
			return d[2] === 'S' ? 'minus' : 'plus';
		});

		var wrapper = d3.select('#' + options.id);

		wrapper.call(d3WidgetMarkerTips(scope));

		var tips = wrapper.append('div').attr('class', 'chart-tooltips');

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
			try{
				var index = $WATCHER.$Scale.get(2).parse(x, $WATCHER.CANDLESTICK_DATA.length);
				var data = $WATCHER.CANDLESTICK_DATA[index];
				var label = data[0];

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

			} catch(e) {
				console.log(e);
			}
		} else {
			$WATCHER.$EVENT_TIPS = {x: -9999, y: -9999, data:[null, null, null, null]};
			$WATCHER.$EVENT_HOVER = layers;
			tips.style.display = 'none';
		}
	}

	pinch(params) {
		console.log(params);
		//var $WATCHER = this.$WATCHER;
		//$WATCHER.CANDLESTICK_DATA;
		//console.log($WATCHER.$Scale.get(3));

	}

	watch(name, callback) {
		var $WATCHER = this.$WATCHER;		

		$WATCHER.$watch('$CURRENT_' + name.toLocaleUpperCase(), function(data) {
			if(typeof callback === 'function') {
				callback($WATCHER.$CURRENT_MARKER);
			}
		});		
	}

	on(name, callback) {
		var $WATCHER = this.$WATCHER;
		var element = this[0].node().querySelector('g.graph-'+ name.toLocaleLowerCase());
		if(element) {
			element.onclick = function(event) {
				var tips = event.target.__data__;
				var label = callback(tips);
				$WATCHER.MARKER_ACTIVE = [{
					top: $WATCHER.$Scale.get(3)(tips[1]),
					left: $WATCHER.$Scale.get(2)(tips[0]),
					label: label
				}];
			};
		};

		this[0].select('rect.graph-hover').on('click', function() {
			$WATCHER.MARKER_ACTIVE = [{left: -9999, top: -9999}];
		});
	}

	converge(callback) {
		this.DATA_FILTER = callback;
	}

	render(dataset) {
		var $WATCHER = this.$WATCHER;
		var $Layout = $WATCHER.$Layout;
		var LEFT_VALUE  = $Layout.LEFT_VALUE;
		var RIGHT_VALUE = $Layout.RIGHT_VALUE;

		var width = $WATCHER.width - LEFT_VALUE - RIGHT_VALUE;

		var data = dataset.candlestick || dataset;
		var start = data[0];
		var last = data[data.length - 1];

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

		$WATCHER.CANDLESTICK_DATA = filter(data, this.DATA_FILTER || function(d) {return d[d.length - 1]});
		/*$WATCHER.MARKER_DATA = (dataset.marker || []).map(function(d) {

			return [new Date(d[0]).getTime(), + d[1], d[2], d[3]];
		});*/
		$WATCHER.MARKER_DATA = (dataset.marker || []);
		$WATCHER.PATH_DATA = dataset.line || [];
	}
}


/**
 * Export `chart.Candlestick`
 */
module.exports = Candlestick;
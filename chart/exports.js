/**
 *
 *
 */

var utils = require('./src/cn/szse/chart/core/utils');
var matrix = require('./src/cn/szse/chart/core/matrix');
var themes = require('./src/cn/szse/chart/core/themes');
var observer = require('./src/cn/szse/chart/core/observer');
var animate = require('./src/cn/szse/chart/core/animate');
var handler = require('./src/cn/szse/chart/core/handler');
var colors = require('./src/cn/szse/chart/core/colors');
var dataset = require('./src/cn/szse/chart/core/dataset');
var mouse = require('./src/cn/szse/chart/core/mouse');
var draggable = require('./src/cn/szse/chart/core/draggable');

var d3SvgDesc = require('./src/cn/szse/chart/elements/d3SvgDesc');
var d3SvgMask = require('./src/cn/szse/chart/elements/d3SvgMask');
var d3SvgPaint = require('./src/cn/szse/chart/elements/d3SvgPaint');
var d3SvgHover = require('./src/cn/szse/chart/elements/d3SvgHover');
var d3SvgSelection = require('./src/cn/szse/chart/elements/d3SvgSelection');
var d3SvgGridLine = require('./src/cn/szse/chart/elements/d3SvgGridLine');
var d3SvgAxisTips = require('./src/cn/szse/chart/elements/d3SvgAxisTips');
var d3SvgMessage = require('./src/cn/szse/chart/elements/d3SvgMessage');
var d3SvgAxisNodes = require('./src/cn/szse/chart/elements/d3SvgAxisNodes');
var d3SvgPointerEvents = require('./src/cn/szse/chart/elements/d3SvgPointerEvents');

var d3SvgLine = require('./src/cn/szse/chart/shapes/d3SvgLine');
var d3SvgRect = require('./src/cn/szse/chart/shapes/d3SvgRect');
var d3SvgPoint = require('./src/cn/szse/chart/shapes/d3SvgPoint');
var d3SvgMarker = require('./src/cn/szse/chart/shapes/d3SvgMarker');
var d3SvgCandlestick = require('./src/cn/szse/chart/shapes/d3SvgCandlestick');

var d3WidgetMask = require('./src/cn/szse/chart/widget/d3WidgetMask');
var d3WidgetRect = require('./src/cn/szse/chart/widget/d3WidgetRect');
var d3WidgetHover = require('./src/cn/szse/chart/widget/d3WidgetHover');
var d3WidgetSelection = require('./src/cn/szse/chart/widget/d3WidgetSelection');
var d3WidgetPaint = require('./src/cn/szse/chart/widget/d3WidgetPaint');
var d3WidgetMarker = require('./src/cn/szse/chart/widget/d3WidgetMarker');
var d3WidgetLine = require('./src/cn/szse/chart/widget/d3WidgetLine');
var d3WidgetMessage = require('./src/cn/szse/chart/widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./src/cn/szse/chart/widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./src/cn/szse/chart/widget/d3WidgetGridLine');
var d3WidgetAxisNodes = require('./src/cn/szse/chart/widget/d3WidgetAxisNodes');
var d3WidgetCandlestick = require('./src/cn/szse/chart/widget/d3WidgetCandlestick');
var d3WidgetPointerEvents = require('./src/cn/szse/chart/widget/d3WidgetPointerEvents');


var Volume = require('./src/cn/szse/chart/members/volume/Volume');
var Brush = require('./src/cn/szse/chart/members/brush/Brush');
var TimeSeries = require('./src/cn/szse/chart/members/timeseries/TimeSeries');
var Candlestick = require('./src/cn/szse/chart/members/candlestick/Candlestick');

module.exports = {
	core: {
		utils: utils,
		observer: observer,
		animate: animate,
		matrix: matrix,
		handler: handler,
		colors: colors,
		dataset: dataset,
		draggable: draggable,
		themes: themes
	},

	elements: {
		desc: d3SvgDesc,
		mask: d3SvgMask,
		paint: d3SvgPaint,
		hover: d3SvgHover,
		tips: d3SvgAxisTips,
		axis: d3SvgAxisNodes,
		selection: d3SvgSelection,
		gridline: d3SvgGridLine,
		message: d3SvgMessage,
		pointerEvents: d3SvgPointerEvents,
	},

	shapes: {
		line: d3SvgLine,
		point: d3SvgPoint,
		rect: d3SvgRect,
		marker: d3SvgMarker,
		candlestick: d3SvgCandlestick,
	},

	widget: {
		mask: d3WidgetMask,
		hover: d3WidgetHover,
		paint: d3WidgetPaint,
		rect: d3WidgetRect,
		marker: d3WidgetMarker,
		line: d3WidgetLine,
		gridline: d3WidgetGridLine,
		ticks: d3WidgetAxisNodes,
		tips: d3WidgetAxisTips,
		message: d3WidgetMessage,
		selection: d3WidgetSelection,
		candlestick: d3WidgetCandlestick,
		pointerEvents: d3WidgetPointerEvents,
	},
	mouse: mouse,

	Brush: Brush,	
	Volume: Volume,
	TimeSeries: TimeSeries,
	Candlestick: Candlestick,

};
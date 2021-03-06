(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.cn||(g.cn = {}));g=(g.szse||(g.szse = {}));g.chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 *
 *
 */

var utils = require('./src/cn/szse/chart/core/utils');
var matrix = require('./src/cn/szse/chart/core/matrix');
var observer = require('./src/cn/szse/chart/core/observer');
var animate = require('./src/cn/szse/chart/core/animate');
var handler = require('./src/cn/szse/chart/core/handler');
var colors = require('./src/cn/szse/chart/core/colors');
var dataset = require('./src/cn/szse/chart/core/dataset');

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
var d3SvgPoint = require('./src/cn/szse/chart/shapes/d3SvgPoint');

var d3WidgetMask = require('./src/cn/szse/chart/widget/d3WidgetMask');
var d3WidgetHover = require('./src/cn/szse/chart/widget/d3WidgetHover');
var d3WidgetSelection = require('./src/cn/szse/chart/widget/d3WidgetSelection');
var d3WidgetPaint = require('./src/cn/szse/chart/widget/d3WidgetPaint');
var d3WidgetLine = require('./src/cn/szse/chart/widget/d3WidgetLine');
var d3WidgetMessage = require('./src/cn/szse/chart/widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./src/cn/szse/chart/widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./src/cn/szse/chart/widget/d3WidgetGridLine');
var d3WidgetAxisNodes = require('./src/cn/szse/chart/widget/d3WidgetAxisNodes');
var d3WidgetPointerEvents = require('./src/cn/szse/chart/widget/d3WidgetPointerEvents');

var TimeSeries = require('./src/cn/szse/chart/members/timeseries/TimeSeries');

module.exports = {
	core: {
		utils: utils,
		observer: observer,
		animate: animate,
		matrix: matrix,
		handler: handler,
		colors: colors,
		dataset: dataset,
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
	},

	widget: {
		mask: d3WidgetMask,
		hover: d3WidgetHover,
		paint: d3WidgetPaint,
		line: d3WidgetLine,
		gridline: d3WidgetGridLine,
		ticks: d3WidgetAxisNodes,
		tips: d3WidgetAxisTips,
		message: d3WidgetMessage,
		selection: d3WidgetSelection,
		pointerEvents: d3WidgetPointerEvents,
	},

	chart:{
		TimeSeries: TimeSeries
	}
};
},{"./src/cn/szse/chart/core/animate":2,"./src/cn/szse/chart/core/colors":3,"./src/cn/szse/chart/core/dataset":4,"./src/cn/szse/chart/core/handler":5,"./src/cn/szse/chart/core/matrix":6,"./src/cn/szse/chart/core/observer":7,"./src/cn/szse/chart/core/utils":8,"./src/cn/szse/chart/elements/d3SvgAxisNodes":9,"./src/cn/szse/chart/elements/d3SvgAxisTips":10,"./src/cn/szse/chart/elements/d3SvgDesc":11,"./src/cn/szse/chart/elements/d3SvgGridLine":12,"./src/cn/szse/chart/elements/d3SvgHover":13,"./src/cn/szse/chart/elements/d3SvgMask":14,"./src/cn/szse/chart/elements/d3SvgMessage":15,"./src/cn/szse/chart/elements/d3SvgPaint":16,"./src/cn/szse/chart/elements/d3SvgPointerEvents":17,"./src/cn/szse/chart/elements/d3SvgSelection":18,"./src/cn/szse/chart/members/timeseries/TimeSeries":19,"./src/cn/szse/chart/shapes/d3SvgLine":20,"./src/cn/szse/chart/shapes/d3SvgPoint":21,"./src/cn/szse/chart/widget/d3WidgetAxisNodes":22,"./src/cn/szse/chart/widget/d3WidgetAxisTips":23,"./src/cn/szse/chart/widget/d3WidgetGridLine":24,"./src/cn/szse/chart/widget/d3WidgetHover":25,"./src/cn/szse/chart/widget/d3WidgetLine":26,"./src/cn/szse/chart/widget/d3WidgetMask":27,"./src/cn/szse/chart/widget/d3WidgetMessage":28,"./src/cn/szse/chart/widget/d3WidgetPaint":29,"./src/cn/szse/chart/widget/d3WidgetPointerEvents":30,"./src/cn/szse/chart/widget/d3WidgetSelection":31}],2:[function(require,module,exports){
'use strict';

var linear = function (t) {
	return t;
};

/**
 * 图形动画
 * @public	 
 * @method animate
 * @returns {Object} controls
 */
var animate = function () {
	var percent = 0;
	var step = 0.01;
	var state = false;
	var watch;

	/**
	 * 动画执行 `animate`
	 */
	var animate = function () {
		percent += step;
		if (percent <= 1 && state) {
			watch(+linear(percent));
			requestAnimationFrame(animate);
		} else {
			watch(1.0);
			state = false;
		}
	};

	/**
	 * 动画播放 `play`
	 */
	var play = function () {
		if (state === true) {
			return;
		}
		state = true;
		animate();
	};

	/**
	 * 动画暂停 `pause`
	 */
	var pause = function () {
		state = false;
	};

	/**
	 * 动画跳转并播放 `gotoAndPlay`
	 */
	var gotoAndPlay = function (x) {
		percent = x;
		play();
	};

	/**
	 * 动画跳转并停止 `gotoAndStop`
	 */
	var gotoAndStop = function (x) {
		percent = x;
		pause();
	};

	/**
	 * 动画控制 `controls`
	 */
	var controls = function () {
		return {
			play : play,
			pause : pause,
			gotoAndPlay : gotoAndPlay,
			gotoAndStop : gotoAndStop
		};
	};

	/**
	 * 动画时长 `duration`
	 */
	controls.duration = function (x) {
		var count = (x || 500) * 60 / 1000;
		step = 1 / count;
		return controls;
	};

	/**
	 * 动画监听 `watch`
	 */
	controls.watch = function (x) {
		watch = x;
		return controls;
	};

	return controls;
};

/**
 * Export `animate`
 */
module.exports = animate;
},{}],3:[function(require,module,exports){
'use strict';

var colors = {
	d3 : {
		"10" : ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
		"20" : ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5",
			"#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
		"20b" : ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39",
			"#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
		"20c" : ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476",
			"#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"],
	},
	// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
	YlGn : {
		3 : ["#f7fcb9", "#addd8e", "#31a354"],
		4 : ["#ffffcc", "#c2e699", "#78c679", "#238443"],
		5 : ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"],
		6 : ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#31a354", "#006837"],
		7 : ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"],
		8 : ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"],
		9 : ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"]
	},
	YlGnBu : {
		3 : ["#edf8b1", "#7fcdbb", "#2c7fb8"],
		4 : ["#ffffcc", "#a1dab4", "#41b6c4", "#225ea8"],
		5 : ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
		6 : ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"],
		7 : ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
		8 : ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
		9 : ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"]
	},
	GnBu : {
		3 : ["#e0f3db", "#a8ddb5", "#43a2ca"],
		4 : ["#f0f9e8", "#bae4bc", "#7bccc4", "#2b8cbe"],
		5 : ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"],
		6 : ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#43a2ca", "#0868ac"],
		7 : ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"],
		8 : ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"],
		9 : ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"]
	},
	BuGn : {
		3 : ["#e5f5f9", "#99d8c9", "#2ca25f"],
		4 : ["#edf8fb", "#b2e2e2", "#66c2a4", "#238b45"],
		5 : ["#edf8fb", "#b2e2e2", "#66c2a4", "#2ca25f", "#006d2c"],
		6 : ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"],
		7 : ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"],
		8 : ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"],
		9 : ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"]
	},
	PuBuGn : {
		3 : ["#ece2f0", "#a6bddb", "#1c9099"],
		4 : ["#f6eff7", "#bdc9e1", "#67a9cf", "#02818a"],
		5 : ["#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59"],
		6 : ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#1c9099", "#016c59"],
		7 : ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"],
		8 : ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"],
		9 : ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]
	},
	PuBu : {
		3 : ["#ece7f2", "#a6bddb", "#2b8cbe"],
		4 : ["#f1eef6", "#bdc9e1", "#74a9cf", "#0570b0"],
		5 : ["#f1eef6", "#bdc9e1", "#74a9cf", "#2b8cbe", "#045a8d"],
		6 : ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#2b8cbe", "#045a8d"],
		7 : ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"],
		8 : ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"],
		9 : ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]
	},
	BuPu : {
		3 : ["#e0ecf4", "#9ebcda", "#8856a7"],
		4 : ["#edf8fb", "#b3cde3", "#8c96c6", "#88419d"],
		5 : ["#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c"],
		6 : ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8856a7", "#810f7c"],
		7 : ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"],
		8 : ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"],
		9 : ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"]
	},
	RdPu : {
		3 : ["#fde0dd", "#fa9fb5", "#c51b8a"],
		4 : ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"],
		5 : ["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"],
		6 : ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#c51b8a", "#7a0177"],
		7 : ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
		8 : ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
		9 : ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"]
	},
	PuRd : {
		3 : ["#e7e1ef", "#c994c7", "#dd1c77"],
		4 : ["#f1eef6", "#d7b5d8", "#df65b0", "#ce1256"],
		5 : ["#f1eef6", "#d7b5d8", "#df65b0", "#dd1c77", "#980043"],
		6 : ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#dd1c77", "#980043"],
		7 : ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"],
		8 : ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"],
		9 : ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"]
	},
	OrRd : {
		3 : ["#fee8c8", "#fdbb84", "#e34a33"],
		4 : ["#fef0d9", "#fdcc8a", "#fc8d59", "#d7301f"],
		5 : ["#fef0d9", "#fdcc8a", "#fc8d59", "#e34a33", "#b30000"],
		6 : ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"],
		7 : ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
		8 : ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
		9 : ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]
	},
	YlOrRd : {
		3 : ["#ffeda0", "#feb24c", "#f03b20"],
		4 : ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"],
		5 : ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"],
		6 : ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"],
		7 : ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
		8 : ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
		9 : ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
	},
	YlOrBr : {
		3 : ["#fff7bc", "#fec44f", "#d95f0e"],
		4 : ["#ffffd4", "#fed98e", "#fe9929", "#cc4c02"],
		5 : ["#ffffd4", "#fed98e", "#fe9929", "#d95f0e", "#993404"],
		6 : ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"],
		7 : ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"],
		8 : ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"],
		9 : ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"]
	},
	Purples : {
		3 : ["#efedf5", "#bcbddc", "#756bb1"],
		4 : ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#6a51a3"],
		5 : ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"],
		6 : ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"],
		7 : ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"],
		8 : ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"],
		9 : ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"]
	},
	Blues : {
		3 : ["#deebf7", "#9ecae1", "#3182bd"],
		4 : ["#eff3ff", "#bdd7e7", "#6baed6", "#2171b5"],
		5 : ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"],
		6 : ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"],
		7 : ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
		8 : ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
		9 : ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
	},
	Greens : {
		3 : ["#e5f5e0", "#a1d99b", "#31a354"],
		4 : ["#edf8e9", "#bae4b3", "#74c476", "#238b45"],
		5 : ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"],
		6 : ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"],
		7 : ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
		8 : ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
		9 : ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"]
	},
	Oranges : {
		3 : ["#fee6ce", "#fdae6b", "#e6550d"],
		4 : ["#feedde", "#fdbe85", "#fd8d3c", "#d94701"],
		5 : ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"],
		6 : ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#e6550d", "#a63603"],
		7 : ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"],
		8 : ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"],
		9 : ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"]
	},
	Reds : {
		3 : ["#fee0d2", "#fc9272", "#de2d26"],
		4 : ["#fee5d9", "#fcae91", "#fb6a4a", "#cb181d"],
		5 : ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"],
		6 : ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"],
		7 : ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"],
		8 : ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"],
		9 : ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"]
	},
	Greys : {
		3 : ["#f0f0f0", "#bdbdbd", "#636363"],
		4 : ["#f7f7f7", "#cccccc", "#969696", "#525252"],
		5 : ["#f7f7f7", "#cccccc", "#969696", "#636363", "#252525"],
		6 : ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#636363", "#252525"],
		7 : ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"],
		8 : ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"],
		9 : ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"]
	},
	PuOr : {
		3 : ["#f1a340", "#f7f7f7", "#998ec3"],
		4 : ["#e66101", "#fdb863", "#b2abd2", "#5e3c99"],
		5 : ["#e66101", "#fdb863", "#f7f7f7", "#b2abd2", "#5e3c99"],
		6 : ["#b35806", "#f1a340", "#fee0b6", "#d8daeb", "#998ec3", "#542788"],
		7 : ["#b35806", "#f1a340", "#fee0b6", "#f7f7f7", "#d8daeb", "#998ec3", "#542788"],
		8 : ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788"],
		9 : ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788"],
		10 : ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
		11 : ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"]
	},
	BrBG : {
		3 : ["#d8b365", "#f5f5f5", "#5ab4ac"],
		4 : ["#a6611a", "#dfc27d", "#80cdc1", "#018571"],
		5 : ["#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571"],
		6 : ["#8c510a", "#d8b365", "#f6e8c3", "#c7eae5", "#5ab4ac", "#01665e"],
		7 : ["#8c510a", "#d8b365", "#f6e8c3", "#f5f5f5", "#c7eae5", "#5ab4ac", "#01665e"],
		8 : ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e"],
		9 : ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e"],
		10 : ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
		11 : ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"]
	},
	PRGn : {
		3 : ["#af8dc3", "#f7f7f7", "#7fbf7b"],
		4 : ["#7b3294", "#c2a5cf", "#a6dba0", "#008837"],
		5 : ["#7b3294", "#c2a5cf", "#f7f7f7", "#a6dba0", "#008837"],
		6 : ["#762a83", "#af8dc3", "#e7d4e8", "#d9f0d3", "#7fbf7b", "#1b7837"],
		7 : ["#762a83", "#af8dc3", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#7fbf7b", "#1b7837"],
		8 : ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"],
		9 : ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"],
		10 : ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
		11 : ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]
	},
	PiYG : {
		3 : ["#e9a3c9", "#f7f7f7", "#a1d76a"],
		4 : ["#d01c8b", "#f1b6da", "#b8e186", "#4dac26"],
		5 : ["#d01c8b", "#f1b6da", "#f7f7f7", "#b8e186", "#4dac26"],
		6 : ["#c51b7d", "#e9a3c9", "#fde0ef", "#e6f5d0", "#a1d76a", "#4d9221"],
		7 : ["#c51b7d", "#e9a3c9", "#fde0ef", "#f7f7f7", "#e6f5d0", "#a1d76a", "#4d9221"],
		8 : ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"],
		9 : ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"],
		10 : ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
		11 : ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
	},
	RdBu : {
		3 : ["#ef8a62", "#f7f7f7", "#67a9cf"],
		4 : ["#ca0020", "#f4a582", "#92c5de", "#0571b0"],
		5 : ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"],
		6 : ["#b2182b", "#ef8a62", "#fddbc7", "#d1e5f0", "#67a9cf", "#2166ac"],
		7 : ["#b2182b", "#ef8a62", "#fddbc7", "#f7f7f7", "#d1e5f0", "#67a9cf", "#2166ac"],
		8 : ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"],
		9 : ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"],
		10 : ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
		11 : ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
	},
	RdGy : {
		3 : ["#ef8a62", "#ffffff", "#999999"],
		4 : ["#ca0020", "#f4a582", "#bababa", "#404040"],
		5 : ["#ca0020", "#f4a582", "#ffffff", "#bababa", "#404040"],
		6 : ["#b2182b", "#ef8a62", "#fddbc7", "#e0e0e0", "#999999", "#4d4d4d"],
		7 : ["#b2182b", "#ef8a62", "#fddbc7", "#ffffff", "#e0e0e0", "#999999", "#4d4d4d"],
		8 : ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"],
		9 : ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"],
		10 : ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
		11 : ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"]
	},
	RdYlBu : {
		3 : ["#fc8d59", "#ffffbf", "#91bfdb"],
		4 : ["#d7191c", "#fdae61", "#abd9e9", "#2c7bb6"],
		5 : ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
		6 : ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
		7 : ["#d73027", "#fc8d59", "#fee090", "#ffffbf", "#e0f3f8", "#91bfdb", "#4575b4"],
		8 : ["#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
		9 : ["#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
		10 : ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
		11 : ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
	},
	Spectral : {
		3 : ["#fc8d59", "#ffffbf", "#99d594"],
		4 : ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"],
		5 : ["#d7191c", "#fdae61", "#ffffbf", "#abdda4", "#2b83ba"],
		6 : ["#d53e4f", "#fc8d59", "#fee08b", "#e6f598", "#99d594", "#3288bd"],
		7 : ["#d53e4f", "#fc8d59", "#fee08b", "#ffffbf", "#e6f598", "#99d594", "#3288bd"],
		8 : ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
		9 : ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
		10 : ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
		11 : ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
	},
	RdYlGn : {
		3 : ["#fc8d59", "#ffffbf", "#91cf60"],
		4 : ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"],
		5 : ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"],
		6 : ["#d73027", "#fc8d59", "#fee08b", "#d9ef8b", "#91cf60", "#1a9850"],
		7 : ["#d73027", "#fc8d59", "#fee08b", "#ffffbf", "#d9ef8b", "#91cf60", "#1a9850"],
		8 : ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
		9 : ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
		10 : ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
		11 : ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
	},
	Accent : {
		3 : ["#7fc97f", "#beaed4", "#fdc086"],
		4 : ["#7fc97f", "#beaed4", "#fdc086", "#ffff99"],
		5 : ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"],
		6 : ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f"],
		7 : ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17"],
		8 : ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"]
	},
	Dark2 : {
		3 : ["#1b9e77", "#d95f02", "#7570b3"],
		4 : ["#1b9e77", "#d95f02", "#7570b3", "#e7298a"],
		5 : ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e"],
		6 : ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"],
		7 : ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"],
		8 : ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
	},
	Paired : {
		3 : ["#a6cee3", "#1f78b4", "#b2df8a"],
		4 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c"],
		5 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99"],
		6 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c"],
		7 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f"],
		8 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00"],
		9 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6"],
		10 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a"],
		11 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99"],
		12 : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]
	},
	Pastel1 : {
		3 : ["#fbb4ae", "#b3cde3", "#ccebc5"],
		4 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4"],
		5 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6"],
		6 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc"],
		7 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd"],
		8 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec"],
		9 : ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
	},
	Pastel2 : {
		3 : ["#b3e2cd", "#fdcdac", "#cbd5e8"],
		4 : ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4"],
		5 : ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9"],
		6 : ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae"],
		7 : ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc"],
		8 : ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"]
	},
	Set1 : {
		3 : ["#e41a1c", "#377eb8", "#4daf4a"],
		4 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"],
		5 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"],
		6 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"],
		7 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628"],
		8 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf"],
		9 : ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
	},
	Set2 : {
		3 : ["#66c2a5", "#fc8d62", "#8da0cb"],
		4 : ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3"],
		5 : ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"],
		6 : ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f"],
		7 : ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"],
		8 : ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
	},
	Set3 : {
		3 : ["#8dd3c7", "#ffffb3", "#bebada"],
		4 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072"],
		5 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3"],
		6 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462"],
		7 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69"],
		8 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5"],
		9 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9"],
		10 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd"],
		11 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5"],
		12 : ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"]
	}
};

/**
 * Export `colors`
 */
module.exports = colors;
},{}],4:[function(require,module,exports){
'use strict';

var utils    = require('./../core/utils');
var matrix   = require('./../core/matrix');
var observer = require('./../core/observer');

function Scope(options, data) {
	var scope = new core.observer();

	scope.width = options.width;
	scope.height = options.height;

	var scales, domain, ranges;

	scales = options.scale.map(function(opts, i) {

		if(opts === null) {
			return null;
		}

		if(!opts.extent) {
			return utils[opts.type](utils.extent(data, function(d) {
				return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
			}));
		}

		if(typeof opts.extent === 'function') {
			return utils[opts.type](opts.extent(utils.extent(data, function(d) {
				return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
			})));
		}

		return utils[opts.type](opts.extent);
	});

	domain = scales.map(function(scale, i) {
		return scale ? scale.ticks().map(function(d) {
			return options.scale[i].data.label(d);
		}) : null;
	});

	scope.$Layout = matrix(scope.width, scope.height, domain, {labels: [], orient:"bottom"});
	//set scale
	ranges = [
		[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
		[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE], 
		[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
		[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE]
	];

	scales.forEach(function(scale, i) {
		return scale ? scale.range(ranges[i]) : null;
	});

	scope.$Scale = {
		get: function(index) {
			return index !== undefined ? scales[index] : scales;
		}
	};

	scope.$Config = options.scale;

	scope.$watch('data', function(data) {
		scales = options.scale.map(function(opts, i) {
			if(opts === null) {
				return null;
			}

			if(!opts.extent) {
				return utils[opts.type](utils.extent(data, function(d) {
					return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
				}));
			}

			if(typeof opts.extent === 'function') {
				return utils[opts.type](opts.extent(utils.extent(data, function(d) {
					return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
				})));
			}

			return utils[opts.type](opts.extent);
		});

		domain = scales.map(function(scale, i) {
			return scale ? scale.ticks().map(function(d) {
				return options.scale[i].data.label(d);
			}) : null;
		});

		scope.$Layout = matrix(scope.width, scope.height, domain, {labels: [], orient:"bottom"});

		scope.$Extents = scales.map(function(scale) {
			if(!scale) {
				return null;
			}
			return utils.extent(scale.ticks());
		});

		//set scale
		ranges = [
			[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
			[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE], 
			[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
			[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE]
		];

		scales.forEach(function(scale, i) {
			return scale ? scale.range(ranges[i]) : null;
		});

		scope.$Scale = {
			get: function(index) {
				return index !== undefined ? scales[index] : scales;
			}
		};

		scope.$Config = options.scale;
	});

	scope.$watch('resizable', function() {
		scope.$Layout = matrix(scope.width, scope.height, domain, {labels: [], orient:"bottom"});
	
		//set scale
		ranges = [
			[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
			[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE], 
			[scope.$Layout.LEFT_VALUE, scope.width - scope.$Layout.RIGHT_VALUE], 
			[scope.height - scope.$Layout.BOTTOM_VALUE, scope.$Layout.TOP_VALUE]
		];

		scales.forEach(function(scale, i) {
			return scale ? scale.range(ranges[i]) : null;
		});

		scope.$Scale = {
			get: function(index) {
				return index !== undefined ? scales[index] : scales;
			}
		};

		scope.$Config = options.scale;
	});

	return scope;
}

/**
 * Export `Scope`
 */
module.exports = Scope;
},{"./../core/matrix":6,"./../core/observer":7,"./../core/utils":8}],5:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var callEvent = function(callback) {
	return function(event) {
		event = event || window.event;
		callback.call(this, event);
	};
};

var handler = function(elements, type, callback) {
	if(!elements.length) {
		elements = [elements];
	}

	utils.each(elements, function(element) {
		if (element.addEventListener) {
			element.addEventListener(type, callEvent(callback), false);
		} else if (element.attachEvent) {
			if (type === 'input') {
				type = "propertychange";
			}
			element.attachEvent('on' + type, callEvent(callback));
		}
	});
};

/**
 * Export `handler`
 */
module.exports = handler;
},{"./utils":8}],6:[function(require,module,exports){
'use strict';

var utils = require('./utils');

function rowsOfCount() {
	return Math.floor(labelsTotalWidth / paintWidth) + 1;
}

function labelsTotalHeight(rowsOfCount, lineHeight) {
	return rowsOfCount * lineHeight;
}

function labelsWidthList(labels, measure, span) {
	return labels.map(function(d) {
		return measure(d).width + (span || 0);
	});
}

function isOverlap(result, meanValue) {
	var size = result.length;
	var flag = false;
	for(var i = 1; i < size; i++) {
		var prev = result[i - 1];
		var current = result[i];
		if((prev + current) * 0.5 >= meanValue) {
			flag = true;
			break;
		}
	}
	return flag;
}

function isOverFlow(pixel, value, start) {
	return (Math.sqrt(pixel * pixel / 2) - value) >= start;
}

function hasOverFlow(result, meanValue, start) {
	var flag = false;
	utils.each(result, function(pixel, i) {
		if(isOverFlow(pixel, meanValue * i, start)) {
			return flag = true, false;
		}
	});
	return flag;
}

function getXLabelPixel(result, meanValue, start) {
	if(result.length === 0) {
		return {
			deg: 0,
			value: 15
		};
	}

	if(isOverlap(result, meanValue) === false) {
		return {
			deg: 0,
			value: 30
		};
	}

	if(hasOverFlow(result, meanValue, start)) {
		return {
			deg: -45,
			value: utils.max(result)
		};
	}

	return {
		deg: -45,
		value: utils.max(result, function(value) {
			return Math.sqrt(value * value / 2);
		})
	};
}

function getYLabelPixel(result) {
	return utils.max(getLabelsPixel(result));
}

function getLabelsPixel(result, pixel) {
	return result.map(function(label) {
		return utils.measure(label).width + (pixel || 15);
	});
}

function legendLineHeight(pixel, width) {
	return (Math.floor(pixel / width) + 1) * 25;
}

function legendPixelSize(result, orient) {
	if(orient === 'left' || orient === 'right') {
		return utils.max(result) || 0;
	}
	return utils.sum(result);
}


function matrixLeft(width, height, tickPixelList, lgdPixelList) {
	var topTicks = tickPixelList[0];
	var rhtTicks = tickPixelList[1];
	var btmTicks = tickPixelList[2];
	var lftTicks = tickPixelList[3];

	var topTicksFirst = topTicks[0] || 0;
	var topTicksLast = topTicks[topTicks.length - 1] || 0;

	var btmTicksFirst = btmTicks[0] || 0;
	var btmTicksLast = btmTicks[btmTicks.length - 1] || 0;

	var lftTicksMax = utils.max(lftTicks) || 15;
	var rhtTicksMax = utils.max(rhtTicks) || 15;

	var lps = utils.max(lgdPixelList);

	var LEFT_DEGRESS  = 0;
	var LEFT_VALUE  = utils.max([lftTicksMax + lps, topTicksFirst * 0.5, btmTicksFirst * 0.5]);
	var RIGHT_DEGRESS  = 0;
	var RIGHT_VALUE = utils.max([rhtTicksMax, topTicksLast * 0.5, btmTicksLast * 0.5]);

	var topMeanValue = topTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / topTicks.length : 5;
	var btmMeanValue = btmTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / btmTicks.length : 5;

	var layoutTop = getXLabelPixel(topTicks, topMeanValue, LEFT_VALUE);
	var layoutBtm = getXLabelPixel(btmTicks, btmMeanValue, LEFT_VALUE);

	var TOP_DEGRESS  = layoutTop.deg;
	var TOP_VALUE  = layoutTop.value;
	var BOTTOM_DEGRESS  = layoutBtm.deg;
	var BOTTOM_VALUE = layoutBtm.value;

	return {
		LEFT_DEGRESS: LEFT_DEGRESS,
		LEFT_VALUE: LEFT_VALUE + 5,
		RIGHT_DEGRESS: RIGHT_DEGRESS,
		RIGHT_VALUE: RIGHT_VALUE,
		TOP_DEGRESS: TOP_DEGRESS,
		TOP_VALUE: TOP_VALUE,
		BOTTOM_DEGRESS: BOTTOM_DEGRESS,
		BOTTOM_VALUE: BOTTOM_VALUE + 15
	};
}

function matrixRight(width, height, tickPixelList, lgdPixelList) {
	var topTicks = tickPixelList[0];
	var rhtTicks = tickPixelList[1];
	var btmTicks = tickPixelList[2];
	var lftTicks = tickPixelList[3];

	var topTicksFirst = topTicks[0] || 0;
	var topTicksLast = topTicks[topTicks.length - 1] || 0;

	var btmTicksFirst = btmTicks[0] || 0;
	var btmTicksLast = btmTicks[btmTicks.length - 1] || 0;

	var lftTicksMax = utils.max(lftTicks) || 15;
	var rhtTicksMax = utils.max(rhtTicks) || 15;

	var lps = utils.max(lgdPixelList);

	var LEFT_DEGRESS  = 0;		
	var LEFT_VALUE  = utils.max([lftTicksMax, topTicksFirst * 0.5, btmTicksFirst * 0.5]);
	var RIGHT_DEGRESS  = 0;
	var RIGHT_VALUE = utils.max([rhtTicksMax + lps, topTicksLast * 0.5, btmTicksLast * 0.5]);

	var topMeanValue = topTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / topTicks.length : 5;
	var btmMeanValue = btmTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / btmTicks.length : 5;

	var layoutTop = getXLabelPixel(topTicks, topMeanValue, LEFT_VALUE);
	var layoutBtm = getXLabelPixel(btmTicks, btmMeanValue, LEFT_VALUE);

	var TOP_DEGRESS  = layoutTop.deg;
	var TOP_VALUE  = layoutTop.value;
	var BOTTOM_DEGRESS  = layoutBtm.deg;
	var BOTTOM_VALUE = layoutBtm.value;
	return {
		LEFT_DEGRESS: LEFT_DEGRESS,
		LEFT_VALUE: LEFT_VALUE + 5,
		RIGHT_DEGRESS: RIGHT_DEGRESS,
		RIGHT_VALUE: RIGHT_VALUE,
		TOP_DEGRESS: TOP_DEGRESS,
		TOP_VALUE: TOP_VALUE,
		BOTTOM_DEGRESS: BOTTOM_DEGRESS,
		BOTTOM_VALUE: BOTTOM_VALUE + 15
	};
}

function matrixTop(width, height, tickPixelList, lgdPixelList) {
	var topTicks = tickPixelList[0];
	var rhtTicks = tickPixelList[1];
	var btmTicks = tickPixelList[2];
	var lftTicks = tickPixelList[3];

	var topTicksFirst = topTicks[0] || 0;
	var topTicksLast = topTicks[topTicks.length - 1] || 0;

	var btmTicksFirst = btmTicks[0] || 0;
	var btmTicksLast = btmTicks[btmTicks.length - 1] || 0;

	var lftTicksMax = utils.max(lftTicks) || 15;
	var rhtTicksMax = utils.max(rhtTicks) || 15;

	var lps = utils.sum(lgdPixelList);

	var LEFT_DEGRESS  = 0;		
	var LEFT_VALUE  = utils.max([lftTicksMax, topTicksFirst * 0.5, btmTicksFirst * 0.5]);
	var RIGHT_DEGRESS  = 0;
	var RIGHT_VALUE = utils.max([rhtTicksMax, topTicksLast * 0.5, btmTicksLast * 0.5]);

	var tlh = legendLineHeight(lps, width - LEFT_VALUE - RIGHT_VALUE);

	var topMeanValue = topTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / topTicks.length : 5;
	var btmMeanValue = btmTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / btmTicks.length : 5;

	var layoutTop = getXLabelPixel(topTicks, topMeanValue, LEFT_VALUE);
	var layoutBtm = getXLabelPixel(btmTicks, btmMeanValue, LEFT_VALUE);

	var TOP_DEGRESS  = layoutTop.deg;
	var TOP_VALUE  = layoutTop.value;
	var BOTTOM_DEGRESS  = layoutBtm.deg;
	var BOTTOM_VALUE = layoutBtm.value;
	return {
		LEFT_DEGRESS: LEFT_DEGRESS,
		LEFT_VALUE: LEFT_VALUE  + 5,
		RIGHT_DEGRESS: RIGHT_DEGRESS,
		RIGHT_VALUE: RIGHT_VALUE,
		TOP_DEGRESS: TOP_DEGRESS,
		TOP_VALUE: TOP_VALUE,
		BOTTOM_DEGRESS: BOTTOM_DEGRESS,
		BOTTOM_VALUE: BOTTOM_VALUE + 15
	};
}

function matrixBtm(width, height, tickPixelList, lgdPixelList) {
	var topTicks = tickPixelList[0];
	var rhtTicks = tickPixelList[1];
	var btmTicks = tickPixelList[2];
	var lftTicks = tickPixelList[3];

	var topTicksFirst = topTicks[0] || 0;
	var topTicksLast = topTicks[topTicks.length - 1] || 0;

	var btmTicksFirst = btmTicks[0] || 0;
	var btmTicksLast = btmTicks[btmTicks.length - 1] || 0;

	var lftTicksMax = utils.max(lftTicks) || 15;
	var rhtTicksMax = utils.max(rhtTicks) || 15;

	var lps = utils.sum(lgdPixelList);

	var LEFT_DEGRESS  = 0;
	var LEFT_VALUE  = utils.max([lftTicksMax, topTicksFirst * 0.5, btmTicksFirst * 0.5]);
	var RIGHT_DEGRESS  = 0;
	var RIGHT_VALUE = utils.max([rhtTicksMax, topTicksLast * 0.5, btmTicksLast * 0.5]);

	var tlh = legendLineHeight(lps, width - LEFT_VALUE - RIGHT_VALUE);

	var topMeanValue = topTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / topTicks.length : 5;
	var btmMeanValue = btmTicks.length ? (width - LEFT_VALUE - RIGHT_VALUE) / btmTicks.length : 5;

	var layoutTop = getXLabelPixel(topTicks, topMeanValue, LEFT_VALUE);
	var layoutBtm = getXLabelPixel(btmTicks, btmMeanValue, LEFT_VALUE);

	var TOP_DEGRESS  = layoutTop.deg;
	var TOP_VALUE  = layoutTop.value;
	var BOTTOM_DEGRESS  = layoutBtm.deg;
	var BOTTOM_VALUE = layoutBtm.value;

	return {
		LEFT_DEGRESS: LEFT_DEGRESS,
		LEFT_VALUE: LEFT_VALUE + 5,
		RIGHT_DEGRESS: RIGHT_DEGRESS,
		RIGHT_VALUE: /*layoutBtm.deg === -45 ? 15 : */RIGHT_VALUE,
		TOP_DEGRESS: TOP_DEGRESS,
		TOP_VALUE: TOP_VALUE,
		BOTTOM_DEGRESS: BOTTOM_DEGRESS,
		BOTTOM_VALUE: BOTTOM_VALUE + (layoutBtm.deg === -45 ? 15 : 0)
	};
}
function matrix(width, height, domain, legend) {
	var lgdPixelList  = getLabelsPixel(legend.labels || []);
	var tickPixelList = domain.map(function(result) {
		return getLabelsPixel(result || []);
	});


	
	if(legend.orient === 'left') {
		return matrixLeft(width, height, tickPixelList, lgdPixelList);
	} else if(legend.orient === 'right') {
		return matrixRight(width, height, tickPixelList, lgdPixelList);
	} else if(legend.orient === 'top') {
		return matrixTop(width, height, tickPixelList, lgdPixelList);
	}
	return matrixBtm(width, height, tickPixelList, lgdPixelList);
}

/**
 * Export `matrix`
 */
module.exports = matrix;
},{"./utils":8}],7:[function(require,module,exports){
'use strict';

function defineProperty(scope, name, watchers) {
	var value = scope[name];

	var getter = function() {
		return value;
	};

	var setter = function(newValue) {
		var oldValue = value;
		value = newValue;
		if(newValue !== oldValue) {
			watchers.forEach(function(watch) {
				watch.call(scope, newValue, oldValue);
			});
		}
	};

	try{
		Object.defineProperty(scope, name, {
			set: setter,
			get: getter
		});
	} catch(error) {}
}

function observer() {
	this.$$watchers = {};
}

observer.prototype.$watch = function(name, cb) {
	if(!this.$$watchers.hasOwnProperty(name)) {
		this.$$watchers[name] = [];
		defineProperty(this, name, this.$$watchers[name]);
	}

	this.$$watchers[name].push(cb);
};

/**
 * Export `observer`
 */
module.exports = observer;
},{}],8:[function(require,module,exports){
'use strict';

var version = "0.0.1";

/**
 *不重复ID
 * @public	 
 * @method uid
 * @returns {String}
 */	
var guid = (function () {
		var u = Date.now();
		return function () {
			return (u++).toString(16);
		};
	})();

/**
 * Canvas文本
 * @public
 * @method measure
 * @param {String} label
 * @param {String} [font]
 * @returns {Object}
 */
var measure = (function() {
		try{
			var canvas = document.createElement("canvas");
			canvas.width = 1;
			canvas.height = 1;
			return function (label, font) {
				var context = canvas.getContext("2d");
				context.font = font || '12px Arial';
				return context.measureText(label);
			};
		} catch(e) {
			return function() {
				return 0;
			};
		}
	})();

/**
 * 转化数字
 * @public
 * @method number
 * @param {String} x
 * @returns {Number}
 */
function number(x) {
	return x === null ? NaN : +x;
}

/**
 * 是否为数字
 * @public
 * @method number
 * @param {String} value
 * @returns {Boolean}
 */
function isNumber(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * 升序
 * @public
 * @method ascending
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function ascending(a, b) {
	return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/**
 * 二等分
 * @public
 * @method bisect
 * @param {Array} a
 * @param {Number} x
 * @param {Number} lo
 * @param {Number} hi
 * @returns {Number}
 */
function bisect(a, x, lo, hi) {
	if (arguments.length < 3) {
		lo = 0;
	}
	if (arguments.length < 4) {
		hi = a.length;
	}
	while (lo < hi) {
		var mid = lo + hi >>> 1;

		if (ascending(a[mid], x) > 0) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	return lo;
}

/**
 * 遍历对象或数组
 * @public
 * @param {Array | Object} object
 * @param {Function} callback
 * @returns {Array | Object}
 */
function each(object, callback) {
	var length,
	key,
	i,
	value;

	if (object) {
		length = object.length;
		if (length === undefined) {
			for (key in object) {
				if (object.hasOwnProperty(key)) {
					value = object[key];
					if (callback.call(value, value, key) === false) {
						break;
					}
				}
			}
		} else {
			for (i = 0; i < length; i++) {
				value = object[i];
				if (callback.call(value, value, i) === false) {
					break;
				}
			}
		}
	}
	return object;
}

/**
 * 数值区间 [min, max]
 * @public
 * @method extent
 * @param {Array} array
 * @param {function} cb
 * @returns {Array}
 */
function extent(array, cb) {
	var i = -1,
	n = array.length,
	a,
	b,
	c;

	if (cb == null) {
		while (++i < n) {
			if ((b = array[i]) != null && b >= b) {
				a = c = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = array[i]) != null) {
				if(a > b) {
					a = b;
				}

				if(c < b) {
					c = b;
				}
			}
		}				
	} else {
		while (++i < n) {
			if ((b = cb(array[i], i, array)) != null && b >= b) {
				a = c = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = cb(array[i], i, array)) != null) {
				if(a > b) {
					a = b;
				}

				if(c < b) {
					c = b;
				}
			}
		}
	}

	return [a, c];
}

/**
 * 数据堆叠
 * @public
 * @method stack
 * @param {Array} array
 * @param {Function} callback
 * @returns {Array}
 */
function stack(array, callback) {
	var result = [0];
	var size = array.length;
	for(var i = 1; i < size; i++) {
		var previous = array[i - 1];
		var current = array[i];
		result.push(callback(previous, current) + result[result.length - 1]);
	}
	return result;
}

/**
 * 定义常量
 * @public
 * @method constant
 * @param {Object} x
 * @returns {function}
 */
function constant(x) {
	return function () {
		return x;
	};
}

/**
 * 求最大值
 * @public
 * @method max
 * @param {Array} array
 * @param {function} [f]
 * @returns {Number}
 */
function max(array, f) {
	var i = -1,
	n = array.length,
	a,
	b;

	if (f == null) {
		while (++i < n) {
			if ((b = array[i]) != null && b >= b) {
				a = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = array[i]) != null && b > a) {
				a = b;
			}
		}
			
	} else {
		while (++i < n) {
			if ((b = f(array[i], i, array)) != null && b >= b) {
				a = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = f(array[i], i, array)) != null && b > a) {
				a = b;
			}
		}				
	}

	return a;
}

/**
 * 求最小值
 * @public
 * @method min
 * @param {Array} array
 * @param {function} [f]
 * @returns {Number}
 */
function min(array, f) {
	var i = -1,
	n = array.length,
	a,
	b;

	if (f == null) {
		while (++i < n) {
			if ((b = array[i]) != null && b >= b) {
				a = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = array[i]) != null && a > b) {
				a = b;
			}
		}
			
	} else {
		while (++i < n) {
			if ((b = f(array[i], i, array)) != null && b >= b) {
				a = b;
				break;
			}
		}
			
		while (++i < n) {
			if ((b = f(array[i], i, array)) != null && a > b) {
				a = b;
			}
		}				
	}

	return a;
}

/**
 * 多数组合并
 * @public
 * @method merge
 * @param {Array} arrays
 * @returns {Number}
 */
function merge(arrays) {
	var n = arrays.length,
	m,
	i = -1,
	j = 0,
	merged,
	array;

	while (++i < n) {
		j += arrays[i].length;
	}
		
	merged = new Array(j);

	while (--n >= 0) {			
		array = arrays[n];
		m = array.length;
		while (--m >= 0) {
			merged[--j] = array[m];
		}
	}

	return merged;
}

/**
 * 求平均数
 * @public
 * @method mean
 * @param {Array} array
 * @param {function} [f]
 * @returns {Number}
 */
function mean(array, f) {
	var s = 0,
	n = array.length,
	a,
	i = -1,
	j = n;

	if (f == null) {
		while (++i < n) {
			if (!isNaN(a = number(array[i]))) {
				s += a;
			} else {
				--j;
			}				
		}
			
	} else {
		while (++i < n) {
			if (!isNaN(a = number(f(array[i], i, array)))) {
				s += a;					
			} else {
				--j;
			}
		}
	}

	if (j) {
		return s / j;
	}
}

/**
 * 洗牌
 * @public
 * @method shuffle
 * @param {Array} array
 * @param {Number} [i0] 默认是0
 * @param {Number} [i1] 默认是数组长度
 * @returns {Array}
 */
function shuffle(array, i0, i1) {
	var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	t,
	i;
	while (m) {
		i = Math.random() * m-- | 0;
		t = array[m + i0];
		array[m + i0] = array[i + i0];
		array[i + i0] = t;
	}

	return array;
}

/**
 * 求和
 * @public
 * @method sum
 * @param {Array} array
 * @param {function} [f]
 * @returns {Number}
 */
function sum(array, f) {
	var s = 0,
	n = array.length,
	a,
	i = -1;

	if (f == null) {
		while (++i < n) {
			if (a = +array[i]) {
				s += a;
			}
		}
	} else {
		while (++i < n) {
			if (a = +f(array[i], i, array)) {
				s += a;
			}
		}
	}

	return +s.toFixed(10);
}

/**
 * 获取对象的键名
 * @public
 * @method values
 * @param {Object} map
 * @returns {Array}
 */
function keys(map) {
	var keys = [];
	for (var key in map) {
		keys.push(key);
	}
	return keys;
}

/**
 * 获取对象的值
 * @public
 * @method values
 * @param {Object} map
 * @returns {Array}
 */
function values(map) {
	var values = [];
	for (var key in map) {
		values.push(map[key]);
	}
	return values;
}

/**
 * 对象转化成数组
 * @public
 * @method entries
 * @param {Object} map
 * @returns {Array}
 */
function entries(map) {
	var result = [];
	for (var key in map) {
		result.push({
			key : key,
			value : map[key]
		});
	}			
	return result;
}

/**
 * 创建指定范围的随机数
 * @public
 * @method uniform
 * @param {Number} min
 * @param {Number} max
 * @returns {Function}
 */
function uniform(min, max) {
	min = min == null ? 0 : +min;
	max = max == null ? 1 : +max;
	if (arguments.length === 1) {
		max = min, min = 0;
	} else {
		max -= min;
	}
	return function () {
		return Math.random() * (max - min) + min;
	};
}

/**
 * 求多边形中心点
 * @public
 * @method centroid
 * @param {Array} polygon
 * @returns {Array}
 */
function centroid(polygon) {
	var i = -1,
	n = polygon.length,
	x = 0,
	y = 0,
	a,
	b = polygon[n - 1],
	c,
	k = 0;
	while (++i < n) {
		a = b;
		b = polygon[i];
		k += c = a[0] * b[1] - b[0] * a[1];
		x += (a[0] + b[0]) * c;
		y += (a[1] + b[1]) * c;
	}

	return k *= 3, [x / k, y / k];
}

/**
 * 判断某个点是否在多边形中
 * @public
 * @method range
 * @param {Array} polygon
 * @param {Array} point
 * @returns {boolean}
 */
function contains(polygon, point) {
	var n = polygon.length,
	p = polygon[n - 1],
	x = point[0],
	y = point[1],
	x0 = p[0],
	y0 = p[1],
	x1,
	y1,
	inside = false;

	for (var i = 0; i < n; ++i) {
		p = polygon[i],
		x1 = p[0],
		y1 = p[1];
		if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) {
			inside = !inside;
		}
		x0 = x1,
		y0 = y1;
	}

	return inside;
}

/**
 * 创建数据单元
 * @public
 * @method range
 * @param {Number} start 数组元素的最小值
 * @param {Number} stop 数组元素的最大值
 * @param {Number} [step] 默认是1
 * @returns {Array}
 */
function range(start, stop, step) {
	start = +start,
	stop = +stop,
	step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

	var i = -1,
	n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	range = new Array(n);
	while (++i < n) {
		range[i] = +(start + i * step).toFixed(10);
	}

	return range;
}

var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

/**
 * 求刻度区间
 * @public
 * @method ticks
 * @param {Number} start
 * @param {Number} stop
 * @param {Number} [count] 默认为 5
 * @returns {Array}
 */
function ticks(start, stop, count) {
	var step = tickStep(start, stop, count || 5);
	var result = range(
		Math.ceil(start / step) * step,
		Math.floor(stop / step) * step + step / 2,
		step);

	var first = result[0];
	var last  = result[result.length - 1];

	if(first > start) {
		result.splice(0, 0, first - step);
	}

	if(last < stop) {
		result.push(last + step);
	}

	return result;
}

/**
 * 步调
 * @private
 * @method tickStep
 * @param {Number} start
 * @param {Number} stop
 * @param {Number} count
 * @returns {Number}
 */
function tickStep(start, stop, count) {
	var step0 = Math.abs(stop - start) / Math.max(0, count),
	step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	error = step0 / step1;
	if (error >= e10) {
		step1 *= 10;
	} else if (error >= e5) {
		step1 *= 5;
	} else if (error >= e2) {
		step1 *= 2;
	}
	return stop < start ? -step1 : step1;
}

function _ticks(start, stop, count = 5) {
	var step0 = Math.floor(Math.log(stop - start) / Math.log(10));
	var unit = Math.pow(10, step0);

	var min = Math.floor(start / unit) * unit;
	var max = Math.ceil(stop / unit) * unit;

	var step = (max - min) / (count - 1);

	if(unit === 1 && step > 1 && Math.ceil(step) !== step) {
		step = Math.ceil(step);
		max = min + step * (count - 1);
	}

	if(min < 0 && max > 0) {
		min = Math.floor(min / step) * step;
		max = Math.floor(max / step) * step;
	}

	var count = Math.floor(Math.log(step) / Math.log(10));	
	
	var result = [];

	for(var i = min; min < max ? i <= max : i >= max; i += step) {
		if(step < 1) {
			result.push(parseFloat(i.toFixed(1 - count)));
		} else {
			result.push(i);
		}
	}

	return result
}

/**
 * 线性比例
 * @public
 * @method linear
 * @param {Array} domain
 * @returns {linear}
 */
function linear(domain) {
	var buffer = ticks.apply(this, domain);
	var size = buffer.length;
	var start = buffer[0];
	var stop = buffer[size - 1];
	var range = [1, 0];

	/**
	 * @public
	 * @method linear
	 * @param {Number} x
	 * @returns {Number}
	 */
	function linear(x) {
		return Math.floor(range[0] - (x - start) / (stop - start) * (range[0] - range[1]));
	}

	/**
	 * @public
	 * @method range
	 * @param {Array} x
	 * @returns {linear}
	 */
	linear.range = function(x) {
		return x ? (range = x, linear) : range;
	};

	/**
	 * @public
	 * @method ticks
	 * @returns {Array}
	 */
	linear.ticks = function() {
		return buffer;
	};
	
	return linear;
}

/**
 * 离散比例
 * @public
 * @method ordinal
 * @param {Array} domain
 * @param {Number} rangeBand [0-1]
 * @returns {ordinal}
 */
function ordinal(domain, rangeBand) {
	var size = domain.length;
	var start = domain[0];
	var stop = domain[size - 1];
	var range = [1, 0];

	rangeBand = rangeBand || 0;

	var buffer = {};

	domain.forEach(function(tick, index) {
		buffer[tick] = index;
	});
	
	/**
	 * @public
	 * @method ordinal
	 * @param {String} x
	 * @returns {Number}
	 */
	function ordinal(x) {
		var n = rangeBand ? 0 : 1;
		var width = (range[1] - range[0]) / (size - n);
		return rangeBand ? Math.floor(range[0] + width * buffer[x] + width * 0.5) : Math.floor(range[0] + width * buffer[x]);
	}

	/**
	 * @public
	 * @method rangeBand
	 * @returns {Number}
	 */
	ordinal.rangeBand = function() {
		var width =  (1 - rangeBand * 2) / size * (range[1] - range[0]);
		return rangeBand ? Math.floor(width) : 0;
	};

	/**
	 * @public
	 * @method range
	 * @param {Array} x
	 * @returns {ordinal}
	 */
	ordinal.range = function(x) {
		return x ? (range = x, ordinal) : range;
	};

	/**
	 * @public
	 * @method ticks
	 * @returns {Array}
	 */
	ordinal.ticks = function() {
		return domain;
	};
	
	return ordinal;
}

var TIME_STEPS = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];

/**
 * @public
 * @method interval
 * @param {Function} local
 * @param {Function} step
 * @param {Function} number
 * @returns {local}
 */
function interval(local, step, number) {

	function round(date) {
		var d0 = local(date),
		d1 = offset(d0, 1);
		return date - d0 < d1 - date ? d0 : d1;
	}

	function ceil(date) {
		step(date = local(new Date(date - 1)), 1);
		return date;
	}

	function offset(date, k) {
		step(date = new Date(+date), k);
		return date;
	}

	function range(t0, t1, dt) {
		var time = ceil(t0),
		times = [];
		if (dt > 1) {
			while (time < t1) {
				if (!(number(time) % dt)) {
					times.push(new Date(+time));
				}
				step(time, 1);
			}
		} else {
			while (time < t1) {
				times.push(new Date(+time)),
				step(time, 1);
			}
		}
		return times;
	}

	local.floor = local;
	local.round = round;
	local.ceil = ceil;
	local.offset = offset;
	local.range = range;

	return local;
}

var TIME_LIST = (() => {
	var time = {};

	time.second = interval((date) => {
		return new Date(Math.floor(date / 1e3) * 1e3);
	}, (date, offset) => {
		date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	}, (date) => {
		return date.getSeconds();
	});

	time.minute = interval((date) => {
		return new Date(Math.floor(date / 6e4) * 6e4);
	}, (date, offset) => {
		date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	}, (date) => {
		return date.getMinutes();
	});

	time.hour = interval((date) => {
		var timezone = date.getTimezoneOffset() / 60;
		return new Date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	}, (date, offset) => {
		date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	}, (date) => {
		return date.getHours();
	});

	time.day = interval((date) => {
		var day = new Date(2e3, 0);
		day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
		return day;
	}, (date, offset) => {
		date.setDate(date.getDate() + offset);
	}, (date) => {
		return date.getDate() - 1;
	});

	time.dayOfYear = function (date) {
		var year = time.year(date);
		return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	};

	[ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ]
	.forEach((day, i) => {
	    i = 7 - i;
	    time[day] = interval((date) => {
	    	(date = time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	    	return date;
	    }, (date, offset) => {
	    	date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, (date) => {
	    	var day = time.year(date).getDay();
	    	return Math.floor((time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });

		time[day + "OfYear"] = function(date) {
			var day = time.year(date).getDay();
			return Math.floor((time.dayOfYear(date) + (day + i) % 7) / 7);
		};
	});

	time.week = time.sunday;

	time.month = interval((date) => {
		date = time.day(date);
		date.setDate(1);
		return date;
	}, (date, offset) => {
		date.setMonth(date.getMonth() + offset);
	}, (date) => {
		return date.getMonth();
	});

	time.year = interval((date) => {
		date = time.day(date);
		date.setMonth(0, 1);
		return date;
	}, (date, offset) => {
		date.setFullYear(date.getFullYear() + offset);
	}, (date) => {
		return date.getFullYear();
	});

	return [[time.second, 1], [time.second, 5], [time.second, 15], [time.second, 30], [time.minute, 1], [time.minute, 5], [time.minute, 15], [time.minute, 30], [time.hour, 1], [time.hour, 3], [time.hour, 6],	[time.hour, 12], [time.day, 1],	[time.day, 2], [time.week, 1], [time.month, 1], [time.month, 3], [time.year, 1]];
})();

function scaleDate(t) {
	return new Date(t);
}

function identity(d) {
	return d;
}

var scaleMilliseconds = {
	range : function (start, stop, step) {
		return d3.range(Math.ceil(start / step) * step, +stop, step).map(scaleDate);
	},
	floor : identity,
	ceil : identity
};

function tickMethod(extent, count) {
	var span = extent[1] - extent[0];
	var target = span / count;
	var i = bisect(TIME_STEPS, target);
	var interval;
	var step;
	if(i === TIME_LIST.length) {
		interval = methods.year;
		step = range(extent.map(function(d) {
			return d / 31536e6;
		}), count)[2];
	} else if(!i) {
		interval = scaleMilliseconds;
		step = range(extent, count)[2];
	} else {
		var index = target / TIME_STEPS[i - 1] < TIME_STEPS[i] / target ? i - 1 : i;
		var method = TIME_LIST[index];
		interval = method[0];
		step = method[1];
	}

	return interval.range(extent[0], new Date(extent[1] + 1), step);
}

/**
 * 时间比例
 * @public
 * @method time
 * @param {Array} domain
 * @returns {ordinal}
 */
function time(domain) {
	var buffer = tickMethod(domain, 5).map(function(d) {
		return new Date(d).getTime();
	});
	var range = [1, 0];
	
	function timer(x) {
		return Math.floor(range[0] - ((new Date(x)).getTime() - domain[0]) / (domain[1] - domain[0]) * (range[0] - range[1]));
	}
	/**
	 * @public
	 * @method range
	 * @param {Array} x
	 * @returns {timer}
	 */
	timer.range = function(x) {
		return x ? (range = x, timer) : range;
	};

	/**
	 * @public
	 * @method ticks
	 * @returns {Array}
	 */
	timer.ticks = function() {
		return buffer;
	};

	return timer;
}

exports.version  = version;
exports.guid     = guid;
exports.measure  = measure;
exports.each     = each;
exports.number   = number;
exports.isNumber = isNumber;
exports.extent   = extent;
exports.min      = min;
exports.max      = max;
exports.sum      = sum;
exports.range    = range;
exports.stack    = stack;
exports.contains = contains;
exports.centroid = centroid;
exports.uniform  = uniform;
exports.entries  = entries;
exports.keys     = keys;
exports.values   = values;
exports.shuffle  = shuffle;
exports.constant = constant;
exports.linear   = linear;
exports.time     = time;
exports.ordinal  = ordinal;
},{}],9:[function(require,module,exports){
'use strict';

/**
 * 比例尺刻度
 * @public	 
 * @method d3SvgAxisNodes
 * @param {Document} context
 * @param {Array} data [{x: number, y: number, value: number, tick: string}, ...]
 * @param {String} orient `left|right|top|bottom`
 * @param {String} label 坐标刻度说明
 * @returns {void}
 */	
function d3SvgAxisNodes(context, data, orient, label) {
	var axis = context.selectAll('g.axis-'+ orient).data([orient]);
	axis.enter().append('g').attr('class', 'axis axis-' + orient);
	axis.exit().remove();

	var items = axis.selectAll('text').data(data);
	items.enter().append('text')
	.attr('x', function(d) {
		return d.x;
	}).attr('y', function(d) {
		return d.y;
	});
	
	items
	.attr('class', function(d) {
		return d.hasOwnProperty('value') ? (d.value >= 0 ? 'tick-plus' : 'tick-minus') : 'tick-nums';
	})
	.style('text-anchor', function(d) {
		return d.anchor;
	}).text(function(d) {
		return d.tick;
	}).attr('transform', function(d) {
		return 'translate('+ d.translate +')rotate('+ d.rotate +')';
	});

	items.exit().remove();
}

/**
 * Export `d3SvgAxisNodes`
 */
module.exports = d3SvgAxisNodes;
},{}],10:[function(require,module,exports){
'use strict';

const TEXT_POINTS = [
	{x: 0, y: -5, 'align': 'middle'}, 
	{x: 8, y: 5, 'align': 'start'}, 
	{x: 0, y: 15, 'align': 'middle'}, 
	{x: -8, y: 5, 'align': 'end'}
];

function TipsPathData(size) {
	if(!size) {
		return [];
	}
	return [
		'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',-21L-'+ (size / 2) +',-21Z',
		'M0,0L 3,3L3,10L'+ (size + 3) +',10L'+ (size + 3) +',-10L3,-10L3,-3Z',
		'M-'+(size / 2) +',0L'+ (size / 2) +',0L'+ (size / 2) +',21L-'+ (size / 2) +',21Z',
		'M0,0L-3,-3L-3,-10L-'+(size + 3)+',-10L-'+(size + 3)+',10L-3,10L-3,3Z'
	];
}

/**
 * 刻度提示
 * @public	 
 * @method d3SvgAxisTips
 * @param {Document} context
 * @param {Array} data [{x: number, y: number, align: 'start|middle|end ', label: string}, ...]
 * @returns {void}
 */	
function d3SvgAxisTips(context, data) {
	var tips = context.selectAll('g.tips-value').data(['tips-value']);
	tips.enter().append('g').attr('class', (d) => d);

	tips.exit().remove();

	var items = tips.selectAll('path').data(data);

	items.enter().append('path');


	items.attr('d', function(d, i) {
		return TipsPathData(d.size)[i];
	}).attr('transform', function(d) {
		return 'translate('+ d.x +','+ d.y +')';
	});

	items.exit().remove();

	var text = tips.selectAll('text').data(data);

	text.enter().append('text').attr('x', function(d, i) {
		return TEXT_POINTS[i].x;
	}).attr('y', function(d, i) {
		return TEXT_POINTS[i].y;
	})
	.style('text-anchor', (d, i) => TEXT_POINTS[i].align);

	text.text((d) => d.value).attr('transform', function(d) {
		return 'translate('+ d.x +','+ d.y +')';
	});

	text.exit().remove();
}

/**
 * Export `d3SvgAxisTips`
 */
module.exports = d3SvgAxisTips;
},{}],11:[function(require,module,exports){
'use strict';

/**
 * 图形说明
 * @public	 
 * @method d3SvgDesc
 * @param {Document} context
 * @param {String} desc
 * @returns {void}
 */
function d3SvgDesc(context, desc) {
	var describe = context.selectAll('desc.svg-desc').data([desc]);

	describe.enter().append('desc').attr('class', 'svg-desc').text((d) => d);

	describe.exit().remove();
}

/**
 * Export `d3SvgDesc`
 */
module.exports = d3SvgDesc;
},{}],12:[function(require,module,exports){
'use strict';

function gridLineData(scaleX, scaleY) {
	var rangeX = scaleX.range();
	var ticksX = scaleX.ticks();

	var rangeY = scaleY.range();
	var ticksY = scaleY.ticks();

	var result = [];

	if(Math.floor(scaleX(ticksX[0])) !== Math.floor(rangeX[0])) {
		result.push({
			x: Math.floor(rangeX[0]) + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	}

	ticksX.forEach(function(d) {
		result.push({
			x: scaleX(d) + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	});

	if(Math.floor(scaleX(ticksX[ticksX.length - 1])) !== Math.floor(rangeX[1])) {
		result.push({
			x: rangeX[1] + 0.5,
			y: 0,
			y1: rangeY[0],
			y2: rangeY[1]
		});
	}

	ticksY.forEach(function(d, i) {
		result.push({
			x: rangeX[0] - 1,
			y: scaleY(d) + 0.5,
			x1: 0,
			x2: rangeX[1] - rangeX[0] + 2,
			style: d === 0 ? 'graph-zero' : '' 
		});
	});

	return result;
}

/**
 * 图形网络线
 * @public	 
 * @method d3SvgGridLine
 * @param {Document} context
 * @param {Function} scaleX
 * @param {Function} scaleY 
 * @returns {void}
 */	
function d3SvgGridLine(context, scaleX, scaleY, ticksX) {
	var data = gridLineData(scaleX, scaleY);

	var grid = context.selectAll('g.grid-line').data(['grid-line']);

	grid.enter().append('g').attr('class', (d) => d);

	grid.exit().remove();

	var items = grid.selectAll('line').data(data);

	items.enter().append('line');

	items.attr('x1', (d) => d.x1)
	.attr('x2', (d) => d.x2)
	.attr('y1', (d) => d.y1)
	.attr('y2', (d) => d.y2)
	.attr('class', (d) => d.style)
	.attr('transform', (d) => 'translate('+ d.x +', '+ d.y +')');

	items.exit().remove();

	return grid;
}

/**
 * Export `d3SvgGridLine`
 */
module.exports = d3SvgGridLine;
},{}],13:[function(require,module,exports){
'use strict';

/**
 * 鼠标Hover事件
 * @public	 
 * @method d3SvgHover
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgHover(context, x, y, width, height) {	
	var rect = context.selectAll('rect.graph-hover').data(['graph-hover']);

	rect.enter().append('rect').attr('class', (d) => d)/*.on('mousemove', function(){}).on('mouseout', function(){})*/;

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ x +','+ y +')';
	});

	rect.exit().remove();

	return rect;
}
/**
 * Export `d3SvgHover`
 */
module.exports = d3SvgHover;
},{}],14:[function(require,module,exports){
'use strict';

/**
 * 图形遮罩层
 * @public	 
 * @method d3SvgMask
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgMask(context, id, x, y, width, height) {
	var defs = context.selectAll('defs').data(['defs']);
	defs.enter().append('defs');
	defs.exit().remove();

	var mask = defs.selectAll('clipPath#'+ id).data([id]);
	mask.enter().append('clipPath').attr('id', id);
	mask.exit().remove();

	var rect = mask.selectAll('rect.'+ id).data([id]);
	rect.enter().append('rect').attr('class', id);

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ x +','+ y +')';
	});

	rect.exit().remove();
}

/**
 * Export `d3SvgMask`
 */
module.exports = d3SvgMask;
},{}],15:[function(require,module,exports){
'use strict';

/**
 * 图形说明
 * @public	 
 * @method d3SvgMessage
 * @param {Document} context
 * @param {String} desc
 * @returns {void}
 */
function d3SvgMessage(context, desc) {
	var message = context.selectAll('text.svg-message').data([desc]);

	message.enter().append('text').attr('class', 'svg-message').attr('text-anchor', 'middle');

	message.attr('x', function(d) {
		return d.x;
	}).attr('y', function(d) {
		return d.y;
	}).text((d) => d.label);

	message.exit().remove();
}

/**
 * Export `d3SvgMessage`
 */
module.exports = d3SvgMessage;
},{}],16:[function(require,module,exports){
'use strict';

/**
 * SVG画布
 * @public	 
 * @method d3SvgPaint
 * @param {String} id
 * @param {Document} domEl
 * @param {Number} width
 * @param {Number} height
 * @returns {Document:SVG}
 */	
function d3SvgPaint(context, id, width, height) {
	var svg = context.selectAll('svg#svg-'+ id).data(['svg-'+id]);

	svg.enter().append('svg').attr('id', (d) => d).attr('version', '1.1');

	svg.attr('width', width).attr('height', height);

	svg.exit().remove();

	return svg;
}

/**
 * Export `d3SvgPaint`
 */
module.exports = d3SvgPaint;
},{}],17:[function(require,module,exports){
'use strict';

var CLASS_LIST = [
	'cursor-line-vertical', 
	'cursor-line-horizontal'
	];

var CLASS_MAPS = CLASS_LIST.map((d) => 'line.' + d).join(',');

/**
 * PointerEvents
 * @private	 
 * @method d3SvgPointerEvents
 * @param {Document} context
 * @param {Array} data 
 * @returns {void}
 */
function d3SvgPointerEvents(context, data) {
	var pointer = context.selectAll('g.pointer-events').data(['pointer-events']);
	pointer.enter().append('g').attr('class', (d) => d);
	pointer.exit().remove();

	var lines = pointer.selectAll(CLASS_MAPS).data(data);
	lines.enter().append('line').attr('class', (d, i) => {
		return CLASS_LIST[i];
	});

	lines.attr('x1', function(d) {
		return d.x1;
	}).attr('x2', function(d) {
		return d.x2;
	}).attr('y1', function(d) {
		return d.y1;
	}).attr('y2', function(d) {
		return d.y2;
	}).attr('transform', function(d) {
		return 'translate('+ d.x +', '+ d.y +')';
	});
	
	lines.exit().remove();
}

/**
 * Export `d3SvgPointerEvents`
 */
module.exports = d3SvgPointerEvents;
},{}],18:[function(require,module,exports){
'use strict';

/**
 * 鼠标选区
 * @public	 
 * @method d3SvgHover
 * @param {Document} context
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width 
 * @param {Number} height 
 * @returns {void}
 */	
function d3SvgSelection(context, x, y, width, height) {	
	var rect = context.selectAll('rect.graph-selection').data(['graph-selection']);

	rect.enter().append('rect').attr('class', (d) => d);

	rect.attr('width', width)
	.attr('height', height)
	.attr('transform', function(d) {
		return 'translate('+ x +','+ y +')';
	});

	rect.exit().remove();

	return rect;
}
/**
 * Export `d3SvgSelection`
 */
module.exports = d3SvgSelection;
},{}],19:[function(require,module,exports){
'use strict';

var d3WidgetMask = require('./../../widget/d3WidgetMask');
var d3WidgetHover = require('./../../widget/d3WidgetHover');
var d3WidgetPaint = require('./../../widget/d3WidgetPaint');
var d3WidgetLine = require('./../../widget/d3WidgetLine');
var d3WidgetMessage = require('./../../widget/d3WidgetMessage');
var d3WidgetAxisTips = require('./../../widget/d3WidgetAxisTips');
var d3WidgetGridLine = require('./../../widget/d3WidgetGridLine');
var d3WidgetAxisNodes = require('./../../widget/d3WidgetAxisNodes');
var d3WidgetPointerEvents = require('./../../widget/d3WidgetPointerEvents');

class TimeSeries {

	constructor() {

	}

	render() {

	}
}


/**
 * Export `chart.TimeSeries`
 */
module.exports = TimeSeries;
},{"./../../widget/d3WidgetAxisNodes":22,"./../../widget/d3WidgetAxisTips":23,"./../../widget/d3WidgetGridLine":24,"./../../widget/d3WidgetHover":25,"./../../widget/d3WidgetLine":26,"./../../widget/d3WidgetMask":27,"./../../widget/d3WidgetMessage":28,"./../../widget/d3WidgetPaint":29,"./../../widget/d3WidgetPointerEvents":30}],20:[function(require,module,exports){
'use strict';

function d3SvgPath(x, y, defined, smooth) {
	var line = d3.svg.line();
	return line.x(x).y(y).defined(defined).interpolate(smooth ? 'monotone' : false);
}

/**
 * 折线
 * @public	 
 * @method d3SvgLine
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgLine(context, id, data, x, y, defined, smooth) {
	var line = d3SvgPath(x, y, defined, smooth);

	var wrap = context.selectAll('g.graph-content').data(['graph-content']);
	wrap.enter().append('g').style('clip-path', 'url(#'+ id +')').attr('class', (d) => d);

	wrap.exit().remove();

	var items = wrap.selectAll('path.graph-line').data(data);

	items.enter().append('path')
	.attr('class', 'graph-line');

	items
	.attr('d', (d) => {
		return line(d);
	})
	.attr("stroke", (d, i) => {
		return '#ece2f0';
	})
	.attr('fill', () => 'none');

	items.exit().remove();
}

/**
 * Export `d3SvgLine`
 */
module.exports = d3SvgLine;
},{}],21:[function(require,module,exports){
'use strict';

/**
 * 圆点
 * @public	 
 * @method d3SvgPoint
 * @param {Document} context
 * @param {String} id
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Function} defined 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgPoint(context, array) {
	var points = context.selectAll('g.point-hover').data(['point-hover']);
	points.enter().append('g').attr('class', (d) => d);
	points.exit().remove();

	var items = points.selectAll('circle').data(array);
	items.enter().append('circle').attr('r', 2);

	items.attr('cx', (d) => d.x + 0.5).attr('cy',  (d) => d.y);

	items.exit().remove();
}

/**
 * Export `d3SvgPoint`
 */
module.exports = d3SvgPoint;
},{}],22:[function(require,module,exports){
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
			context.call(elements.axis, ticks[i] || [], orient);
		});

		$scope.$watch('resizable', function() {
			ticks = getScaleTicks($scope);
			array.forEach(function(orient, i) {
				context.call(elements.axis, ticks[i] || [], orient);
			});
		});

		$scope.$watch('data', function() {
			ticks = getScaleTicks($scope);
			array.forEach(function(orient, i) {
				context.call(elements.axis, ticks[i] || [], orient);
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
},{"./../elements/d3SvgAxisNodes":9}],23:[function(require,module,exports){
'use strict';

var utils = require('./../core/utils');
var element = require('./../elements/d3SvgAxisTips');
/**
 * d3WidgetPointerEvents
 * @public	 
 * @method d3WidgetPointerEvents
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetPointerEvents($scope) {
	var data = [{
			x: -9999,
			y: $scope.$Layout.TOP_VALUE,
			size: 0,
			value: 0
		},{
			x: $scope.width - $scope.$Layout.RIGHT_VALUE,
			y: -9999,
			size: 0,
			value: 0
		},{
			x: -9999,
			y: $scope.height - $scope.$Layout.BOTTOM_VALUE,
			size:  0,
			value: '9:30'
		},{
			x: $scope.$Layout.LEFT_VALUE,
			y: -9999,
			size: 0,
			value: 0
		}
	];

	//console.log($scope.height,$scope.$Layout.BOTTOM_VALUE)

	return function(context) {
		var TIPS_PIXEL = [
			{index: 0, size: scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE, fixed: scope.$Layout.LEFT_VALUE, value: 0},
			{index: 1, size: scope.height - scope.$Layout.TOP_VALUE - scope.$Layout.BOTTOM_VALUE, fixed: scope.$Layout.TOP_VALUE, value: 1},
			{index: 0, size: scope.width - scope.$Layout.LEFT_VALUE - scope.$Layout.RIGHT_VALUE, fixed: scope.$Layout.LEFT_VALUE, value: 0},
			{index: 1, size: scope.height - scope.$Layout.TOP_VALUE - scope.$Layout.BOTTOM_VALUE, fixed: scope.$Layout.TOP_VALUE, value: 1},
		];
		context.call(element, data);

		$scope.$watch('resizable', function() {

			[$scope.$Layout.TOP_VALUE,
			$scope.width - $scope.$Layout.RIGHT_VALUE,
			$scope.height - $scope.$Layout.BOTTOM_VALUE + 1,
			$scope.$Layout.LEFT_VALUE].forEach(function(v, i) {
				data[i][i % 2 ? 'x' : 'y'] = v;
				data[i][i % 2 ? 'y' : 'x'] = -9999;
			});

			TIPS_PIXEL = [
				{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
				{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
				{index: 0, size: $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE, fixed: $scope.$Layout.LEFT_VALUE, value: 0},
				{index: 1, size: $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE, fixed: $scope.$Layout.TOP_VALUE, value: 1},
			];

			context.call(element, data);
		});
		
		$scope.$watch('tips', function(tips) {
			var result = tips.data || [];

			result.forEach(function(v, i) {
				var mod = i % 2 ? 'y' : 'x';
				data[i][mod] = tips[mod];
				data[i].value = v;
				data[i].size = v ? utils.measure(v).width + 10 : 0;
			});
			context.call(element, data);
		});

		scope.$watch('$EVENT_HOVER', function(mouse) {			
			scope.tips = {
				x: mouse[0],
				y: mouse[1],
				data: scope.$Extents.map(function(extent, index) {
					if(!extent) {
						return null;
					}

					var num = (Math.abs((TIPS_PIXEL[index].value - (mouse[TIPS_PIXEL[index].index] - TIPS_PIXEL[index].fixed) / TIPS_PIXEL[index].size)) * (extent[1] - extent[0]));
					return $scope.$Config[index].data.label(Math.floor((num + extent[0]) * 10) / 10);
				})
			}
		});
	};
}

/**
 * Export `d3WidgetPointerEvents`
 */
module.exports = d3WidgetPointerEvents;
},{"./../core/utils":8,"./../elements/d3SvgAxisTips":10}],24:[function(require,module,exports){
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

		$scope.$watch('resizable', function() {
			context.call(element, scaleX(), scaleY());
		});

		$scope.$watch('data', function() {
			context.call(element, scaleX(), scaleY());
		});
	};
}

/**
 * Export `d3WidgetGridLine`
 */
module.exports = d3WidgetGridLine;
},{"./../elements/d3SvgGridLine":12}],25:[function(require,module,exports){
'use strict';
var utils   = require('./../core/utils');
var handler = require('./../core/handler');
var element = require('./../elements/d3SvgHover');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetHover($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	return function(context) {
		var guid;
		context.call(element, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height)
		.select('rect.graph-hover')
		/*.on('mousedown', function() {
			var mouse = d3.mouse(this);
			$scope.$EventIsSelection = true;
			$scope.$EventSelectionStart = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
		})*/
		.on('mousemove', function() {
			var mouse = d3.mouse(this);
			$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
		}).on('mousedown', function() {
			var mouse = d3.mouse(this);
			$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
		}).on('mouseout', function() {
			$scope.mouse = [-9999, -9999];
		}).on('touchmove', function(){
			var mouse = d3.mouse(this);
			if(mouse[0] >= 0 && mouse[0] <= width *$scope.progress && mouse[1] >= 0 && mouse[1] <= height) {
				$scope.mouse = [mouse[0] + $scope.$Layout.LEFT_VALUE, mouse[1] + $scope.$Layout.TOP_VALUE];
			}
		}).on('touchend', function() {
			if(guid) {
				clearTimeout(guid);
				guid = null;
			}
			guid = setTimeout(function() {
				$scope.mouse = [-9999, -9999];
			}, 3000);
		});

		$scope.$watch('data', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		$scope.$watch('progress', function(progress) {
			context.call(element, x, y, width  * (utils.isNumber(progress) ? progress : 1), height);
		});

		

		/*d3.select(window).on('mouseup', function() {
			var mouse = d3.mouse(this);
			$scope.$EventIsSelection = false;
			//console.log(111)
		});*/
	};
}

/**
 * Export `d3WidgetHover`
 */
module.exports = d3WidgetHover;
},{"./../core/handler":5,"./../core/utils":8,"./../elements/d3SvgHover":13}],26:[function(require,module,exports){
'use strict';

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

	return function(context, id, x, y, defined, smooth) {
		context.call(element, id, [], x, y, defined, smooth);

		$scope.$watch('resizable', function() {
			context.call(element, id, [$scope.data || []], x, y, defined, smooth);
		});

		$scope.$watch('data', function(data) {
			context.call(element, id, [$scope.data || []] , x, y, defined, smooth);
			$scope.progress = 1.0;
		});
	};
}

/**
 * Export `d3WidgetLine`
 */
module.exports = d3WidgetLine;
},{"./../shapes/d3SvgLine":20}],27:[function(require,module,exports){
'use strict';

var utils   = require('./../core/utils');
var element = require('./../elements/d3SvgMask');

/**
 * d3SvgMask
 * @public	 
 * @method d3WidgetMask
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetMask($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	return function(context) {
		context.call(element, $scope.uid, x, y, width  * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);

		$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.uid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		$scope.$watch('data', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.uid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});

		$scope.$watch('progress', function(progress) {
			context.call(element, $scope.uid, x, y, width  * (utils.isNumber(progress) ? progress : 1), height);
		});
	};
}

/**
 * Export `d3WidgetMask`
 */
module.exports = d3WidgetMask;
},{"./../core/utils":8,"./../elements/d3SvgMask":14}],28:[function(require,module,exports){
'use strict';

var utils   = require('./../core/utils');
var element = require('./../elements/d3SvgMessage');

/**
 * d3WidgetMessage
 * @public	 
 * @method d3WidgetMessage
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetMessage($scope) {
	var x = $scope.$Layout.LEFT_VALUE + 1;
	var y = $scope.$Layout.TOP_VALUE;
	var width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
	var height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

	return function(context) {
		context.call(element, {
			x: width / 2 + x,
			y: height / 2 + y,
			label: '暂无数据！'
		});

		$scope.$watch('data', function(){
			context.call(element, {
				x: width / 2 + x,
				y: height / 2 + y,
				label: ''
			});
		});

		/*$scope.$watch('resizable', function() {
			x = $scope.$Layout.LEFT_VALUE + 1;
			y = $scope.$Layout.TOP_VALUE;
			width  = $scope.width - $scope.$Layout.LEFT_VALUE - $scope.$Layout.RIGHT_VALUE;
			height = $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE;

			context.call(element, $scope.uid, x, y, width * (utils.isNumber($scope.progress) ? $scope.progress : 1), height);
		});*/
	};
}

/**
 * Export `d3WidgetMessage`
 */
module.exports = d3WidgetMessage;
},{"./../core/utils":8,"./../elements/d3SvgMessage":15}],29:[function(require,module,exports){
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
	var wrapper = d3.select('#'+ id);

	var context = element(wrapper, id, width, height);

	$scope.$watch('resizable', function() {
		context.attr('width', $scope.width).attr('height', $scope.height);
	});
	return context;
}

/**
 * Export `d3WidgetPaint`
 */
module.exports = d3WidgetPaint;
},{"./../core/observer":7,"./../elements/d3SvgPaint":16}],30:[function(require,module,exports){
'use strict';

var element = require('./../elements/d3SvgPointerEvents');
/**
 * d3WidgetPointerEvents
 * @public	 
 * @method d3WidgetPointerEvents
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetPointerEvents($scope) {
	var data = [{
		style: "cursor-line-vertical",
		y1: $scope.$Layout.TOP_VALUE,
		y2: $scope.height - $scope.$Layout.BOTTOM_VALUE,
		x: -9999,
		y: -9999
	}, {
		style:"cursor-line-horizontal",
		x1: $scope.$Layout.LEFT_VALUE,
		x2: $scope.width - $scope.$Layout.RIGHT_VALUE,
		x: -9999,
		y: -9999
	}];

	return function(context) {
		context.call(element, data);
		
		$scope.$watch('resizable', function() {
			data[0].y1 = $scope.$Layout.TOP_VALUE;
			data[0].y2 = $scope.height - $scope.$Layout.BOTTOM_VALUE;
			data[0].x = -9999;
			data[0].y = -9999;

			data[1].x1 = $scope.$Layout.LEFT_VALUE,
			data[1].x2 = $scope.width - $scope.$Layout.RIGHT_VALUE;
			data[1].x = -9999;
			data[1].y = -9999;
			context.call(element, data);
		});

		$scope.$watch('data', function() {
			data[0].y1 = $scope.$Layout.TOP_VALUE;
			data[0].y2 = $scope.height - $scope.$Layout.BOTTOM_VALUE;
			data[0].x = -9999;
			data[0].y = -9999;

			data[1].x1 = $scope.$Layout.LEFT_VALUE,
			data[1].x2 = $scope.width - $scope.$Layout.RIGHT_VALUE;
			data[1].x = -9999;
			data[1].y = -9999;
			context.call(element, data);
		});

		$scope.$watch('$EVENT_HOVER', function(mouse) {
			data[0].x = mouse[0] - 0.5;
			data[0].y = 0;		
			data[1].x = 0;
			data[1].y = mouse[1];
			context.call(element, data);
		});
	};
}

/**
 * Export `d3WidgetPointerEvents`
 */
module.exports = d3WidgetPointerEvents;
},{"./../elements/d3SvgPointerEvents":17}],31:[function(require,module,exports){
'use strict';

var element = require('./../elements/d3SvgSelection');

/**
 * d3WidgetSelection
 * @public	 
 * @method d3WidgetSelection
 * @param {Document} context
 * @param {Observer} $scope
 * @returns {void}
 */	
function d3WidgetSelection($scope) {
	var offsetLeft = 0;
	var offsetTop  = 0;

	var startX = 0;
	var startY = 0;

	var stopX = 0;
	var stopY = 0;

	return function(context) {
		context.call(element, 0, 0, 0, $scope.height - $scope.$Layout.TOP_VALUE - $scope.$Layout.BOTTOM_VALUE);

		$scope.$watch('$EVENT_SELECTION', function(events) {
			var TOP_VALUE = $scope.$Layout.TOP_VALUE;
			var BOTTOM_VALUE = $scope.$Layout.BOTTOM_VALUE;

			context.call(element, events[0], TOP_VALUE, events[1], $scope.height - TOP_VALUE - BOTTOM_VALUE)
		});

		$scope.$watch('$EVENT_START', function(domain) {
			startX = $scope.mouse[0] + 1;
			startY = $scope.mouse[1];

			offsetLeft = domain[0] - startX;
			offsetTop  = domain[1] - startY;
		});

		$scope.$watch('$EVENT_DRAG', function(domain) {
			var LEFT_VALUE = $scope.$Layout.LEFT_VALUE;
			var RIGHT_VALUE = $scope.$Layout.RIGHT_VALUE;

			var number = Math.min(Math.max(domain[0] - offsetLeft, LEFT_VALUE), $scope.width - RIGHT_VALUE);
			var size = Math.floor(($scope.width - LEFT_VALUE - RIGHT_VALUE) * $scope.progress) + LEFT_VALUE;
			$scope.$EVENT_SELECTION = [Math.min(startX, number), Math.abs(startX - Math.min(number, size))];
		});

		$scope.$watch('$EVENT_STOP', function(domain) {
			var LEFT_VALUE = $scope.$Layout.LEFT_VALUE;
			var RIGHT_VALUE = $scope.$Layout.RIGHT_VALUE;
			var size = $scope.width - RIGHT_VALUE - LEFT_VALUE;
			var extent = scope.$Extents[2];

			if(domain[0] === startX) {
				$scope.$EVENT_SELECTION = [startX, 0];
			} else if($scope.$EVENT_SELECTION) {
				var a = $scope.$EVENT_SELECTION[0];
				var b = $scope.$EVENT_SELECTION[1];

				if(extent[1] - extent[0] !== 0) {
					var start = ((a - LEFT_VALUE) / size * (extent[1] - extent[0]));
					var stop = ((a + b - LEFT_VALUE) / size * (extent[1] - extent[0]));
					console.log('TIME:', new Date(Math.floor((start + extent[0]) * 10) / 10), new Date(Math.floor((stop + extent[0]) * 10) / 10));
				}
			}
		});

		
	};
}

/** 
 * Export `d3WidgetSelection`
 */
module.exports = d3WidgetSelection;
},{"./../elements/d3SvgSelection":18}]},{},[1])(1)
});
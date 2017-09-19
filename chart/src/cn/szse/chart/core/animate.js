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
'use strict';
/**
 * K线
 * @public	 
 * @method d3SvgCandlestick
 * @param {Document} context
 * @param {Array} data
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h 
 * @param {Boolean} smooth 
 * @returns {Void}
 */	
function d3SvgCandlestick(context, data, x, y, w, h) {

	//console.log(data)

	var wrap = context.selectAll('g.graph-content').data(['graph-content']);
	wrap.enter().append('g').attr('class', (d) => d);

	wrap.exit().remove();

	var item = wrap.selectAll('path.item').data(data);

	//初始化Candlestick属性, class, attr;
	item.enter().append('path')
	.attr('data-series', function(item, i) {
		return item.series || '';
	})
	.attr('data-category', function(item, i) {
		return item[0];
	});

	//动画过渡, attr;
	item.attr('class', function(item) {
		return 'item ' + (item[2] < item[4] ? 'plus' : 'minus');
	})
	.attr('d', function(item, i) {
		return drawCandlesShape(item, i, x, y, w);
	});

	item.exit().remove();
}

function getValues(item, y) {
	return {
		high: y(item[1]),
		open: y(item[2]),
		low: y(item[3]),
		close: y(item[4])
	};
}

//绘制 `蜡烛` 路径
function drawCandlesShape(item, i, x, y, w) {

	var data = getValues(item, y);
	var high = data.high;
	var open = data.open;
	var close = data.close;
	var low = data.low;

	var left = x(item);
	var width = w(item) || 3; // doto
	width = width % 2 === 0 ? width : (width > 1 ? width - 1 : 1);

	var mid = width * 0.5;
	if(high !== low) {
		return [
			'M'+ Math.floor(left + mid), high,
			'L'+ Math.floor(left + mid), close,
			Math.floor(left), close,
			Math.floor(left), open,
			Math.floor(left + mid), open,
			Math.floor(left + mid), low,
			Math.floor(left + mid), open,
			Math.floor(left + width), open,
			Math.floor(left + width), close,
			Math.floor(left + mid), close,
			Math.floor(left + mid), high + 'Z'

		].join(' ');
	} 

	return [
			'M'+ Math.floor(left + mid), high,
			'L'+left, high,
			left + width, high
			/*Math.floor(left), close,
			Math.floor(left), open,
			Math.floor(left + mid), open,
			Math.floor(left + mid), low,
			Math.floor(left + mid), open,
			Math.floor(left + width), open,
			Math.floor(left + width), close,
			Math.floor(left + mid), close,
			Math.floor(left + mid), high + 'Z'*/

		].join(' ')
	
}

/**
 * Export `d3SvgCandlestick`
 */
module.exports = d3SvgCandlestick;
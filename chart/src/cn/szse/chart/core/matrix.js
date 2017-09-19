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
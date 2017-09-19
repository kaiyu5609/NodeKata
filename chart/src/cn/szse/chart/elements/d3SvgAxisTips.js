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
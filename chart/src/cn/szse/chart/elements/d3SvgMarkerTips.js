'use strict';

/**
 * MarkerTips
 * @public	 
 * @method d3SvgMarkerTips
 * @param {Document} context
 * @param {Array} data [{left: number, top: number, label: string}]
 * @returns {void}
 */	
function d3SvgMarkerTips(context, data) {	
	var marker = context.selectAll('div.marker-tips').data(data);

	marker.enter().append('div')
	.attr('class', 'marker-tips');


	marker.style('left', function(d) {
		return (d.left + 12) +'px';
	}).style('top', function(d) {
		return (d.top - 10) +'px';
	}).html(function(d) {
		return d.label;
	});
	
	/*marker.attr('transform', function(d) {
		return 'translate('+d.left+', '+ d.top+')';
	}).html(function(d) {
		return d.label;
	});*/

	marker.exit().remove();

	var icon = marker.selectAll('span.marker-icon').data(['marker-icon']);
	icon.enter().append('span').attr('class', 'marker-icon');
	icon.exit().remove();
	/*
	<div class="marker-tips">
			<p>09:30:05.878</p>
			<p>笔数:1500</p>
			<p>笔数:1500</p>
			<span class="icon"></span>
		</div>
	*/ 
}

/**
 * Export `d3SvgMarkerTips`
 */
module.exports = d3SvgMarkerTips;
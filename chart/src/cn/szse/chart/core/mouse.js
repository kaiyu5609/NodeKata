'use strict';

var handler  = require('./handler');
var observer = require('./observer');

var mouse = new observer();
mouse.isPinch = false;
mouse.startPoint = [];

// 获取距离
function getDis(point1, point2) {
	var x = point2.x - point1.x;
	var y = point2.y - point1.y;
	return Math.sqrt(x * x + y * y);
}

handler(document, 'mousemove', function(event) {
	try {
		if(event.target && event.target.tagName.toLocaleLowerCase() === 'rect') {
			var offset = event.target.__mouse__;
			mouse['move'] = [event.pageX - (event.pageX - offset[0]), event.pageY - (event.pageY - offset[1]), event.target.id];
		} else {
			if(mouse['move'][0] !== -9999) {
				mouse['move'] = [-9999, -9999];
			}			
		}
	} catch(e) {

	}
});


handler(document, 'touchstart', function(event) {
	try{
		if(event.target && event.target.tagName.toLocaleLowerCase() === 'rect') {
			var offset = event.target.__mouse__;
			var touches = event.touches;
			var pageX = touches[0].pageX;
			var pageY = touches[0].pageY;

			if (touches.length >= 2) {
				mouse.isPinch = true;
				mouse.startPoint[0] = {
					x: touches[0].pageX,
					y: touches[0].pageY
				};
				mouse.startPoint[1] = {
					x: touches[1].pageX,
					y: touches[1].pageY
				};
			}
			// mouse['move'] = [pageX - (pageX - offset[0]), pageY - (pageY - offset[1])];
		} else {
			// mouse['move'] = [-9999, -9999];
		}
	} catch(e){
		
	}
});

handler(document, 'touchmove', function(event) {
	try{
		if(event.target && event.target.tagName.toLocaleLowerCase() === 'rect') {
			var offset = event.target.__mouse__;
			var touches = event.touches;
			var pageX = touches[0].pageX;
			var pageY = touches[0].pageY;

			if (touches.length === 1) {
				mouse['move'] = [pageX - (pageX - offset[0]), pageY - (pageY - offset[1]), event.target.id];
			}

			if (mouse.isPinch && touches.length >= 2) {
				var nowPoint = [];
				nowPoint[0] = {
					x: touches[0].pageX,
					y: touches[0].pageY
				};
				nowPoint[1] = {
					x: touches[1].pageX,
					y: touches[1].pageY
				};
				var startDis = getDis(mouse.startPoint[0], mouse.startPoint[1]);
				var nowDis = getDis(nowPoint[0], nowPoint[1]);

				mouse['pinch'] = [nowDis / startDis, startPoint, nowPoint];
			}

		} else {
			mouse['move'] = [-9999, -9999];
		}
	} catch(e){
		
	}
});

handler(document, 'touchend', function(event) {
	try{
		if(event.target && event.target.tagName.toLocaleLowerCase() === 'rect') {
			var offset = event.target.__mouse__;
			var touches = event.touches;
			var targetTouches = event.targetTouches;
			var pageX = touches[0].pageX;
			var pageY = touches[0].pageY;

			if (mouse.isPinch) {
				if (
					touches.length < 2 ||
					targetTouches.length < 1
				) {
					mouse.isPinch = false;
				}
			}
			// mouse['move'] = [pageX - (pageX - offset[0]), pageY - (pageY - offset[1])];
		} else {
			// mouse['move'] = [-9999, -9999];
		}
	} catch(e){
		
	}
});



module.exports = mouse;
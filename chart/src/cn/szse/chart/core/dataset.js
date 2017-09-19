'use strict';

var utils    = require('./../core/utils');
var matrix   = require('./../core/matrix');
var observer = require('./../core/observer');

function Scope(options, data) {
	var scope = new observer();

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
			}), data));
		}

		return utils[opts.type](opts.extent);
	});

	domain = scales.map(function(scale, i) {
		return scale ? scale.ticks().map(function(d) {
			return options.scale[i].data.label(d);
		}) : null;
	});

	scope.$Layout = matrix(scope.width, scope.height, domain, {labels: [], orient:"bottom"});

	if(options.left) {
		scope.$Layout.LEFT_VALUE = options.left;
	}

	if(options.right) {
		scope.$Layout.RIGHT_VALUE = options.right;
	}

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

	scope.$watch('$DATA_LOAD', function() {
		var data = scope.$DATA_STORAGE;		
		scales = options.scale.map(function(opts, i) {
			if(opts === null) {
				return null;
			}

			if(!opts.extent) {
				return utils[opts.type](utils.extent(data, function(d) {
					return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
				}), scope.DATA_GS);
			}

			if(typeof opts.extent === 'function') {
				
				return utils[opts.type](opts.extent(utils.extent(data, function(d) {
					return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
				}), data), scope.DATA_GS);

				/*var extent = utils.extent(data, function(d) {
					return opts.type === 'time' ? (new Date(d[opts.index])).getTime() : d[opts.index];
				});

				utils[opts.type](opts.extent(data))*/
			}

			return utils[opts.type](opts.extent, scope.DATA_GS);
		});

		domain = scales.map(function(scale, i) {
			return scale ? scale.ticks().map(function(d) {
				return options.scale[i].data.label(d);
			}) : null;
		});

		scope.$Layout = matrix(scope.width, scope.height, domain, {labels: [], orient:"bottom"});
		if(options.left) {
			scope.$Layout.LEFT_VALUE = options.left;
		}

		if(options.right) {
			scope.$Layout.RIGHT_VALUE = options.right;
		}
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
		if(options.left) {
			scope.$Layout.LEFT_VALUE = options.left;
		}

		if(options.right) {
			scope.$Layout.RIGHT_VALUE = options.right;
		}
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

	return scope;
}

/**
 * Export `Scope`
 */
module.exports = Scope;
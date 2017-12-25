var path = require('path')

var config = {
	entry: [
		path.resolve(__dirname, 'src/index.js')
	],
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'cube.js',
		publicPath: 'dist',
		library: 'cube'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{test: /\.css$/, use: 'style!css'}//,
			// {
			// 	test: /\.js$/,
			// 	exclude: [/node_modules/],
			// 	use: [{
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['es2015']
			// 		}
			// 	}]
			// }
		]
	},
	resolve: {
		extensions: ['.js', '.css']
	},
	devServer: {
		proxy: {
			'/query/*': {
				target: 'http://localhost:3000',
				secure: false
			}
		}
	},
}

module.exports = config;

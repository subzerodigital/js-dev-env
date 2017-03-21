var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/es6/cs6.es6',
	output: {
		filename: './dist/bundle/'
	},
	module: {
		loaders: [{
			enforce:'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader:'jshint-loader'
		},{
			test: /\.es6$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: "style-loader!css-loader"
		},{
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: "style-loader!css-loader!sass-loader"
		}],
	},
	resolve: {
		extensions: ['.js', '.es6']
	},
	watch: false
};
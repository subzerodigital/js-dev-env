module.exports = {
	entry: './src/es6/cs6.es6',
	output: {
		filename: './dist/bundle/bundle.js'
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
		}],
	},
	resolve: {
		extensions: ['.js', '.es6']
	},
	watch: false
};
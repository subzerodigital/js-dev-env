module.exports = {
	entry: './src/es6/cs6.es6',
	output: {
		filename: './dist/bundle/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.es6']
	},
	watch: false
};
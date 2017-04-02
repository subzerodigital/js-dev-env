import path from 'path'

export default {
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'src/ts/bundle-test/vendor.js'),
	output: {
		path: path.resolve(__dirname, 'dist/bundle-test/vendor'),
		filename: 'vendor.js'
	},
	target: 'web',
	plugins: [],
	resolve: {
		extensions: ['.js', '.es6', '.ts']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}, {
			test: /\.es6$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.ts$/,
			exclude: /node_modules/,
			loader: 'ts-loader'
		}]
	}
}
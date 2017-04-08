import path from 'path'
import webpack from 'webpack'

export default {
	devtool: 'inline-source-map',
	entry: {
		//vendor:path.resolve(__dirname, 'src/ts/bundle-test/vendor.js'),
		vendor: ['jquery'],
		template: path.resolve(__dirname, 'src/ts/template.ts')
	},
	output: {
		path: path.resolve(__dirname, 'dist/bundle-test'),
		filename: '[name].js'
	},
	target: 'web',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	],
	resolve: {
		extensions: ['.js', '.es6']
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
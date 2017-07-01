import path from 'path'
import webpack from 'webpack'

export default {
	devtool: 'inline-source-map',
	entry: {
		vendor: ['jquery', 'util', 'modal'],
		main: path.resolve(__dirname, 'src/ts/main.ts')
	},
	output: {
		path: path.resolve(__dirname, 'dist/bundle-test'),
		filename: '[name].js'
	},
	target: 'web',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery',
			"window.Tether": 'tether',
			Tether: 'tether'
		}),
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			sourceMap: false
		})

	],
	resolve: {
		extensions: ['.js', '.es6'],
		alias: {
			util: path.resolve(__dirname, 'node_modules/bootstrap/js/src/util'),
			modal: path.resolve(__dirname, 'node_modules/bootstrap/js/src/modal'),
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}, {
			test: /node_modules\/bootstrap\/js\/src\/.*\.js/,
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
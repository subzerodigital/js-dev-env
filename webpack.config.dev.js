import path from 'path'
import webpack from 'webpack'

export default {
	devtool: 'inline-source-map',
	entry: {
		vendor: ['jquery', 'bootstrap'],
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
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery',
			"window.Tether": 'tether',
			Tether: 'tether'
			//Util: path.resolve(__dirname, 'node_modules/bootstrap/js/src/util'),
			//"window.Util": path.resolve(__dirname, 'node_modules/bootstrap/js/src/util')
		}),

		new webpack.optimize.UglifyJsPlugin({
			comments: false
		})
	],
	resolve: {
		extensions: ['.js', '.es6'],
		alias: {
		}
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
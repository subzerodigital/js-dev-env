import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import chalk from 'chalk';

console.log(chalk.yellow('webpack build starts now'));

webpack(webpackConfig).run((err,stats) => {

	if(err){
		console.log(chalk.red(err));
		return 1;
	}

	console.log(stats.toString({
		chunks: false,  // Makes the build much quieter
		colors: true    // Shows colors in the console
	}));

});
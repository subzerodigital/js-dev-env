import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

console.log(chalk.blue('webpack build for ts starts now'));

webpack(webpackConfig).run((err,stats) => {

	if(err){
		console.log(chalk.red(err));
		return 1;
	}
	return 0;

});
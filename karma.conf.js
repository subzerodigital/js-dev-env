module.exports = function (config) {
	config.set({
		frameworks: ['jasmine', 'karma-typescript'],
		files: [
			{pattern: 'src/**/*.ts'},
			{pattern: 'src/**/*.spec.ts'}
		],
		preprocessors: {
			'**/*.ts': ['karma-typescript']
		},
		reporters: ['progress', 'karma-typescript'],
		browsers: ['PhantomJS'],
	});
};


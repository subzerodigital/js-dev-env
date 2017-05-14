module.exports = function (config) {
	config.set({
		frameworks: ['jasmine', 'karma-typescript'],
		files: [
			{pattern: 'src/**/*.ts'},
			{pattern: 'src/**/*.spec.ts'}
		],
		preprocessors: {
			'**/*.ts': ['karma-typescript', 'coverage'],
		},
		reporters: ['progress', 'karma-typescript', 'coverage'],
		browsers: ['PhantomJS'],

		/*
		browsers: ['desktop','mobile'],
		customLaunchers: {
			mobile: {
				base: 'Chrome',
				flags: ['--window-size=320,600']
			},
			desktop: {
				base: 'Chrome',
				flags: ['--window-size=900,600']
			}
		}
		*/
	});
};


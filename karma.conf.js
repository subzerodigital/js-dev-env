module.exports = function (config) {
	config.set({
		frameworks: ['jasmine', 'karma-typescript', 'jquery-3.1.1'],
		files: [
			{pattern: 'src/ts/test/**/*.ts'},
			{pattern: 'src/ts/test/**/*.spec.ts'}
		],
		preprocessors: {
			'src/ts/test/**/*.ts': ['karma-typescript', 'coverage'],
		},
		reporters: ['progress', 'karma-typescript', 'coverage'],
		browsers: ['Chrome']
		/*
		karmaTypescriptConfig: {
			compilerOptions: {
				"module": "commonjs",
				'noImplicitAny': true,
				'removeComments': true,
				'preserveConstEnums': true,
				'moduleResolution': "node",
				"allowSyntheticDefaultImports": true,
				"sourceMap": true,
				"baseUrl": "./",
				"paths": {
					"jquery": ["node_modules/jquery/dist/jquery"]
				}
			}
		}
		*/
	});
};


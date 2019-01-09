module.exports = {
	parser: 'babel-eslint',
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'plugin:flowtype/recommended',
		'wpcalypso',
		'plugin:react/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'wpcalypso',
		'flowtype',
		'json',
		'no-async-foreach',
	],
	globals: {
		describe: true,
		it: true,
		expect: true,
		beforeEach: true,
		afterEach: true,
		beforeAll: true,
		afterAll: true,
		jest: true,
		window: true,
	},
	rules: {
		'wpcalypso/jsx-classname-namespace': 0,
		camelcase: [
			0,
		],
		'no-console': [
			'warn',
		],
		'no-unused-vars': [
			'warn',
		],
		'flowtype/no-types-missing-file-annotation': [
			0,
		],
		'no-process-exit': [
			0,
		],
		'no-duplicate-imports': [
			'warn',
		],
		'no-unsafe-negation': [
			'error',
		],
		'max-len': [
			'warn',
			{
				code: 200,
			},
		],
		'arrow-parens': [
			'warn',
			'as-needed',
		],
		radix: [
			'error',
		],
		'no-async-foreach/no-async-foreach': [
			'error',
		],
	},
	settings: {
		react: {
			version: '16.4',
		},
	},
};

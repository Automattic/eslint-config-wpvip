module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@wordpress/eslint-plugin/esnext',
		'plugin:@wordpress/eslint-plugin/jsdoc',
		'plugin:@wordpress/eslint-plugin/i18n',
	],
	plugins: [
		'no-async-foreach',
	],
	rules: {
		// Additions or overrides
		camelcase: [
			'warn',
			{
				properties: 'never',
				ignoreDestructuring: true,
			},
		],
		'no-console': [
			'warn',
		],
		'no-unused-vars': [
			'warn',
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
		'prefer-arrow-callback': [
			'warn',
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
		'space-in-parens': [
			'error',
			'always',
			{
				exceptions: [ 'empty' ],
			},
		],
		'spaced-comment': [
			'warn',
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
		'id-length': [
			'warn',
			{
				min: 2,
				max: 40,
			},
		],
	},
};

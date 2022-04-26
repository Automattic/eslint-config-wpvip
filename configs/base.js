module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:json/recommended',
	],
	plugins: [
		'no-async-foreach',
	],
	rules: {
		'arrow-parens': [
			'warn',
			'as-needed',
		],
		camelcase: [
			'warn',
			{
				properties: 'never',
				ignoreDestructuring: true,
			},
		],
		'id-length': [
			'warn',
			{
				min: 2,
				max: 40,
			},
		],
		'max-len': [
			'warn',
			{
				code: 200,
			},
		],
		'no-async-foreach/no-async-foreach': 'error',
		'no-console': 'warn',
		'no-duplicate-imports': 'warn',
		'no-process-exit': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-vars': 'error',
		'prefer-arrow-callback': 'warn',

		// Temporarily navigate Gutenberg bug that too-eagerly loads prettier config:
		// https://github.com/WordPress/gutenberg/blob/2bbbcf58f1a05113267030f0ac884f6b814d5a85/packages/eslint-plugin/configs/recommended.js#L9
		'prettier/prettier': 0,

		radix: 'error',
		'space-in-parens': [
			'error',
			'always',
			{
				exceptions: [ 'empty' ],
			},
		],
		'spaced-comment': 'warn',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
	},
};

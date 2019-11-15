module.exports = {
	parser: 'babel-eslint',
	env: {
		es6: true,
		node: true,
		'jest/globals': true,
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
		'jest',
	],
	globals: {
		window: true,
	},
	rules: {
		'wpcalypso/jsx-classname-namespace': 0,
		camelcase: [
			'warn',
			{
				properties: 'never',
				ignoreDestructuring: true,
			},
		],
		'capitalized-comments': [
			'warn',
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
		'spaced-comment': [
			'warn',
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],

		'no-return-await': [
			'error',
		],

		// Jest rules, from https://github.com/jest-community/eslint-plugin-jest
		'jest/consistent-test-it': 'error',
		'jest/lowercase-name': 'error',
		'jest/expect-expect': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-alias-methods': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/no-jest-import': 'error',
		'jest/no-test-prefixes': 'error',
		'jest/no-truthy-falsy': 'warn',
		'jest/prefer-spy-on': 'warn',
		'jest/prefer-to-be-null': 'warn',
		'jest/prefer-to-be-undefined': 'warn',
		'jest/prefer-to-contain': 'warn',
		'jest/prefer-to-have-length': 'warn',
		'jest/require-tothrow-message': 'warn',
		'jest/valid-describe': 'error',
		'jest/valid-expect': 'error',
		'jest/valid-expect-in-promise': 'error',
	},
	settings: {
		react: {
			version: '16.4',
		},
	},
};

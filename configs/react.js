/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/react.js
 */

module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		require('./jsx-ally'),
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	plugins: ['@automattic/wpvip', 'react', 'react-hooks'],

	rules: {
		'@automattic/wpvip/no-unused-vars-before-return': [
			'error',
			{
				excludePattern: '^use',
			},
		],

		'react/display-name': 'off',

		'react/jsx-curly-spacing': [
			'error',
			{
				when: 'always',
				children: true,
			},
		],

		'react/jsx-equals-spacing': 'error',

		'react/jsx-indent': ['error', 'tab'],

		'react/jsx-indent-props': ['error', 'tab'],

		'react/jsx-key': 'error',

		'react/jsx-tag-spacing': 'error',

		'react/no-children-prop': 'off',

		'react/prop-types': 'off',

		'react/react-in-jsx-scope': 'off',
	},
};

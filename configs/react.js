/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/react.js
 */

module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
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

	plugins: ['@automattic/wpvip', 'jsx-a11y', 'react', 'react-hooks'],

	rules: {
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				assert: 'htmlFor',
			},
		],

		'jsx-a11y/media-has-caption': 'off',

		'jsx-a11y/no-noninteractive-tabindex': 'off',

		'jsx-a11y/role-has-required-aria-props': 'off',

		'jsx-quotes': 'error',

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

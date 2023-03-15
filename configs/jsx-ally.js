/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/jsx-a11y.js
 */

module.exports = {
	extends: ['plugin:jsx-a11y/recommended'],
	plugins: ['jsx-a11y'],
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
	},
};

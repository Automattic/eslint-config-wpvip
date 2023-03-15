/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended.js
 */

module.exports = {
	extends: [ 'plugin:prettier/recommended' ],
	plugins: [ 'prettier' ],
	rules: {
		'prettier/prettier': 'error',
	},
};

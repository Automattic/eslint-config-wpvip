/**
 * Based on:
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-unit.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-e2e.js
 */

module.exports = {
	extends: ['plugin:jest/recommended'],

	env: {
		'jest/globals': true,
	},

	plugins: ['jest'],
};

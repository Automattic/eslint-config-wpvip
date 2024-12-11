/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended.js
 */

const eslintPluginPrettierRecommended = require( 'eslint-plugin-prettier/recommended' );

/** @type import('eslint').Linter.Config[] */
module.exports = [
	eslintPluginPrettierRecommended,
	{
		rules: {
			'prettier/prettier': 'error',
		},
	},
];

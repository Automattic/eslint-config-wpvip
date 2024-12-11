const JestPlugin = require( 'eslint-plugin-jest' );
const globals = require( 'globals' );

const isPackageInstalled = require( '../utils/is-package-installed' );

/**
 * Based on:
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-unit.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-e2e.js
 */

/** @type import('eslint').Linter.Config[] */
const config = [
	JestPlugin.configs[ 'flat/recommended' ],
	{
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
	},
];

if ( isPackageInstalled( 'typescript' ) ) {
	config.push( {
		files: [ '__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts' ],
		rules: {
			'@typescript-eslint/unbound-method': 'off',
			'jest/unbound-method': 'error',
		},
	} );
}

module.exports = config;

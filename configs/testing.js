const isPackageInstalled = require( '../utils/is-package-installed' );

/**
 * Based on:
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-unit.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/test-e2e.js
 */

const config = {
	extends: [ 'plugin:jest/recommended' ],

	env: {
		'jest/globals': true,
	},

	plugins: [ 'jest' ],
};

if ( isPackageInstalled( 'typescript' ) ) {
	// Add an override for TypeScript's overzealous unbound-method rule that allows
	// Jest mocks to be inspected without being bound to a variable.
	config.overrides = [
		{
			files: [ '__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts' ],
			rules: {
				'@typescript-eslint/unbound-method': 'off',
				'jest/unbound-method': 'error',
			},
		},
	];
}

module.exports = config;

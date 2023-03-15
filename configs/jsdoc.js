/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/jsdoc.js
 */

const globals = require( 'globals' );

/**
 * Helpful utilities that are globally defined and known to the TypeScript compiler.
 *
 * @see http://www.typescriptlang.org/docs/handbook/utility-types.html
 */
const typescriptUtilityTypes = [
	'ArrayLike',
	'Exclude',
	'Extract',
	'InstanceType',
	'Iterable',
	'IterableIterator',
	'NonNullable',
	'Omit',
	'Parameters',
	'Partial',
	'Pick',
	'PromiseLike',
	'Readonly',
	'ReadonlyArray',
	'ReadonlyMap',
	'ReadonlySet',
	'Record',
	'Required',
	'ReturnType',
	'ThisType',
	'unknown',
	'never',
	'NodeJS',
	'AsyncIterableIterator',
	'NodeRequire',
	'true',
	'false',
];

module.exports = {
	extends: [ 'plugin:jsdoc/recommended' ],
	settings: {
		jsdoc: {
			preferredTypes: {
				object: 'Object',
			},
			tagNamePreference: {
				returns: 'return',
				yields: 'yield',
			},
		},
	},
	rules: {
		'jsdoc/no-undefined-types': [
			'error',
			{
				definedTypes: [
					// Required to reference browser types because we don't have the `browser` environment enabled for the project.
					// Here we filter out all browser globals that don't begin with an uppercase letter because those
					// generally refer to window-level event listeners and are not a valid type to reference (e.g. `onclick`).
					...Object.keys( globals.browser ).filter( ( key ) =>
						/^[A-Z]/.test( key ),
					),
					...typescriptUtilityTypes,
					'void',
					'JSX',
				],
			},
		],
		'jsdoc/require-jsdoc': 'off',
		'jsdoc/require-param-description': 'off',
		'jsdoc/require-returns': 'off',
		'jsdoc/require-yields': 'off',
		'jsdoc/tag-lines': 'off',
		'jsdoc/no-multi-asterisks': [
			'error',
			{ preventAtMiddleLines: false },
		],
		'jsdoc/check-access': 'error',
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-line-alignment': [
			'error',
			'always',
			{
				tags: [ 'param', 'arg', 'argument', 'property', 'prop' ],
				preserveMainDescriptionPostDelimiter: true,
			},
		],
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-property-names': 'error',
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/check-values': 'off',
		'jsdoc/empty-tags': 'error',
		'jsdoc/implements-on-classes': 'error',
		'jsdoc/newline-after-description': 'error',
		'jsdoc/require-param': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-param-type': 'error',
		'jsdoc/require-property': 'error',
		'jsdoc/require-property-description': 'error',
		'jsdoc/require-property-name': 'error',
		'jsdoc/require-property-type': 'error',
		'jsdoc/require-returns-check': 'error',
		'jsdoc/require-returns-description': 'error',
		'jsdoc/require-returns-type': 'error',
		'jsdoc/valid-types': 'error',
	},
};

/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended.js
 */

const TsEsLintParser = require( '@typescript-eslint/parser' );
const JsDoc = require( 'eslint-plugin-jsdoc' );
const tseslint = require( 'typescript-eslint' );

const files = [ '**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts' ];

/**
 * @param {import('eslint').Linter.Config} config
 * @returns {import('eslint').Linter.Config}
 */
const addFiles = config => ( config.files ? config : { ...config, files } );

const tsEslintTypeChecked = tseslint.configs.recommendedTypeChecked.map( addFiles );
const tsEslintStrict = tseslint.configs.strict.map( addFiles ); // Already includes `recommended`

/** @type import('eslint').Linter.Config[] */
module.exports = [
	...tsEslintTypeChecked,
	...tsEslintStrict,
	{
		ignores: [ '**/*.d.ts', '**/*.d.cts', '**/*.d.mts' ],
	},
	{
		files,
		languageOptions: {
			parser: TsEsLintParser,
			parserOptions: {
				projectService: true,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'@automattic/wpvip': require( '../plugin' ),
			jsdoc: JsDoc,
		},
		rules: {
			// Ensures NestJS route prefixes are correctly formatted.
			'@automattic/wpvip/nestjs-route-prefix': 'error',

			// Require explicit visibility for class methods and properties to avoid
			// implicit public access. Allow constructors to be implicitly public.
			'@typescript-eslint/explicit-member-accessibility': [
				'error',
				{
					overrides: {
						constructors: 'off',
					},
				},
			],

			// TypeScript `any` type must not be used. This is a warning in the base
			// config, and is elevated to an error here.
			'@typescript-eslint/no-explicit-any': 'error',

			// Provide escape hatches around destructuring and arguments.
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],

			// Disable some rules that TypeScript handles and are also a Performance
			// issue. See:
			// https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/troubleshooting/Performance.md#eslint-plugin-import
			'import/default': 'off',
			'import/named': 'off',

			// Don't require redundant JSDoc types in TypeScript files.
			'jsdoc/require-param-type': 'off',
			'jsdoc/require-returns-type': 'off',

			// Use TypeScript-specific rules.
			'no-duplicate-imports': 'off',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'import/no-duplicates': 'error',

			'dot-notation': 'off',
			'@typescript-eslint/dot-notation': [ 'error', { allowKeywords: true } ],

			// Empty classes are allowed if they are accompanied by a decorator.
			// This is common in frameworks such as Angular / nest.js.
			'@typescript-eslint/no-extraneous-class': [
				'warn',
				{
					allowWithDecorator: true,
				},
			],

			'class-methods-use-this': 'off',

			'default-param-last': 'off',
			'@typescript-eslint/default-param-last': 'error',

			// `this: void` is useful for certain patterns, such as in event handlers or bound methods.
			'@typescript-eslint/no-invalid-void-type': [ 'error', { allowAsThisParameter: true } ],
		},
	},
];

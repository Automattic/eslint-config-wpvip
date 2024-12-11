/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended.js
 */

const TsEsLintPlugin = require( '@typescript-eslint/eslint-plugin' );
const TsEsLintParser = require( '@typescript-eslint/parser' );
const JsDoc = require( 'eslint-plugin-jsdoc' );

/** @type import('eslint').Linter.Config[] */
module.exports = [
	{
		ignores: [ '**/*.d.ts', '**/*.d.cts', '**/*.d.mts' ],
		files: [ '**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts' ],
		languageOptions: {
			parser: TsEsLintParser,
			parserOptions: {
				projectService: true,
			},
		},
		plugins: {
			'@automattic/wpvip': require( '../plugin' ),
			'@typescript-eslint': TsEsLintPlugin,
			jsdoc: JsDoc,
		},
		rules: {
			...TsEsLintPlugin.configs[ 'eslint-recommended' ].rules,
			...TsEsLintPlugin.configs[ 'recommended-requiring-type-checking' ].rules,
			...TsEsLintPlugin.configs.strict.rules,

			// Ensures NestJS route prefixes are correctly formatted.
			'@automattic/wpvip/nestjs-route-prefix': 'error',

			// Require explicity visibility for class methods and properties to avoid
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
		},
	},
];

/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended.js
 */

module.exports = {
	ignorePatterns: ['**/*.d.ts'],

	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:@typescript-eslint/strict',
			],

			files: ['**/*.ts', '**/*.tsx'],

			parser: '@typescript-eslint/parser',

			parserOptions: {
				project: './tsconfig.json',
			},

			rules: {
				// TypeScript `any` type must not be used. This is a warning in the base
				// config, and is elevated to an error here.
				'@typescript-eslint/no-explicit-any': 'error',

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
				'@typescript-eslint/no-duplicate-imports': 'error',
				'@typescript-eslint/no-shadow': 'error',

				// Handled by TS itself.
				'no-unused-vars': 'off',

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
	],

	plugins: ['@typescript-eslint', 'jsdoc'],
};

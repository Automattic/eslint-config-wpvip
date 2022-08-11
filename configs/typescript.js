/**
 * Base TypeScript rules
 * =====================
 * These rules are intended to be used for all VIP TypeScript projects. They can
 * be extended by `typescript-migration` (to make migration to TypeScript
 * easier) and `typescript-strict` (to enforce additional best practices).
 *
 * Note that, if you also use the `@wordpress/eslint-plugin/recommended` preset,
 * a number of TypeScript rules are automattically added whenever TypeScript is
 * installed as a dependency of your project:
 *
 * https://github.com/WordPress/gutenberg/blob/trunk/packages/eslint-plugin/configs/recommended.js
 */
module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	ignorePatterns: [ '**/*.d.ts' ],
	overrides: [
		{
			files: [ '**/*.ts', '**/*.tsx' ],
			parser: '@typescript-eslint/parser',
			rules: {
				// Prefer the TypeScript versions of some rules.
				'no-duplicate-imports': 'off',
				'@typescript-eslint/no-duplicate-imports': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',

				// Don't require redundant JSDoc types in TypeScript files.
				'jsdoc/require-param-type': 'off',
				'jsdoc/require-returns-type': 'off',
			},
		},
	],
	plugins: [ '@typescript-eslint' ],
	rules: {
		// Elevate the unused vars rule to an error, but allow it to be suppressed
		// with a naming convention.
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				// Allow unused vars if they are prefixed with "_".
				argsIgnorePattern: '^_',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
			},
		},
	},
};

/**
 * "Weak" rules
 * ============
 * These rules are intended for codebases that are transitioning to the stronger
 * base preset but need weaker rules to prevent a massive number of changes.
 * They do not provide good protection or standardization, but can useful on a
 * temporary basis.
 */
module.exports = {
	overrides: [
		{
			// Don't apply weak rules to TypeScript files.
			files: ['**/*.js', '**/*.jsx'],

			/**
			 * Downgrade rules from the base preset to "warn". Do not disable rules (set
			 * to "off"). If a rule is already set to a warning, do not disable it.
			 */
			rules: {
				complexity: 'warn',

				eqeqeq: 'warn',

				'object-shorthand': 'warn',

				'no-async-promise-executor': 'warn',

				'no-await-in-loop': 'warn',

				'no-case-declarations': 'warn',

				'no-dupe-else-if': 'warn',

				'no-else-return': 'warn',

				'no-eq-null': 'warn',

				'no-lonely-if': 'warn',

				'no-mixed-operators': 'warn',

				'no-prototype-builtins': 'warn',

				'no-shadow': 'warn',

				'no-unused-vars': 'warn',

				'no-useless-escape': 'warn',

				'no-var': 'warn',

				'one-var': 'warn',

				radix: 'warn',
			},
		},
	],
};

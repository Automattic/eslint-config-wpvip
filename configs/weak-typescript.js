/**
 * "Weak" TypeScript rules
 * ==========================
 * These rules are intended to extend the base `typescript` rules and will help
 * you migrate an existing project to TypeScript.
 */
module.exports = {
	overrides: [
		{
			files: [ '**/*.ts', '**/*.tsx' ],

			/**
			 * Downgrade rules from the base preset to "warn". Do not disable rules (set
			 * to "off"). If a rule is already set to a warning, do not disable it.
			 */
			rules: {
				'@typescript-eslint/no-explicit-any': 'warn',

				'@typescript-eslint/no-floating-promises': 'warn',

				'@typescript-eslint/no-misused-promises': 'warn',

				'@typescript-eslint/no-unsafe-argument': 'warn',

				'@typescript-eslint/no-unsafe-assignment': 'warn',

				'@typescript-eslint/no-unsafe-call': 'warn',

				'@typescript-eslint/no-unsafe-member-access': 'warn',

				'@typescript-eslint/no-unsafe-return': 'warn',

				'@typescript-eslint/require-await': 'warn',

				'@typescript-eslint/restrict-plus-operands': 'warn',

				'@typescript-eslint/restrict-template-expressions': 'warn',

				'@typescript-eslint/unbound-method': 'warn',
			},
		},
	],
};

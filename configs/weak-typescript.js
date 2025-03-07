/**
 * "Weak" TypeScript rules
 * ==========================
 * These rules are intended to extend the base `typescript` rules and will help
 * you migrate an existing project to TypeScript. They are primarily focused on
 * allowing relaxed or omitted types.
 */
module.exports = {
	overrides: [
		{
			files: [ '**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts' ],

			/**
			 * Downgrade rules from the base preset to "warn". Do not disable rules (set
			 * to "off"). If a rule is already set to a warning, do not disable it.
			 */
			rules: {
				'@typescript-eslint/no-explicit-any': 'warn',

				'@typescript-eslint/no-unsafe-argument': 'warn',

				'@typescript-eslint/no-unsafe-assignment': 'warn',

				'@typescript-eslint/no-unsafe-call': 'warn',

				'@typescript-eslint/no-unsafe-member-access': 'warn',

				'@typescript-eslint/no-unsafe-return': 'warn',

				'@typescript-eslint/unbound-method': 'warn',

				'import/no-duplicates': 'warn',
			},
		},
	],
};

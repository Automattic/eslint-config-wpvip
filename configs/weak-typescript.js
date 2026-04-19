/**
 * "Weak" TypeScript rules
 * ==========================
 * These rules are intended to extend the base `typescript` rules and will help
 * you migrate an existing project to TypeScript. They are primarily focused on
 * allowing relaxed or omitted types.
 */

/** @type import('eslint').Linter.Config[] */
module.exports = [
	{
		files: [ '**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts' ],

		/**
		 * Downgrade rules from the base preset to "warn". Do not disable rules (set
		 * to "off"). If a rule is already set to a warning, do not disable it.
		 */
		rules: {
			'@typescript-eslint/await-thenable': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/default-param-last': 'warn',
			'@typescript-eslint/explicit-member-accessibility': [ 'warn', { overrides: { constructors: 'off' } } ],
			'@typescript-eslint/no-base-to-string': 'warn',
			'@typescript-eslint/no-duplicate-type-constituents': 'warn',
			'@typescript-eslint/no-dynamic-delete': 'warn',
			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-namespace': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-misused-promises': 'warn',
			'@typescript-eslint/no-invalid-void-type': [ 'warn', { allowAsThisParameter: true } ],
			'@typescript-eslint/no-redundant-type-constituents': 'warn',
			'@typescript-eslint/no-require-imports': 'warn',
			'@typescript-eslint/no-this-alias': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unsafe-call': 'warn',
			'@typescript-eslint/no-unsafe-enum-comparison': 'warn',
			'@typescript-eslint/no-unsafe-function-type': 'warn',
			'@typescript-eslint/no-unsafe-member-access': 'warn',
			'@typescript-eslint/no-unsafe-return': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [ 'warn', {
				argsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				ignoreRestSiblings: true,
				varsIgnorePattern: '^_',
			} ],
			'@typescript-eslint/no-wrapper-object-types': 'warn',
			'@typescript-eslint/only-throw-error': 'warn',
			'@typescript-eslint/prefer-promise-reject-errors': 'warn',
			'@typescript-eslint/require-await': 'warn',
			'@typescript-eslint/restrict-plus-operands': 'warn',
			'@typescript-eslint/restrict-template-expressions': 'warn',
			'@typescript-eslint/unbound-method': 'warn',
			'import/no-duplicates': 'warn',
		},
	},
];

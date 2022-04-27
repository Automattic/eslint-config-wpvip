module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
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
};

module.exports = {
	extends: ['plugin:prettier/recommended'],
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// Raise Prettier errors as ESLint errors.
		'prettier/prettier': 'error',
	},
};

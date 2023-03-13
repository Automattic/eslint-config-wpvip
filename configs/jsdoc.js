module.exports = {
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// Reenable the requirement to document function parameters, which in turn
		// enables additional lint rules to ensure accuracy and proper formatting.
		// This overrides the base preset.
		'jsdoc/require-param': 'error',
	},
};

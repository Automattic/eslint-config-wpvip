module.exports = {
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// Allow child_process and non-literal `exec` arguments.
		'security/detect-child-process': 0,

		// Process.exit is used in CLI context to stop execution.
		'no-process-exit': 0,
	},
};

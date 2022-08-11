/**
 * TypeScript strict rules
 * =======================
 * These rules are intended to extend the base `typescript` rules and will help
 * you enforce additional best practices for TypeScript projects.
 */
module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// TypeScript `any` type must not be used. This is a warning in the base
		// config, and is elevated to an error here.
		'@typescript-eslint/no-explicit-any': 'error',
	},
};

/**
 * "Weak" testing rules
 * ====================
 * These rules are intended for codebases that are transitioning to the stronger
 * testing preset but need weaker rules to prevent a massive number of changes.
 * They do not provide good protection or standardization, but can useful on a
 * temporary basis.
 */
module.exports = {
	/**
	 * Downgrade rules from the testing preset to "warn". Do not disable rules
	 * (set to "off"). If a rule is already set to a warning, do not disable it.
	 */
	rules: {
		'jest/no-alias-methods': 'warn',

		'jest/no-done-callback': 'warn',

		'jest/no-conditional-expect': 'warn',

		'jest/no-standalone-expect': 'warn',
	},
};


/**
 * "Weak" rules
 * ============
 * These rules are intended for codebases that are transitioning to the stronger
 * base preset but need weaker rules to prevent a massive number of changes.
 * They do not provide good protection or standardization, but can useful on a
 * temporary basis.
 */
module.exports = {
	/**
	 * Downgrade rules from the base preset to "warning". Do not disable
	 * rules (set to "off"). If a rule is already set to a warning, do not
	 * disable it.
	 */
	rules: {},
};

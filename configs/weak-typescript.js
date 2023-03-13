/**
 * "Weak" TypeScript rules
 * ==========================
 * These rules are intended to extend the base `typescript` rules and will help
 * you migrate an existing project to TypeScript.
 */
module.exports = {
	/**
	 * Downgrade rules from the base preset to "warning". Do not disable
	 * rules (set to "off"). If a rule is already set to a warning, do not
	 * disable it.
	 *
	 * An example is the `@typescript-eslint/no-explicit-any` rule, which is set
	 * to `warning` in the base preset (via `@typescript-eslint/recommended`) and
	 * is intentionally not overridden here.
	 */
	rules: {},
};

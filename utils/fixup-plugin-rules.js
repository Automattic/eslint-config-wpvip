const { fixupPluginRules } = require( '@eslint/compat' );

/**
 * Shim context methods removed in ESLint 10 (e.g. `context.getFilename()`)
 * for plugins that still call them. The rules are replaced on the original
 * plugin object so its identity is preserved: consumers that also register
 * the same plugin would otherwise hit "Cannot redefine plugin".
 *
 * @param {import('eslint').ESLint.Plugin} plugin Plugin to patch.
 * @returns {import('eslint').ESLint.Plugin} The same plugin object.
 */
module.exports = function fixupPluginRulesInPlace( plugin ) {
	plugin.rules = fixupPluginRules( plugin ).rules;

	return plugin;
};

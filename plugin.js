const rules = require( './rules' );

/** @type {import('eslint').ESLint.Plugin & { configs: Record<string, import('eslint').Linter.Config[]> }} */
const plugin = {
	meta: {
		name: '@automattic/eslint-plugin-wpvip',
		version: require( './package.json' ).version,
		namespace: '@automattic/wpvip',
	},
	configs: {},
	rules,
};

module.exports = plugin;

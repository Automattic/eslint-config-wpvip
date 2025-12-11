const rules = require( './rules' );

/** @type {import('eslint').ESLint.Plugin & { configs: Record<string, import('eslint').Linter.Config[]> }} */
const plugin = {
	meta: {
		name: '@automattic/wpvip',
	},
	configs: {},
	rules,
};

module.exports = plugin;

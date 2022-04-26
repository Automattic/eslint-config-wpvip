module.exports = {
	env: {
		'jest/globals': true,
	},
	extends: [
		'plugin:jest/recommended',
		'plugin:@wordpress/eslint-plugin/test-e2e',
		'plugin:@wordpress/eslint-plugin/test-unit',
	],
	plugins: [
		'jest',
	],
	rules: {
		// Additions or overrides
	},
};

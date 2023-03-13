/**
 * Do not copy this .eslintrc for your project. See the README for instructions.
 */

module.exports = {
	extends: [
		'plugin:eslint-plugin/recommended', // linting for eslint plugins!
		'plugin:@automattic/wpvip/base',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	root: true,
};

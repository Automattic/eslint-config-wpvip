/**
 * Do not copy this eslint.config.js for your project. See the README for instructions.
 */

const AutomatticPlugin = require( '.' );

/** @type import('eslint').Linter.Config[] */
module.exports = [
	{
		ignores: [ '__fixtures__/**/*' ],
	},
	...AutomatticPlugin.configs.recommended,
];

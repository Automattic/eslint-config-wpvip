const StylisticPlugin = require( '../utils/stylistic-plugin' );

/** @type import('eslint').Linter.Config[] */
module.exports = [
	{
		plugins: {
			'@stylistic': StylisticPlugin,
		},
		/**
		 * Please include a short description of the rule. For rules that downgrade or
		 * disable errors, include a brief justification or reasoning.
		 */
		rules: {
			'@stylistic/array-bracket-spacing': [ 'error', 'always' ],

			'@stylistic/arrow-parens': [ 'error', 'always' ],

			'@stylistic/arrow-spacing': 'error',

			'@stylistic/brace-style': [ 'error', '1tbs' ],

			// Identifiers should be in camelCase. Object properties are excluded
			// (including when destructuring) since they often come from external
			// sources (like APIs).
			camelcase: [
				'error',
				{
					properties: 'never',
					ignoreDestructuring: true,
				},
			],

			'@stylistic/comma-dangle': [ 'error', 'always-multiline' ],

			'@stylistic/comma-spacing': 'error',

			'@stylistic/comma-style': [ 'error', 'last' ],

			'@stylistic/computed-property-spacing': [ 'error', 'always' ],

			curly: [ 'error', 'all' ],

			'dot-notation': 'error',

			// Files must end in a newline.
			'@stylistic/eol-last': [ 'error', 'always' ],

			'@stylistic/function-call-spacing': 'error',

			'@stylistic/indent': [ 'error', 'tab', { SwitchCase: 1 } ],

			'@stylistic/key-spacing': 'error',

			'@stylistic/keyword-spacing': 'error',

			// Lines containing code should be a maximum of 200 characters in length.
			'@stylistic/max-len': [
				'warn',
				{
					code: 200,
				},
			],

			'@stylistic/no-multi-spaces': 'error',

			'no-multi-str': 'error',

			'@stylistic/no-multiple-empty-lines': [ 'error', { max: 1 } ],

			'@stylistic/no-trailing-spaces': 'error',

			'@stylistic/no-whitespace-before-property': 'error',

			'@stylistic/object-curly-spacing': [ 'error', 'always' ],

			'object-shorthand': 'error',

			'@stylistic/operator-linebreak': 'error',

			'@stylistic/padded-blocks': [ 'error', 'never' ],

			// Arrow functions should be used for function arguments and callbacks.
			'prefer-arrow-callback': 'warn',

			'@stylistic/quotes': [
				'error',
				'single',
				{ allowTemplateLiterals: 'always', avoidEscape: true },
			],

			'@stylistic/quote-props': [ 'error', 'as-needed' ],

			'@stylistic/semi': 'error',

			'@stylistic/semi-spacing': 'error',

			'@stylistic/space-before-blocks': [ 'error', 'always' ],

			'@stylistic/space-before-function-paren': [
				'error',
				{ anonymous: 'never', named: 'never', asyncArrow: 'always' },
			],

			'@stylistic/space-in-parens': [ 'error', 'always' ],

			'@stylistic/space-infix-ops': 'error',

			'@stylistic/space-unary-ops': [ 'error', { overrides: { '!': true, yield: true } } ],

			// Comments should always include consistent spacing for readability.
			'@stylistic/spaced-comment': 'warn',

			'@stylistic/template-curly-spacing': [ 'error', 'always' ],
		},
	},
];

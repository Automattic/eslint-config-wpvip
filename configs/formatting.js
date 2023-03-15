module.exports = {
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],

		'arrow-parens': [ 'error', 'always' ],

		'arrow-spacing': 'error',

		'brace-style': [ 'error', '1tbs' ],

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

		'comma-dangle': [ 'error', 'always-multiline' ],

		'comma-spacing': 'error',

		'comma-style': [ 'error', 'last' ],

		'computed-property-spacing': [ 'error', 'always' ],

		curly: [ 'error', 'all' ],

		'dot-notation': 'error',

		// Files must end in a newline.
		'eol-last': [ 'error', 'always' ],

		'func-call-spacing': 'error',

		indent: [ 'error', 'tab', { SwitchCase: 1 } ],

		'key-spacing': 'error',

		'keyword-spacing': 'error',

		// Lines containing code should be a maximum of 200 characters in length.
		'max-len': [
			'warn',
			{
				code: 200,
			},
		],

		'no-multi-spaces': 'error',

		'no-multi-str': 'error',

		'no-multiple-empty-lines': [ 'error', { max: 1 } ],

		'no-trailing-spaces': 'error',

		'no-whitespace-before-property': 'error',

		'object-curly-spacing': [ 'error', 'always' ],

		'object-shorthand': 'error',

		'operator-linebreak': 'error',

		'padded-blocks': [ 'error', 'never' ],

		// Arrow functions should be used for function arguments and callbacks.
		'prefer-arrow-callback': 'warn',

		quotes: [
			'error',
			'single',
			{ allowTemplateLiterals: true, avoidEscape: true },
		],

		'quote-props': [ 'error', 'as-needed' ],

		semi: 'error',

		'semi-spacing': 'error',

		'space-before-blocks': [ 'error', 'always' ],

		'space-before-function-paren': [
			'error',
			{ anonymous: 'never', named: 'never', asyncArrow: 'always' },
		],

		'space-in-parens': [ 'error', 'always' ],

		'space-infix-ops': 'error',

		'space-unary-ops': [ 'error', { overrides: { '!': true, yield: true } } ],

		// Comments should always include consistent spacing for readability.
		'spaced-comment': 'warn',

		'template-curly-spacing': [ 'error', 'always' ],

	},
};


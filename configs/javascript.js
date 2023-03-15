/**
 * Based on:
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/jshint.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/es5.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/esnext.js
 * - https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/recommended-with-formatting.js
 */

module.exports = {
	env: {
		es2022: true, // 100% covered by Node.js v16
		node: true,
	},

	parser: '@babel/eslint-parser',

	parserOptions: {
		requireConfigFile: false,
		sourceType: 'module',
	},

	/**
	 * Note: We must explicitly add this plugin to use our custom rules.
	 */
	plugins: [ '@automattic/wpvip', 'import' ],

	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// Async/await must not be used in a `.forEach` method, because the result
		// will not be awaited in the outer scope.
		'@automattic/wpvip/no-async-foreach': 'error',

		// Variables that are potentially not needed before a return statement can
		// be assigned after the return.
		'@automattic/wpvip/no-unused-vars-before-return': 'error',

		// Unguarded getRangeAt calls can throw errors in some browsers.
		'@automattic/wpvip/no-unguarded-get-range-at': 'error',

		'array-bracket-spacing': [ 'error', 'always' ],

		'array-callback-return': 'error',

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

		// Maximum cyclomatic complexity must not be above 20.
		complexity: 'error',

		'computed-property-spacing': [ 'error', 'always' ],

		'constructor-super': 'error',

		curly: [ 'error', 'all' ],

		'dot-notation': 'error',

		// Files must end in a newline.
		'eol-last': [ 'error', 'always' ],

		eqeqeq: 'error',

		'func-call-spacing': 'error',

		// Identifiers should be between 2 and 40 characters in length in order to
		// provide a concise semantic meaning.
		'id-length': [
			'warn',
			{
				min: 2,
				max: 40,
			},
		],

		'import/default': 'warn',

		'import/named': 'warn',

		'import/no-extraneous-dependencies': [
			'error',
			{
				peerDependencies: true,
			},
		],

		'import/no-unresolved': 'error',

		indent: [ 'error', 'tab', { SwitchCase: 1 } ],

		'key-spacing': 'error',

		'keyword-spacing': 'error',

		'linebreak-style': [ 'error', 'unix' ],

		// Lines containing code should be a maximum of 200 characters in length.
		'max-len': [
			'warn',
			{
				code: 200,
			},
		],

		'no-alert': 'error',

		// Async/await must not be used in a loop, because it leads to sequential
		// execution, when parallel execution is almost always preferred.
		'no-await-in-loop': 'error',

		'no-bitwise': 'error',

		'no-caller': 'error',

		'no-cond-assign': [ 'error', 'except-parens' ],

		// `console.log` should not be used directly in code. Ideally, delegate to a
		// logging function that logs on your behalf (and ignore this rule there).
		'no-console': 'warn',

		'no-const-assign': 'error',

		'no-debugger': 'error',

		'no-dupe-args': 'error',

		'no-dupe-class-members': 'error',

		'no-dupe-keys': 'error',

		'no-duplicate-case': 'error',

		// A single `import` statement should be used when importing multiple things
		// from a module.
		'no-duplicate-imports': 'error',

		'no-else-return': 'error',

		'no-eq-null': 'error',

		'no-eval': 'error',

		'no-extra-semi': 'error',

		'no-fallthrough': 'error',

		'no-irregular-whitespace': 'error',

		'no-lonely-if': 'error',

		'no-mixed-operators': 'error',

		'no-mixed-spaces-and-tabs': 'error',

		'no-multi-spaces': 'error',

		'no-multi-str': 'error',

		'no-multiple-empty-lines': [ 'error', { max: 1 } ],

		'no-nested-ternary': 'error',

		'no-redeclare': 'error',

		'no-shadow': 'error',

		'no-trailing-spaces': 'error',

		'no-undef': 'error',

		'no-undef-init': 'error',

		'no-unreachable': 'error',

		// Negating the left operand of a statment frequently leads to logical
		// errors. Example: `!key in obj` vs. `!(key in obj)`.
		'no-unsafe-negation': 'error',

		'no-unused-expressions': 'error',

		'no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],

		'no-useless-computed-key': 'error',

		'no-useless-constructor': 'error',

		'no-useless-return': 'error',

		'no-var': 'error',

		'no-whitespace-before-property': 'error',

		'no-with': 'error',

		'object-curly-spacing': [ 'error', 'always' ],

		'object-shorthand': 'error',

		'one-var': [ 'error', 'never' ],

		'operator-linebreak': 'error',

		'padded-blocks': [ 'error', 'never' ],

		// Arrow functions should be used for function arguments and callbacks.
		'prefer-arrow-callback': 'warn',

		'prefer-const': [ 'error', { destructuring: 'all' } ],

		radix: 'error',

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

		// The result of `typeof` must always be compared to a literal string.
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],

		'wrap-iife': [ 'error', 'any' ],
	},
};

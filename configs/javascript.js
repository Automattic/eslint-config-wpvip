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
		// These rules are from eslint:recommended, but are enumerated here for
		// visibility:
		// https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		// 'no-cond-assign': 'error', // overridden below
		'no-const-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-new-symbol': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-self-assign': 'error',
		'no-setter-return': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-labels': 'error',
		// 'no-unused-vars': 'error', // overridden below
		'no-useless-backreference': 'error',
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-with': 'error',
		'require-yield': 'error',
		'use-isnan': 'error',
		// 'valid-typeof': 'error', // overridden below

		// Async/await must not be used in a `.forEach` method, because the result
		// will not be awaited in the outer scope.
		'@automattic/wpvip/no-async-foreach': 'error',

		// Variables that are potentially not needed before a return statement can
		// be assigned after the return.
		'@automattic/wpvip/no-unused-vars-before-return': 'error',

		// Unguarded getRangeAt calls can throw errors in some browsers.
		'@automattic/wpvip/no-unguarded-get-range-at': 'error',

		'array-callback-return': 'error',

		// Maximum cyclomatic complexity must not be above 20.
		complexity: 'error',

		'dot-notation': 'error',

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

		// Enforce Unix linebreaks. Included here and not in "formatting" since it
		// is not controversial and helps with interchange.
		'linebreak-style': [ 'error', 'unix' ],

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

		// A single `import` statement should be used when importing multiple things
		// from a module.
		'no-duplicate-imports': 'error',

		'no-else-return': 'error',

		'no-eq-null': 'error',

		'no-eval': 'error',

		'no-lonely-if': 'error',

		'no-mixed-operators': 'error',

		'no-multi-spaces': 'error',

		'no-multi-str': 'error',

		'no-multiple-empty-lines': [ 'error', { max: 1 } ],

		'no-nested-ternary': 'error',

		'no-shadow': 'error',

		'no-undef-init': 'error',

		'no-unused-expressions': 'error',

		'no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],

		'no-useless-computed-key': 'error',

		'no-useless-constructor': 'error',

		'no-useless-return': 'error',

		'no-var': 'error',

		// Non-controversial formatting rule.
		'no-whitespace-before-property': 'error',

		'one-var': [ 'error', 'never' ],

		'prefer-const': [ 'error', { destructuring: 'all' } ],

		radix: 'error',

		// Non-controversial formatting rule.
		semi: 'error',

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

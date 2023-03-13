module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:json/recommended',
		'plugin:security/recommended',
	],
	/**
	 * We must explicitly add this plugin to use our custom rules.
	 */
	plugins: ['@automattic/wpvip'],
	/**
	 * Please include a short description of the rule. For rules that downgrade or
	 * disable errors, include a brief justification or reasoning.
	 */
	rules: {
		// Identifiers should be in camelCase. Object properties are excluded
		// (including when destructuring) since they often come from external
		// sources (like APIs).
		camelcase: [
			'warn',
			{
				properties: 'never',
				ignoreDestructuring: true,
			},
		],

		// Maximum cyclomatic complexity must not be above 20.
		complexity: 'error',

		// Files must end in a newline.
		'eol-last': ['error', 'always'],

		// Identifiers should be between 2 and 40 characters in length.
		'id-length': [
			'warn',
			{
				min: 2,
				max: 40,
			},
		],

		// Lines containing code should be a maximum of 200 characters in length.
		'max-len': [
			'warn',
			{
				code: 200,
			},
		],

		// Async/await must not be used in a `.forEach` method, because the result
		// will not be awaited in the outer scope.
		'@automattic/wpvip/no-async-foreach': 'error',

		// Async/await must not be used in a loop, because it leads to sequential
		// execution, when parallel execution is almost always preferred.
		'no-await-in-loop': 'error',

		// `console.log` should not be used directly in code. Ideally, delegate to a
		// logging function that logs on your behalf (and ignore this rule there).
		'no-console': 'warn',

		// A single `import` statement should be used when importing multiple things
		// from a module.
		'no-duplicate-imports': 'warn',

		// `process.exit` must not be used.
		'no-process-exit': 'error',

		// Negating the left operand of a statment frequently leads to logical
		// errors. Example: `!key in obj` vs. `!(key in obj)`.
		'no-unsafe-negation': 'error',

		// Defined variables must not go unused.
		'no-unused-vars': 'error',

		// Arrow functions should be used for function arguments and callbacks.
		'prefer-arrow-callback': 'warn',

		// `parseInt` calls must always supply a radix argument.
		radix: 'error',

		// Comments should always include consistent spacing for readability.
		'spaced-comment': 'warn',

		// The result of `typeof` must always be compared to a literal string.
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
	},
};

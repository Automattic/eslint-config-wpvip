const rule = require( '../../rules/no-async-foreach' );
const { RuleTester } = require( 'eslint' );

const ruleTester = new RuleTester();
const parserOptions = { ecmaVersion: 8 };
const errors = [
	{ message: 'Avoid passing an async function to Array.prototype.forEach' },
];

describe( 'no-async-foreach', () => {
	ruleTester.run( 'no-async-foreach', rule, {
		valid: [
			{
				code: '[].forEach(() => {})',
				parserOptions,
			},
			{
				code: '[].forEach(function() {})',
				parserOptions,
			},
		],
		invalid: [
			{
				code: '[].forEach(async () => {})',
				errors,
				parserOptions,
			},
			{
				code: '[].forEach(async function() {})',
				errors,
				parserOptions,
			},
		],
	} );
} );

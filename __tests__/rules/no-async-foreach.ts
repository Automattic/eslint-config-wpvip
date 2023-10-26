/**
 * External dependencies
 */
import { Linter, RuleTester } from 'eslint';

/**
 * Internal dependencies
 */
import rule from '../../rules/no-async-foreach';

const ruleTester = new RuleTester();
const parserOptions: Linter.ParserOptions = { ecmaVersion: 8 };
const errors = [ { message: 'Avoid passing an async function to Array.prototype.forEach' } ];

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

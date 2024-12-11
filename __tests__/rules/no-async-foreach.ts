import { Linter, RuleTester } from 'eslint';

/** @type {import('eslint').Rule.RuleModule} */
import rule from '../../rules/no-async-foreach';

const ruleTester = new RuleTester();
const languageOptions: Linter.LanguageOptions = { ecmaVersion: 8 };
const errors = [ { message: 'Avoid passing an async function to Array.prototype.forEach' } ];

describe( 'no-async-foreach', () => {
	ruleTester.run( 'no-async-foreach', rule, {
		valid: [
			{
				code: '[].forEach(() => {})',
				languageOptions,
			},
			{
				code: '[].forEach(function() {})',
				languageOptions,
			},
		],
		invalid: [
			{
				code: '[].forEach(async () => {})',
				errors,
				languageOptions,
			},
			{
				code: '[].forEach(async function() {})',
				errors,
				languageOptions,
			},
		],
	} );
} );

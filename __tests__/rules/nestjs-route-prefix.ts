/**
 * External dependencies
 */
import { Linter, RuleTester } from 'eslint';

/**
 * Internal dependencies
 */
import rule from '../../rules/nestjs-route-prefix';

const ruleTester = new RuleTester( { parser: require.resolve( '@typescript-eslint/parser' ) } );
const parserOptions: Linter.ParserOptions = { ecmaVersion: 8 };

describe( 'nestjs-routes', () => {
	ruleTester.run( 'nestjs-routes', rule, {
		valid: [
			{
				code: `
				@Get('/hello/w*d')
				export class CustomController {}
				`,
				parserOptions,
			},
			{
				code: `
				@Get('/:id')
				export class CustomController {}
				`,
				parserOptions,
			},
			{
				code: `
				@Controller()
				export class CustomController {}
				`,
				parserOptions,
			},
			{
				code: `
				@Controller({ host: 'example.org' })
				export class CustomController {}
				`,
				parserOptions,
			},
		],
		invalid: [
			{
				code: `
				@Controller('/v1')
				export class CustomController {}
				`,
				errors: [ { message: '@Controller should not have route prefixes.' } ],
				parserOptions,
			},
			{
				code: `
				@Get('hello/world/')
				export class CustomController {}
				`,
				errors: [
					{ message: "@Get should have a route starting with '/' and not ending with '/'." },
				],
				parserOptions,
			},
			{
				code: `
				@Get('')
				export class CustomController {}
				`,
				errors: [
					{ message: "@Get should have a route starting with '/' and not ending with '/'." },
				],
				parserOptions,
			},
			{
				code: `
				@Post('/hello/world/')
				export class CustomController {}
				`,
				errors: [
					{ message: "@Post should have a route starting with '/' and not ending with '/'." },
				],
				parserOptions,
			},
			{
				code: `
				@Get(':id')
				export class CustomController {}
				`,
				errors: [
					{ message: "@Get should have a route starting with '/' and not ending with '/'." },
				],
				parserOptions,
			},
		],
	} );
} );

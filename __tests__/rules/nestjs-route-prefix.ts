import * as tsEsLintParser from '@typescript-eslint/parser';
import { type Linter, RuleTester } from 'eslint';

import rule from '../../rules/nestjs-route-prefix';

const languageOptions: Linter.LanguageOptions = {
	ecmaVersion: 'latest',
	parser: tsEsLintParser,
	parserOptions: {
		ecmaVersion: 'latest',
	},
};

const ruleTester = new RuleTester( {
	languageOptions,
} );

describe( 'nestjs-routes', () => {
	ruleTester.run( 'nestjs-routes', rule, {
		valid: [
			{
				code: `
				@Get('/hello/w*d')
				export class CustomController {}
				`,
			},
			{
				code: `
				@Get('/:id')
				export class CustomController {}
				`,
			},
			{
				code: `
				@Controller()
				export class CustomController {}
				`,
			},
			{
				code: `
				@Controller({ host: 'example.org' })
				export class CustomController {}
				`,
			},
		],
		invalid: [
			{
				code: `
				@Controller('/v1')
				export class CustomController {}
				`,
				errors: [ { messageId: 'controllerPrefix' } ],
			},
			{
				code: `
				@Get('hello/world/')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
			},
			{
				code: `
				@Get('')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
			},
			{
				code: `
				@Post('/hello/world/')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Post' } } ],
			},
			{
				code: `
				@Get(':id')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
			},
		],
	} );
} );

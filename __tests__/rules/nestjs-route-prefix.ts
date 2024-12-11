import tsEsLintParser from '@typescript-eslint/parser';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { type Linter } from 'eslint';

import rule from '../../rules/nestjs-route-prefix';

const languageOptions: Linter.LanguageOptions = {
	ecmaVersion: 'latest',
	parser: tsEsLintParser,
	parserOptions: {
		ecmaVersion: 'latest',
		projectService: {
			allowDefaultProject: [ '*.ts*' ],
			tsconfigRootDir: __dirname + '/../../',
		},
	},
};

const ruleTester = new RuleTester();

describe( 'nestjs-routes', () => {
	ruleTester.run( 'nestjs-routes', rule, {
		valid: [
			{
				code: `
				@Get('/hello/w*d')
				export class CustomController {}
				`,
				languageOptions,
			},
			{
				code: `
				@Get('/:id')
				export class CustomController {}
				`,
				languageOptions,
			},
			{
				code: `
				@Controller()
				export class CustomController {}
				`,
				languageOptions,
			},
			{
				code: `
				@Controller({ host: 'example.org' })
				export class CustomController {}
				`,
				languageOptions,
			},
		],
		invalid: [
			{
				code: `
				@Controller('/v1')
				export class CustomController {}
				`,
				errors: [ { messageId: 'controllerPrefix' } ],
				languageOptions,
			},
			{
				code: `
				@Get('hello/world/')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
				languageOptions,
			},
			{
				code: `
				@Get('')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
				languageOptions,
			},
			{
				code: `
				@Post('/hello/world/')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Post' } } ],
				languageOptions,
			},
			{
				code: `
				@Get(':id')
				export class CustomController {}
				`,
				errors: [ { messageId: 'decoratorSlash', data: { decoratorName: 'Get' } } ],
				languageOptions,
			},
		],
	} );
} );

import rule from '../../rules/no-unused-vars-before-return';
import { Linter, RuleTester } from 'eslint';

const ruleTester = new RuleTester();
const parserOptions: Linter.ParserOptions = { ecmaVersion: 8 };
const errors = [
	{ message: 'Variables should not be assigned until just prior its first reference. An early return statement may leave this variable unused.' },
];

describe('no-async-foreach', () => {
	ruleTester.run('no-unused-vars-before-return', rule, {
		valid: [
			{
				code: `function foo() {
					const bar = 1;

					if (bar === 1) {
						return bar;
					}

					const baz = 2;
					return baz;
				}`,
				parserOptions,
			},
		],
		invalid: [
			{
				code: `function foo() {
					const bar = 1;

					if (bar === 1) {
						return bar;
					}

					bazzz = 3;
					return bazzz;
				}`,
				errors,
				parserOptions,
			},
		],
	});
});

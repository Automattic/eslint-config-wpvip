/**
 * Based on:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/configs/react.js
 */

const JsxA11yPlugin = require( 'eslint-plugin-jsx-a11y' );
const ReactHooksPlugin = require( 'eslint-plugin-react-hooks' );

const fixupPluginRulesInPlace = require( '../utils/fixup-plugin-rules' );

// eslint-plugin-react calls context methods that were removed in ESLint 10.
const ReactPlugin = fixupPluginRulesInPlace( require( 'eslint-plugin-react' ) );

/** @type import('eslint').Linter.Config[] */
module.exports = [
	ReactPlugin.configs.flat.recommended,
	ReactHooksPlugin.configs.flat.recommended,
	JsxA11yPlugin.flatConfigs.recommended,
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'jsx-a11y/label-has-associated-control': [
				'error',
				{
					assert: 'htmlFor',
				},
			],

			'jsx-a11y/media-has-caption': 'off',

			'jsx-a11y/no-noninteractive-tabindex': 'off',

			'jsx-a11y/role-has-required-aria-props': 'off',

			'jsx-quotes': 'error',

			'react/display-name': 'off',

			'react/jsx-curly-spacing': [
				'error',
				{
					when: 'always',
					children: true,
				},
			],

			'react/jsx-equals-spacing': 'error',

			'react/jsx-indent': [ 'error', 'tab' ],

			'react/jsx-indent-props': [ 'error', 'tab' ],

			'react/jsx-key': 'error',

			'react/jsx-tag-spacing': 'error',

			'react/no-children-prop': 'off',

			'react/prop-types': 'off',

			'react/react-in-jsx-scope': 'off',
		},
	},
];

# WordPress VIP ESLint plugin

This is an ESLint plugin to provide WordPress VIP's (internal) JavaScript and TypeScript coding standards. It extends [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin).

## Installation

Install `eslint` and `@automattic/eslint-plugin-wpvip` to your project.

```sh
npm install --save-dev eslint @automattic/eslint-plugin-wpvip
```

## Configuration

Create an `.eslintrc.js` file with your desired configs. **Note:** The `init` file allows you to avoid installing peer dependencies (available from `v0.5.0`).

```js
require( '@automattic/eslint-plugin-wpvip/init' );

module.exports = {
	extends: [
		'plugin:@automattic/wpvip/base',
	]
}
```

And that's it! Code editors that are configured to work with ESLint will automatically pick up the rules and flag any errors or warnings.

Tip: Set up a `lint` npm script in `package.json`:

```json
"scripts": {
  "lint": "eslint ."
}
```

You may also wish to define an `.eslintignore` file if there are files or paths that you do not want to lint.

## TypeScript

TypeScript rules are automatically added whenever your project has installed the [`typescript` NPM package]() as a dependency.

## Prettier

Prettier integration with ESLint is automatically enabled whenever your project has installed the [`prettier` NPM package](https://www.npmjs.com/package/prettier) as a dependency.

By default, this plugin provides the [WordPress prettier config](https://github.com/WordPress/gutenberg/blob/605aeb0f4f7d2225120e498f95ae27b9f56d77a3/packages/prettier-config/lib/index.js). You can define your own [`.prettierrc` configuration file](https://prettier.io/docs/en/configuration.html), which will be merged with the default. The following `.prettierrc` will use spaces for indentation instead of tabs:

```json
{
  "useTabs": false
}
```

If you have installed the `prettier` NPM package but wish to disable the automatic integration, add the `prettier-off` config to your `.eslintrc.js`:

```json
{
	"extends": [
		"plugin:@automattic/wpvip/base",
		"plugin:@automattic/wpvip/prettier-off"
	]
}
```

## JSDoc

The `base` config includes rules related to enforce [JSDoc](https://jsdoc.app/) best practices, but they are not triggered if your code does not provide `@param` or `@return` markers:

```js
/**
 * No rules are triggered for this docblock, because there are no param or
 * return markers
 */
 function myFunc1() {}

/**
 * Rules *are* triggered for this docblock.
 *
 * @param myArg
 */
 function myFunc2(myArg) {}
```

If you want to enforce the use of JSDoc, use the `jsdoc` config:

```json
{
	"extends": [
		"plugin:@automattic/wpvip/base",
		"plugin:@automattic/wpvip/jsdoc"
	]
}
```

## "Weak" configs

This plugin provides a few "weak" configs for legacy codebases that are working to transition to stronger standards. These configs downgrade select rules from the `base` config to warnings. Warnings will still be visible in code editors, but will not fail continous integration workflows.

These configs are intended for temporary use and should not be used long-term. We also do not recommend the use of tools like [eslines](https://github.com/Automattic/eslines) to ignore errors or warnings. While the intention is to prevent large-scale changes and transition slowly to stronger standards, the effect is usually that the transition stalls and stops completely.

Two "weak" configs are available: `weak` and `weak-typescript`. While pull requests on this project are always welcome, please carefully consider whether adding rules to these configs is truly necessary.

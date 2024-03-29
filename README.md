# WordPress VIP ESLint plugin

This is an ESLint plugin to provide WordPress VIP's (internal) JavaScript and TypeScript coding standards. It is inspired by and borrows from [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin).

## Installation

Install `eslint` and `@automattic/eslint-plugin-wpvip` to your project.

```sh
npm install --save-dev eslint @automattic/eslint-plugin-wpvip
```

## Contributing

See [CONTRIBUTING.md](https://github.com/Automattic/eslint-config-wpvip/blob/trunk/CONTRIBUTING.md) for details on development, testing, publishing, etc.

## Configuration

Create an `.eslintrc.js` file. **Note:** The `init` file allows you to avoid installing peer dependencies (available from `v0.5.0`).

```js
require( '@automattic/eslint-plugin-wpvip/init' );

module.exports = {
	extends: [ 'plugin:@automattic/wpvip/recommended' ],
	root: true,
};
```

And that's it! It works automatically with most Babel and TypeScript projects. Code editors that are configured to work with ESLint will automatically pick up the rules and flag any errors or warnings.

You may also wish to define an `.eslintignore` file if there are files or paths that you do not want to lint.

Package scripts can be useful to run linting and formatting commands automatically. Here are some suggested scripts for your project's `package.json`—only copy the ones that are useful to you. The `cmd:` scripts help you compose commands without repeating verbose CLI arguments.

```json
{
	"scripts": {
		"cmd:format": "prettier '**/*.(js|json|jsx|md|ts|tsx|yml|yaml)'",
		"cmd:lint": "eslint --ext 'js,jsx,ts,tsx'",
		"format": "npm run cmd:format -- --write",
		"format:check": "npm run cmd:format -- --check",
		"lint": "npm run cmd:lint .",
		"lint:fix": "npm run cmd:lint . -- --fix",
		"lint:ignore-warnings": "npm run cmd:lint . -- --quiet"
	}
}
```

**Note:** ESLint automatically ignores files listed in `.eslintignore` or you can target `.gitignore` using `--ignore-path`. Similarly, Prettier automatically ignores files listed in `.prettierignore` or you can target `.gitignore` using `--ignore-path`.

## Recommended config

The "recommended" config includes rules for JavaScript, TypeScript, Jest, and React, including rules related to formatting and white space. It is intended to be strict! Opinionated defaults keep our codebases consistent and reduce the friction we experience when context-switching between projects.

Of course, this recommended config may not be ideal for every project, so feel free to "build your own" using the available modular configs. The recommended config is equivalent to:

```js
module.exports = {
	extends: [
		'plugin:@automattic/wpvip/javascript',
		'plugin:@automattic/wpvip/typescript', // when "typescript" is installed
		'plugin:@automattic/wpvip/formatting',
		'plugin:@automattic/wpvip/testing', // when "jest" is installed
		'plugin:@automattic/wpvip/react', // when "react" is installed
		'plugin:@automattic/wpvip/prettier', // when "prettier" is installed
	],
};
```

Note that the order of configs can matter, since they can contain overrides. It is particularly important to add the `prettier` config last.

### Prettier

Install [WP Prettier](https://github.com/Automattic/wp-prettier) v2.x to benefit from additional formatting rules:

```sh
npm i --save-dev --save-exact "prettier@npm:wp-prettier@2.8.5"
```

This repo also provides a Prettier config, which you can use with the following `.prettierrc`:

```json
"@automattic/eslint-plugin-wpvip/prettierrc"
```

For maximum benefit, see [Prettier's documentation on enabling format-on-save in your editor](https://prettier.io/docs/en/editors.html). This enables you to concentrate on coding while Prettier handles formatting.

### Editorconfig

[Editorconfig](https://editorconfig.org/) provides additional formatting rules and works well with Prettier. Copy the [`.editorconfig` file](./.editorconfig) from this repo into your project.

## CLI

The `cli` config allows certain behaviors that are usually against best practice but are useful in a codebase that produces a CLI tool:

```js
module.exports = {
	extends: [ 'plugin:@automattic/wpvip/recommended', 'plugin:@automattic/wpvip/cli' ],
};
```

If your project is not a CLI tool but calls `process` methods occasionally, you probably don't need this config. Instead, disable those rules only where necessary and include an explanation:

```js
// Intentionally exiting because we have observed an unrecoverable error.
// eslint-disable-next-line no-process-exit
process.exit( 1 );
```

Note that `console.log` is still forbidden ([see here for an explanation](https://github.com/Automattic/eslint-config-wpvip/pull/198#issuecomment-2015322062)). If you're writing one-off Node scripts, you can disable the rule per file:

```js
/* eslint-disable no-console */
```

## JSDoc

JSDoc is considered optional, especially compared to better alternatives like TypeScript and OpenAPI documentation. If you want to enforce the use of JSDoc, use the `jsdoc` config:

```js
module.exports = {
	extends: [ 'plugin:@automattic/wpvip/recommended', 'plugin:@automattic/wpvip/jsdoc' ],
};
```

Note that rules that require `@param` and `@return` types are relaxed in TypeScript files.

## "Weak" configs

This plugin provides a few so-called "weak" configs for legacy codebases that are working to transition to stronger standards. These configs downgrade select rules from the `recommended` config to warnings. Warnings will still be visible in code editors and other outputs but will not fail continous integration workflows.

These configs are intended for temporary use and should not be used long-term. We also do not recommend the use of tools like [eslines](https://github.com/Automattic/eslines) to ignore errors or warnings. While the intention is to prevent large-scale changes and transition slowly to stronger standards, the effect is usually that the transition stalls and eventually stops completely.

Three "weak" configs are available: `weak-javascript`, `weak-typescript`, and `weak-testing`. While pull requests on this project are always welcome, please carefully consider whether adding rules to these configs is truly necessary. Ideally, we work to remove rules from these configs until they are no longer needed.

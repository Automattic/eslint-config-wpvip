# WordPress VIP ESLint plugin

This is an ESLint plugin to provide WordPress VIP's (internal) JavaScript and TypeScript coding standards. It is inspired by and borrows from [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin).

## Installation

Install `eslint` and `@automattic/eslint-plugin-wpvip` to your project.

```sh
npm install --save-dev eslint @automattic/eslint-plugin-wpvip
```

ESLint 9 (`^9.7.0`) and ESLint 10 are supported.

Optional integrations are auto-detected when your project also installs `typescript`, `jest`, `react`, or `prettier`. These packages are declared as optional peer dependencies so consumers can opt in to the stacks they actually use.

### ESLint 10

`eslint-plugin-jsx-a11y` and `eslint-plugin-react` work with ESLint 10 (this plugin shims `eslint-plugin-react` with [`@eslint/compat`](https://www.npmjs.com/package/@eslint/compat)), but they have not yet published releases that declare ESLint 10 in their peer dependencies. To avoid `ERESOLVE` errors with npm, add these overrides to your project's `package.json`. `$eslint` refers to your project's own `eslint` entry, so `eslint` must be listed directly in `devDependencies` (or `dependencies`):

```json
"overrides": {
	"eslint-plugin-jsx-a11y": { "eslint": "$eslint" },
	"eslint-plugin-react": { "eslint": "$eslint" }
}
```

### Upgrading to 2.0

2.0 adds ESLint 10 support and contains these breaking changes:

- **`eslint-plugin-import` is replaced by [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x).** It is registered under the `import` namespace, so rule IDs such as `import/order` and `eslint-disable` comments are unchanged. However:
  - Settings now use the `import-x/` prefix. `import/*` settings (`import/resolver`, `import/internal-regex`, `import/core-modules`, …) are ignored; rename them, e.g. `import/resolver` → `import-x/resolver`.
  - Do not register `eslint-plugin-import` under `import` yourself; ESLint will throw `Cannot redefine plugin "import"`.
  - `import/enforce-node-protocol-usage` does not exist in `eslint-plugin-import-x`; remove it from your config.
  - `eslint-plugin-import` is no longer installed with this package. If your config requires it, add it to your own `devDependencies`.
- **JavaScript files are parsed with ESLint's default parser (espree)** instead of `@babel/eslint-parser`. Your project's Babel config is no longer applied, so syntax that only Babel understands (e.g. Flow or legacy decorators) is not supported, and `parserOptions.babelOptions` / `requireConfigFile` are ignored. The ECMAScript version follows ESLint's default (`latest`), so new built-in globals (e.g. `SuppressedError`, `Iterator`) are recognized.
- **Deprecated core formatting rules moved to [`@stylistic/eslint-plugin`](https://eslint.style/).** ESLint is removing its formatting rules, so the `formatting`, `javascript` and `react` configs now use `@stylistic/*` rules with the same options (e.g. `indent` → `@stylistic/indent`, `func-call-spacing` → `@stylistic/function-call-spacing`). Rename any overrides or `eslint-disable` comments for these rules; overriding the old core names no longer has any effect. `no-new-symbol` is replaced by `no-new-native-nonconstructor`.
- **The `jsdoc` config** no longer enables `jsdoc/newline-after-description`, which was removed from `eslint-plugin-jsdoc` and made the config fail to load.
- **Node.js `^20.19.0 || ^22.13.0 || >=24` is required**, including with ESLint 9 (`@eslint/compat`, used to support `eslint-plugin-react` on ESLint 10, requires it).

## Contributing

See [CONTRIBUTING.md](https://github.com/Automattic/eslint-config-wpvip/blob/trunk/CONTRIBUTING.md) for details on development, testing, publishing, etc.

## Configuration

Create an `eslint.config.js` file:

```js
const wpvip = require( '@automattic/eslint-plugin-wpvip' );

module.exports = [ ...wpvip.configs.recommended ];
```

And that's it! It works automatically with most JavaScript and TypeScript projects. Code editors that are configured to work with ESLint will automatically pick up the rules and flag any errors or warnings.

If your project uses only JavaScript, you do not need to install the optional peers. If you use the modular `typescript`, `testing`, `react`, or `prettier` configs directly, install the corresponding package in your project first.

To skip files or paths, add a config object with `ignores` (for example `{ ignores: [ 'dist/**' ] }`) to the array.

Package scripts can be useful to run linting and formatting commands automatically. Here are some suggested scripts for your project's `package.json`—only copy the ones that are useful to you. The `cmd:` scripts help you compose commands without repeating verbose CLI arguments.

```json
{
	"scripts": {
		"cmd:format": "prettier '**/*.(js|json|jsx|md|ts|tsx|yml|yaml)'",
		"cmd:lint": "eslint",
		"format": "npm run cmd:format -- --write",
		"format:check": "npm run cmd:format -- --check",
		"lint": "npm run cmd:lint .",
		"lint:fix": "npm run cmd:lint . -- --fix",
		"lint:ignore-warnings": "npm run cmd:lint . -- --quiet"
	}
}
```

**Note:** ESLint reads ignore patterns from the `ignores` key in `eslint.config.js`; to reuse `.gitignore`, see [`includeIgnoreFile`](https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files). Prettier automatically ignores files listed in `.prettierignore` or you can target `.gitignore` using `--ignore-path`.

## Recommended config

The "recommended" config includes rules for JavaScript, TypeScript, Jest, and React, including rules related to formatting and white space. It is intended to be strict! Opinionated defaults keep our codebases consistent and reduce the friction we experience when context-switching between projects.

Of course, this recommended config may not be ideal for every project, so feel free to "build your own" using the available modular configs. The recommended config is equivalent to:

```js
const wpvip = require( '@automattic/eslint-plugin-wpvip' );

module.exports = [
	...wpvip.configs.javascript,
	...wpvip.configs.formatting,
	...wpvip.configs.typescript, // when "typescript" is installed
	...wpvip.configs.testing, // when "jest" is installed
	...wpvip.configs.react, // when "react" is installed
	...wpvip.configs.prettier, // when "prettier" is installed
];
```

Note that the order of configs can matter, since they can contain overrides. It is particularly important to add the `prettier` config last.

### Prettier

Install [WP Prettier](https://github.com/Automattic/wp-prettier) v3.x to benefit from additional formatting rules:

```sh
npm i --save-dev --save-exact "prettier@npm:wp-prettier@3.0.3"
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
module.exports = [ ...wpvip.configs.recommended, ...wpvip.configs.cli ];
```

If your project is not a CLI tool but spawns child processes occasionally, you probably don't need this config. Instead, disable those rules only where necessary and include an explanation:

```js
// Running a fixed, trusted command.
// eslint-disable-next-line security/detect-child-process
const { execSync } = require( 'child_process' );
```

Note that `console.log` is still forbidden ([see here for an explanation](https://github.com/Automattic/eslint-config-wpvip/pull/198#issuecomment-2015322062)). If you're writing one-off Node scripts, you can disable the rule per file:

```js
/* eslint-disable no-console */
```

## JSDoc

JSDoc is considered optional, especially compared to better alternatives like TypeScript and OpenAPI documentation. If you want to enforce the use of JSDoc, use the `jsdoc` config:

```js
module.exports = [ ...wpvip.configs.recommended, ...wpvip.configs.jsdoc ];
```

Note that rules that require `@param` and `@return` types are relaxed in TypeScript files.

## "Weak" configs

This plugin provides a few so-called "weak" configs for legacy codebases that are working to transition to stronger standards. These configs downgrade select rules from the `recommended` config to warnings. Warnings will still be visible in code editors and other outputs but will not fail continous integration workflows.

These configs are intended for temporary use and should not be used long-term. We also do not recommend the use of tools like [eslines](https://github.com/Automattic/eslines) to ignore errors or warnings. While the intention is to prevent large-scale changes and transition slowly to stronger standards, the effect is usually that the transition stalls and eventually stops completely.

Three "weak" configs are available: `weak-javascript`, `weak-typescript`, and `weak-testing`. While pull requests on this project are always welcome, please carefully consider whether adding rules to these configs is truly necessary. Ideally, we work to remove rules from these configs until they are no longer needed.

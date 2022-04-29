# WordPress VIP ESLint plugin

This is an ESLint plugin to provide WordPress VIP's (internal) JavaScript and TypeScript coding standards. It is designed to extend [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin), but allows you to choose which preset(s) you want to use.

## Installation

Install `eslint` and `@automattic/eslint-plugin-wpvip` to your project.

```sh
npm install --save-dev eslint @automattic/eslint-plugin-wpvip
```

If your project uses TypeScript, make sure `typescript` is installed as well.

## Configuration

Create an `.eslintrc.json` file with your desired presets. Here is an example that would suit a project that uses React and TypeScript and has Jest unit tests:

```
{
	"extends": [
		"plugin:@wordpress/eslint-plugin/recommended",
		"plugin:@automattic/wpvip/base",
		"plugin:@automattic/wpvip/react",
		"plugin:@automattic/wpvip/testing",
		"plugin:@automattic/wpvip/typescript",
	]
}
```

And that's it! Code editors that are configured to work with ESLint will automatically pick up the rulesets and flag any errors or warnings.

See the `configs` directory and [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin) for available presets.

Tip: setup a `lint` npm script in `package.json`:

```
"scripts": {
  "lint": "eslint .",
  "test": "npm run lint"
}
```

## Migrating

Changing linter rules can be tricky and lead to huge PRs. To ease adoption, we can add [eslines](https://github.com/Automattic/eslines) to our project, to turn lint errors into warnings.

```sh
npm i --save-dev eslines
```

Add the default `.eslines.json` to your project root:

```
{
    "branches": {
        "default": ["downgrade-unmodified-lines"]
    },
    "processors": {
        "downgrade-unmodified-lines": {
            "remote": "origin/master",
            "rulesNotToDowngrade": ["no-unused-vars"]
        }
    }
}
```

Then modify the `npm run lint` command to pass through to `eslines`:

```
"scripts": {
  "lint": "eslint -f json . | eslines"
}
```

Errors will still appear in any code editor that supports ESLint, but tests will continue to pass as the code is migrated to the new rulesets.

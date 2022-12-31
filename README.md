# WordPress VIP ESLint plugin

This is an ESLint plugin to provide WordPress VIP's (internal) JavaScript and TypeScript coding standards. It extends [`@wordpress/eslint-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin).

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
		"plugin:@automattic/wpvip/base",
		"plugin:@automattic/wpvip/react",
		"plugin:@automattic/wpvip/testing",
		"plugin:@automattic/wpvip/typescript"
	]
}
```

And that's it! Code editors that are configured to work with ESLint will automatically pick up the rulesets and flag any errors or warnings.

Tip: setup a `lint` npm script in `package.json`:

```
"scripts": {
  "lint": "eslint .",
  "test": "npm run lint"
}
```

## Available presets

Use these presets in the `extends` section of your `eslintrc`:

- `plugin:@automattic/wpvip/base`
- `plugin:@automattic/wpvip/prettier`
- `plugin:@automattic/wpvip/react`
- `plugin:@automattic/wpvip/testing`
- `plugin:@automattic/wpvip/typescript`
- `plugin:@automattic/wpvip/typescript-migration`
- `plugin:@automattic/wpvip/typescript-strict`

## Prettier

This plugin comes with support for `prettier`. Configure it by [adding a `.prettierrc`](https://prettier.io/docs/en/configuration.html) to your project and enabling the `@automattic/wpvip/prettier` preset:

```
{
	"extends": [
		"plugin:@automattic/wpvip/base",
		"plugin:@automattic/wpvip/prettier"
	]
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
test

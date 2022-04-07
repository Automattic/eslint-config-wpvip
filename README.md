# Overview
ESLint configs to enforce VIP's (internal) JS coding standards

# Installation

To add `eslint-config-wpvip` to you project, first install it to `package.json` (not yet published to NPM, make sure to use the latest commit hash):

```
"devDependencies": {
  ...
  "eslint-config-wpvip": "github:automattic/eslint-config-wpvip#984b8a8",
  ...
}
```

And install the required dependencies:

```
npm i --save-dev @babel/eslint-parser@7 eslint@7 eslint-plugin-flowtype@5 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-no-async-foreach eslint-plugin-react@7 eslint-plugin-wpcalypso@4 eslint-plugin-json@3 eslint-plugin-jest@25
```

Then in your `package.json`, add:

```
"eslintConfig": {
  "extends": "wpvip"
}
```

And that's it! Editors that are configured to work with eslint will automatically pick up the rulesets and flag any errors or warnings.

To run eslint manually (or as part of automated tests), simply run:

```
./node_modules/eslint/bin/eslint.js .
```

Or, the preffered way is to setup a `lint` npm script. Back in `package.json`:

```
"scripts": {
  "lint": "eslint .",
  "test": "npm run lint"
}
```

Migrating
==============

Changing linter rules can be tricky and lead to huge PRs. To ease adoption, we can add [eslines](https://github.com/Automattic/eslines) to our project, to turn lint errors into warnings.

```
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

Errors will still appear in any code editor that supports eslint, but tests will continue to pass as the code is migrated to the new standard.

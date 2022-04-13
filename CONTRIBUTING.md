# Contributing to eslint-config-wpvip

## Getting Started

Clone this repo & run `npm install`.

The rules for this shared config are declared in [index.js](./index.js) and are automatically applied to the code in this repo.

## Automated Testing

We're using jest to confirm that our configuration does what we think it will.

When you modify the rules, please add cases to the following files:

* `__fixtures__/allowed.js` -- Syntax that should be allowed according to the rule(s) affected by your proposed change
* `__fixtures__/disallowed.js` -- Syntax that should *NOT* be allowed according to the rule(s) affected by your proposed change

After changing the rules or the `disallowed` fixture, run the following to update the snapshot of jest errors found:

`npm run jest --updateSnapshot`

...and commit the change to the snapshot file in your branch / PR.

// @stylistic/eslint-plugin is ESM-only. Node's `require( esm )` returns the
// plugin itself, but other loaders (e.g. Jest) return the module namespace.
const StylisticModule = require( '@stylistic/eslint-plugin' );

module.exports = StylisticModule.default ?? StylisticModule;

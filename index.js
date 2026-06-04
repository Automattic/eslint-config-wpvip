const configs = require( './configs' );
const plugin = require( './plugin' );

plugin.configs = configs;
plugin.typescriptResolverPath = require( './configs/javascript' ).typescriptResolverPath;

module.exports = plugin;

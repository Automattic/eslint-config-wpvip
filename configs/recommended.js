const debugLog = require( '../utils/debug-log' );
const isPackageInstalled = require( '../utils/is-package-installed' );

const config = {
	extends: [ require.resolve( './javascript' ) ],
};

if ( isPackageInstalled( 'typescript' ) ) {
	config.extends.push( require.resolve( './typescript' ) );
}

config.extends.push( require.resolve( './formatting' ) );

if ( isPackageInstalled( 'jest' ) ) {
	config.extends.push( require.resolve( './testing' ) );
}

if ( isPackageInstalled( 'react' ) ) {
	config.extends.push( require.resolve( './react' ) );
}

if ( isPackageInstalled( 'prettier' ) ) {
	config.extends.push( require.resolve( './prettier' ) );
}

debugLog( `Using the following configs:\n${ config.extends.join( '\n' ) }` );

module.exports = config;

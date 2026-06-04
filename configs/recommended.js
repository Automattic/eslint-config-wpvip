const isPackageInstalled = require( '../utils/is-package-installed' );

/** @type import('eslint').Linter.Config[] */
const configs = [ ...require( './javascript' ), ...require( './formatting' ) ];

if ( isPackageInstalled( 'typescript' ) ) {
	configs.push( ...require( './typescript' ) );
}

if ( isPackageInstalled( 'jest' ) ) {
	configs.push( ...require( './testing' ) );
}

if ( isPackageInstalled( 'react' ) ) {
	configs.push( ...require( './react' ) );
}

if ( isPackageInstalled( 'prettier' ) ) {
	configs.push( ...require( './prettier' ) );
}

configs.typescriptResolverPath = require( './javascript' ).typescriptResolverPath;

module.exports = configs;

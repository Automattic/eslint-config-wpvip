/** @type {Record<string, import('eslint').Linter.Config[]>} */
const configs = {
	base: require( './base' ), // synonym for javascript
	cli: require( './cli' ),
	formatting: require( './formatting' ),
	javascript: require( './javascript' ),
	jsdoc: require( './jsdoc' ),
	recommended: require( './recommended' ),
	'weak-javascript': require( './weak-javascript' ),
	'weak-testing': require( './weak-testing' ),
	'weak-typescript': require( './weak-typescript' ),
};

// Optional configs are lazy-loaded to avoid MODULE_NOT_FOUND crashes when
// optional peers (typescript, react, jest, prettier) are not installed.
// These are only accessed when explicitly requested (e.g., via direct extends)
// or via recommended config, which guards their loading via loadOptionalConfig.
const optionalConfigs = [ 'prettier', 'react', 'testing', 'typescript' ];

function requireOptionalConfig( name ) {
	switch ( name ) {
		case 'prettier':
			return require( './prettier' );
		case 'react':
			return require( './react' );
		case 'testing':
			return require( './testing' );
		case 'typescript':
			return require( './typescript' );
		default:
			throw new Error( `Unknown optional config: ${ name }` );
	}
}

for ( const name of optionalConfigs ) {
	Object.defineProperty( configs, name, {
		enumerable: true,
		configurable: true,
		get() {
			return requireOptionalConfig( name );
		},
	} );
}

module.exports = configs;

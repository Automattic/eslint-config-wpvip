/**
 * External dependencies
 */
const fs = require( 'fs' );
const path = require( 'path' );

/**
 * Internal dependencies
 */
const javascriptConfig = require( '../configs/javascript' );

describe( 'resolver settings', () => {
	it( 'configures eslint-plugin-import with an absolute resolver path', () => {
		const entry = javascriptConfig.find(
			item => item && item.settings && item.settings[ 'import/resolver' ]
		);
		expect( entry ).toBeDefined();

		const resolverMap = entry.settings[ 'import/resolver' ];
		const customKeys = Object.keys( resolverMap ).filter( name => 'node' !== name );
		expect( customKeys ).toHaveLength( 1 );

		const resolverKey = customKeys[ 0 ];
		expect( path.isAbsolute( resolverKey ) ).toBe( true );
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		expect( fs.existsSync( resolverKey ) ).toBe( true );
		expect( resolverKey ).toEqual( expect.stringContaining( 'eslint-import-resolver-typescript' ) );

		// eslint-disable-next-line security/detect-non-literal-require
		const resolverModule = require( resolverKey );
		expect( resolverModule.interfaceVersion ).toBe( 2 );
		expect( typeof resolverModule.resolve ).toBe( 'function' );

		// eslint-disable-next-line security/detect-object-injection
		expect( typeof resolverMap[ resolverKey ] ).toBe( 'object' );

		expect( resolverKey ).toBe( javascriptConfig.typescriptResolverPath );
		expect( require( '..' ).typescriptResolverPath ).toBe( resolverKey );
	} );

	it( 'exposes typescriptResolverPath on the plugin entry point', () => {
		const plugin = require( '..' );
		expect( typeof plugin.typescriptResolverPath ).toBe( 'string' );
		expect( path.isAbsolute( plugin.typescriptResolverPath ) ).toBe( true );
	} );
} );

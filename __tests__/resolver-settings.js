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
	it( 'configures import-x with node and TypeScript resolver instances', () => {
		const entry = javascriptConfig.find(
			item => item && item.settings && item.settings[ 'import-x/resolver-next' ]
		);
		expect( entry ).toBeDefined();

		const resolvers = entry.settings[ 'import-x/resolver-next' ];
		expect( resolvers.map( resolver => resolver.name ) ).toEqual( [
			'eslint-plugin-import-x:node',
			'eslint-import-resolver-typescript',
		] );
		for ( const resolver of resolvers ) {
			expect( resolver.interfaceVersion ).toBe( 3 );
			expect( typeof resolver.resolve ).toBe( 'function' );
		}
	} );

	it( 'resolves the bundled TypeScript resolver by absolute path', () => {
		const { typescriptResolverPath } = javascriptConfig;
		expect( path.isAbsolute( typescriptResolverPath ) ).toBe( true );
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		expect( fs.existsSync( typescriptResolverPath ) ).toBe( true );
		expect( typescriptResolverPath ).toEqual(
			expect.stringContaining( 'eslint-import-resolver-typescript' )
		);
		expect( require( '..' ).typescriptResolverPath ).toBe( typescriptResolverPath );
	} );

	it( 'exposes typescriptResolverPath on the plugin entry point', () => {
		const plugin = require( '..' );
		expect( typeof plugin.typescriptResolverPath ).toBe( 'string' );
		expect( path.isAbsolute( plugin.typescriptResolverPath ) ).toBe( true );
	} );
} );

/**
 * External dependencies
 */
const { ESLint } = require( 'eslint' );
const fs = require( 'fs' );
const path = require( 'path' );

/**
 * Internal dependencies
 */
const javascriptConfig = require( '../configs/javascript' );

describe( 'resolver settings', () => {
	it( 'resolves relative imports of TypeScript files', async () => {
		const eslint = new ESLint( {
			cwd: path.resolve( __dirname, '..' ),
			overrideConfigFile: true,
			overrideConfig: javascriptConfig,
		} );
		const filePath = path.resolve( __dirname, '..', '__fixtures__', 'resolver.js' );
		const lint = async code => {
			const [ { messages } ] = await eslint.lintText( code, { filePath } );
			return messages.filter( message => 'import/no-unresolved' === message.ruleId );
		};

		expect( await lint( "export { unusedEs6Import } from './stub/unusedEs6Import';\n" ) ).toEqual(
			[]
		);
		expect( await lint( "export { missing } from './stub/doesNotExist';\n" ) ).toHaveLength( 1 );
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

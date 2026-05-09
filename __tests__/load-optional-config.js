jest.mock( '../utils/debug-log', () => jest.fn() );
jest.mock( '../utils/is-package-installed', () => jest.fn() );

const debugLog = require( '../utils/debug-log' );
const isPackageInstalled = require( '../utils/is-package-installed' );
const loadOptionalConfig = require( '../utils/load-optional-config' );

describe( 'loadOptionalConfig', () => {
	beforeEach( () => {
		jest.clearAllMocks();
	} );

	it( 'skips loading when the package is not installed', () => {
		const loadConfig = jest.fn();

		isPackageInstalled.mockReturnValue( false );

		expect( loadOptionalConfig( 'react', loadConfig ) ).toEqual( [] );
		expect( loadConfig ).not.toHaveBeenCalled();
	} );

	it( 'loads the config when the package is installed', () => {
		const config = [ { name: 'react' } ];

		isPackageInstalled.mockReturnValue( true );

		expect( loadOptionalConfig( 'react', () => config ) ).toBe( config );
	} );

	it( 'skips missing optional modules', () => {
		const error = new Error( "Cannot find module 'prettier'" );
		error.code = 'MODULE_NOT_FOUND';

		isPackageInstalled.mockReturnValue( true );

		expect(
			loadOptionalConfig( 'prettier', () => {
				throw error;
			} )
		).toEqual( [] );

		expect( debugLog ).toHaveBeenCalledWith( expect.stringContaining( 'prettier' ) );
	} );

	it( 'rethrows non-module-loading errors', () => {
		const error = new Error( 'boom' );

		isPackageInstalled.mockReturnValue( true );

		expect( () =>
			loadOptionalConfig( 'typescript', () => {
				throw error;
			} )
		).toThrow( error );
	} );

	it( 'rethrows MODULE_NOT_FOUND for unrelated modules', () => {
		const error = new Error( "Cannot find module 'some-other-lib'" );
		error.code = 'MODULE_NOT_FOUND';

		isPackageInstalled.mockReturnValue( true );

		expect( () =>
			loadOptionalConfig( 'prettier', () => {
				throw error;
			} )
		).toThrow( error );
	} );

	it( 'swallows MODULE_NOT_FOUND for subpaths of the optional peer', () => {
		const error = new Error( "Cannot find module 'react/lib/something'" );
		error.code = 'MODULE_NOT_FOUND';

		isPackageInstalled.mockReturnValue( true );

		expect(
			loadOptionalConfig( 'react', () => {
				throw error;
			} )
		).toEqual( [] );

		expect( debugLog ).toHaveBeenCalledWith( expect.stringContaining( 'react' ) );
	} );
} );

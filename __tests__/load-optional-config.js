jest.mock( '../utils/debug-log', () => jest.fn() );
jest.mock( '../utils/is-package-installed', () => jest.fn() );

const debugLog = require( '../utils/debug-log' );
const isPackageInstalled = require( '../utils/is-package-installed' );
const loadOptionalConfig = require( '../utils/load-optional-config' );

function moduleNotFoundError( moduleName ) {
	const error = new Error( `Cannot find module '${ moduleName }'` );
	error.code = 'MODULE_NOT_FOUND';
	return error;
}

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

	it.each( [
		{ missing: 'the optional peer', packageName: 'prettier', missingModule: 'prettier' },
		{
			missing: 'a subpath of the optional peer',
			packageName: 'react',
			missingModule: 'react/lib/something',
		},
	] )( 'skips the config when $missing is missing', ( { packageName, missingModule } ) => {
		isPackageInstalled.mockReturnValue( true );

		expect(
			loadOptionalConfig( packageName, () => {
				throw moduleNotFoundError( missingModule );
			} )
		).toEqual( [] );

		expect( debugLog ).toHaveBeenCalledWith( expect.stringContaining( packageName ) );
	} );

	it.each( [
		{ errors: 'non-module-loading errors', packageName: 'typescript', error: new Error( 'boom' ) },
		{
			errors: 'MODULE_NOT_FOUND for unrelated modules',
			packageName: 'prettier',
			error: moduleNotFoundError( 'some-other-lib' ),
		},
	] )( 'rethrows $errors', ( { packageName, error } ) => {
		isPackageInstalled.mockReturnValue( true );

		expect( () =>
			loadOptionalConfig( packageName, () => {
				throw error;
			} )
		).toThrow( error );
	} );
} );

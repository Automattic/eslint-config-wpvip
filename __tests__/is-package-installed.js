jest.mock( '../utils/debug-log', () => jest.fn() );

function loadIsPackageInstalledWith( packageJson ) {
	jest.resetModules();

	jest.doMock( 'find-package-json', () => () => [ packageJson ][ Symbol.iterator ]() );

	return require( '../utils/is-package-installed' );
}

describe( 'isPackageInstalled', () => {
	beforeEach( () => {
		jest.clearAllMocks();
	} );

	it( 'returns true for dependencies', () => {
		const isPackageInstalled = loadIsPackageInstalledWith( {
			__path: '/project/package.json',
			dependencies: {
				react: '^19.0.0',
			},
		} );

		expect( isPackageInstalled( 'react' ) ).toBe( true );
	} );

	it( 'returns true for devDependencies', () => {
		const isPackageInstalled = loadIsPackageInstalledWith( {
			__path: '/project/package.json',
			devDependencies: {
				typescript: '^6.0.0',
			},
		} );

		expect( isPackageInstalled( 'typescript' ) ).toBe( true );
	} );

	it( 'returns false for peerDependencies without an installed dependency entry', () => {
		const isPackageInstalled = loadIsPackageInstalledWith( {
			__path: '/project/package.json',
			peerDependencies: {
				typescript: '^6.0.0',
			},
		} );

		expect( isPackageInstalled( 'typescript' ) ).toBe( false );
	} );
} );

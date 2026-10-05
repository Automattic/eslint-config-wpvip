jest.mock( '../utils/debug-log', () => jest.fn() );

function loadIsPackageInstalledWith( packageJson ) {
	jest.resetModules();

	jest.doMock( 'find-package-json', () => () => [ packageJson ][ Symbol.iterator ]() );

	return require( '../utils/is-package-installed' );
}

describe( 'isPackageInstalled', () => {
	it.each( [
		[ true, 'dependencies' ],
		[ true, 'devDependencies' ],
		// A peerDependencies entry alone doesn't mean the project installs it.
		[ false, 'peerDependencies' ],
	] )( 'returns %p for a package listed only in %s', ( expected, dependencyType ) => {
		const isPackageInstalled = loadIsPackageInstalledWith( {
			__path: '/project/package.json',
			[ dependencyType ]: {
				typescript: '^6.0.0',
			},
		} );

		expect( isPackageInstalled( 'typescript' ) ).toBe( expected );
	} );
} );

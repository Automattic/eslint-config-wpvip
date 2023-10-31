/**
 * External dependencies
 */
const fs = require( 'fs' );

/**
 * Internal dependencies
 */
const configs = require( '../configs' );

const configNames = Object.keys( configs ).sort();

describe( 'configs', () => {
	it( 'do not use disallowed characters in object keys', () => {
		configNames.forEach( name => {
			expect( name ).toMatch( /^[a-z\-/]+$/ );
		} );
	} );

	it( 'are all exported', () => {
		// This test makes sure we don't forget to export a config.
		const expectedNames = fs
			.readdirSync( 'configs' )
			.filter( path => 'index.js' !== path )
			// eslint-disable-next-line security/detect-non-literal-fs-filename
			.filter( path => ! fs.statSync( `configs/${ path }` ).isDirectory() )
			.map( path => path.replace( /\.js$/, '' ) )
			.sort();

		expect( configNames ).toEqual( expectedNames );
	} );
} );

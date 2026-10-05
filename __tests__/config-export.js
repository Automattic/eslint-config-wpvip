/**
 * External dependencies
 */
const { ESLint } = require( 'eslint' );
const fs = require( 'fs' );
const path = require( 'path' );

/**
 * Internal dependencies
 */
const configs = require( '../configs' );

const configNames = Object.keys( configs ).sort();

// Lint each distinct config combined with recommended. Skip `recommended`
// itself (combining it with itself is a no-op, and check-fixtures.js snapshots
// its output for the same fixtures) and aliases of another config (`base` is
// the same array as `javascript`).
const combinedConfigNames = configNames.filter(
	name =>
		'recommended' !== name &&
		// eslint-disable-next-line security/detect-object-injection
		configNames.findLast( other => configs[ other ] === configs[ name ] ) === name
);

describe( 'configs', () => {
	it( 'are all exported', () => {
		// This test makes sure we don't forget to export a config.
		const expectedNames = fs
			.readdirSync( 'configs' )
			.filter( file => 'index.js' !== file )
			// eslint-disable-next-line security/detect-non-literal-fs-filename
			.filter( file => ! fs.statSync( `configs/${ file }` ).isDirectory() )
			.map( file => file.replace( /\.js$/, '' ) )
			.sort();

		expect( configNames ).toEqual( expectedNames );
	} );

	it.each( combinedConfigNames )(
		'%s loads and lints JavaScript and TypeScript when combined with recommended',
		async name => {
			const root = path.resolve( __dirname, '..' );
			const eslint = new ESLint( {
				cwd: root,
				ignore: false,
				overrideConfigFile: true,
				// eslint-disable-next-line security/detect-object-injection
				overrideConfig: [ ...configs.recommended, ...configs[ name ] ],
			} );

			const results = await eslint.lintFiles(
				[ 'javascript.js', 'typescript.ts', 'typescript.test.ts', 'typescript-react.tsx' ].map(
					fixture => path.resolve( root, '__fixtures__', fixture )
				)
			);

			for ( const { messages } of results ) {
				expect( messages.filter( message => message.fatal ) ).toEqual( [] );
			}
		}
	);

	it( 'react config makes `eslint .` include .jsx files', async () => {
		const eslint = new ESLint( {
			cwd: path.resolve( __dirname, '..' ),
			overrideConfigFile: true,
			overrideConfig: configs.recommended,
		} );

		// Flat config returns no config for files no `files` pattern matches.
		expect( await eslint.calculateConfigForFile( 'src/component.jsx' ) ).toBeDefined();
	} );
} );

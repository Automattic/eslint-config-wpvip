const fs = require( 'fs' );
const path = require( 'path' );
const eslint = require( 'eslint' );

const checkFile = fileName => {
	const resolvedPath = path.resolve( __dirname, fileName );
	const cli = new eslint.CLIEngine();
	const fileContents = fs.readFileSync( resolvedPath, 'utf8' );
	return cli.executeOnText( fileContents );
};

const getErrors = fileName => checkFile( fileName ).results[ 0 ].messages;

describe( 'check the allowed fixture', () => {
	it( 'allowed fixture has no errors', () => {
		expect( getErrors( '../__fixtures__/allowed.js' ) ).toStrictEqual( [] );
	} );
} );

describe( 'check the disallowed fixture', () => {
	it( 'disallowed fixture errors match snapshot', () => {
		expect( getErrors( '../__fixtures__/disallowed.js' ) ).toMatchSnapshot();
	} );
} );

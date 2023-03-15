const { ESLint } = require( 'eslint' );
const path = require( 'path' );

async function getLintMessages( type, fixture ) {
	const paths = [ __dirname, '..', '__fixtures__', type ];
	const eslint = new ESLint( {
		ignore: false,
		overrideConfigFile: path.resolve( ...paths, 'eslintrc.js' ),
		useEslintrc: false,
	} );

	const [ { messages } ] = await eslint.lintFiles(
		path.resolve( ...paths, fixture ),
	);

	return messages;
}

describe( 'linting', () => {
	it.each( [
		[ 'base', 'allowed.js' ],
		[ 'cli', 'allowed.js' ],
		[ 'prettier', 'allowed.js' ],
		[ 'typescript', 'allowed.ts' ],
		[ 'typescript-strict', 'allowed.ts' ],
	] )( '%s %s fixture produces no errors', async ( type, fixture ) => {
		// Allowed fixtures should produce no lint messages.
		expect( await getLintMessages( type, fixture ) ).toStrictEqual( [] );
	} );

	it.each( [
		[ 'base', 'disallowed.js' ],
		[ 'cli', 'disallowed.js' ],
		[ 'prettier', 'disallowed.js' ],
		[ 'typescript', 'disallowed.ts' ],
		[ 'typescript-strict', 'disallowed.ts' ],
	] )( '%s %s fixture matches snapshot', async ( type, fixture ) => {
		// Disallowed fixtures produce messages that should match a snapshot.
		expect( await getLintMessages( type, fixture ) ).toMatchSnapshot();
	} );
} );

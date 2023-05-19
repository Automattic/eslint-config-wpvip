const { ESLint } = require( 'eslint' );
const path = require( 'path' );

async function getLintMessages( fixture ) {
	const rootPaths = [ __dirname, '..' ];
	const eslint = new ESLint( {
		ignore: false,
		overrideConfigFile: path.resolve( ...rootPaths, '.eslintrc.js' ),
		useEslintrc: false,
	} );

	const [ { messages } ] = await eslint.lintFiles(
		path.resolve( ...rootPaths, '__fixtures__', fixture )
	);

	return messages;
}

describe( 'linting', () => {
	it.each( [ 'javascript.js', 'typescript.ts' ] )( '%s fixture matches snapshot', async fixture => {
		expect( await getLintMessages( fixture ) ).toMatchSnapshot();
	} );
} );

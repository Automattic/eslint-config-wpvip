const { ESLint } = require( 'eslint' );
const path = require( 'path' );

async function getLintMessages( fixture ) {
	const rootPaths = [ __dirname, '..' ];
	const eslint = new ESLint( {
		ignore: false,
		overrideConfigFile: path.resolve( ...rootPaths, 'eslint.config.js' ),
		baseConfig: null,
	} );

	const [ { messages } ] = await eslint.lintFiles(
		path.resolve( ...rootPaths, '__fixtures__', fixture )
	);

	// ESLint 10 removed `nodeType` from lint messages. Strip it so snapshots
	// match across supported ESLint versions.
	return messages.map( ( { nodeType, ...message } ) => message );
}

describe( 'linting', () => {
	it.each( [
		'javascript.js',
		'javascript-missing-eol.js',
		'typescript.ts',
		'typescript.test.ts',
		'typescript-react.tsx',
	] )( '%s fixture matches snapshot', async fixture => {
		expect( await getLintMessages( fixture ) ).toMatchSnapshot();
	} );
} );

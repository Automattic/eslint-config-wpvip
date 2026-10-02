const { ESLint } = require( 'eslint' );
const path = require( 'path' );

const configs = require( '../configs' );

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

// The recommended config ends with the prettier config, which turns the
// formatting rules off. Lint without it so the formatting rules are covered.
describe( 'formatting rules', () => {
	it( 'formatting.js fixture matches snapshot', async () => {
		const eslint = new ESLint( {
			cwd: path.resolve( __dirname, '..' ),
			ignore: false,
			overrideConfigFile: true,
			overrideConfig: [ ...configs.javascript, ...configs.formatting ],
		} );

		const [ { messages } ] = await eslint.lintFiles(
			path.resolve( __dirname, '..', '__fixtures__', 'formatting.js' )
		);

		expect(
			messages.map( ( { ruleId, line, column, message } ) => ( {
				ruleId,
				line,
				column,
				message,
			} ) )
		).toMatchSnapshot();
	} );
} );

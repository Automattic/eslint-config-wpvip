const { ESLint } = require( 'eslint' );
const path = require( 'path' );

const configs = require( '../configs' );

const rootPaths = [ __dirname, '..' ];

// Share one instance so the config file is loaded and validated only once.
const recommendedEslint = new ESLint( {
	ignore: false,
	overrideConfigFile: path.resolve( ...rootPaths, 'eslint.config.js' ),
	baseConfig: null,
} );

async function getLintMessages( fixture ) {
	const [ { messages } ] = await recommendedEslint.lintFiles(
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
	it.each( [
		[ 'formatting.js', () => [ ...configs.javascript, ...configs.formatting ] ],
		[
			'formatting.ts',
			() => [ ...configs.javascript, ...configs.formatting, ...configs.typescript ],
		],
	] )( '%s fixture matches snapshot', async ( fixture, getConfig ) => {
		const eslint = new ESLint( {
			cwd: path.resolve( __dirname, '..' ),
			ignore: false,
			overrideConfigFile: true,
			overrideConfig: getConfig(),
		} );

		const [ { messages } ] = await eslint.lintFiles(
			path.resolve( __dirname, '..', '__fixtures__', fixture )
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

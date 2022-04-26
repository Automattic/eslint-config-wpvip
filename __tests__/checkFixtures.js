import { ESLint } from 'eslint';

async function getLintMessages( type, fixture ) {
	const eslint = new ESLint( {
		overrideConfigFile: `__fixtures__/${ type }/eslintrc.js`,
		useEslintrc: false,
	} );

	const files = `__fixtures__/${ type }/${ fixture }`;
	const [ { messages } ] = await eslint.lintFiles( files );

	return messages;
}

describe( 'linting', () => {
	it.each( [
		[ 'base', 'allowed.js' ],
		[ 'cli', 'allowed.js' ],
		[ 'typescript', 'allowed.ts' ],
	] )( '%s %s fixture produces no errors', async ( type, fixture ) => {
		// Allowed fixtures should produce no lint messages.
		expect( await getLintMessages( type, fixture ) ).toStrictEqual( [] );
	} );

	it.each( [
		[ 'base', 'disallowed.js' ],
		[ 'cli', 'disallowed.js' ],
		[ 'typescript', 'disallowed.ts' ],
	] )( '%s %s fixture matches snapshot', async ( type, fixture ) => {
		// Disallowed fixtures produce messages that should match a snapshot.
		expect( await getLintMessages( type, fixture ) ).toMatchSnapshot();
	} );
} );

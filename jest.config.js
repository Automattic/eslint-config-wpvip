// Jest can only require() ES modules (such as @stylistic/eslint-plugin, which
// the configs load) on Node.js 24.9+. Fail early with a clear message instead
// of letting test suites fail to load. See .nvmrc for the pinned version.
const [ major, minor ] = process.versions.node.split( '.' ).map( Number );
if ( major < 24 || ( 24 === major && minor < 9 ) ) {
	throw new Error(
		`The test suite requires Node.js 24.9 or later (found ${ process.versions.node }). Run \`nvm use\` to switch to the version in .nvmrc.`
	);
}

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	// Fixtures are linted by the tests, not run as tests. Without this,
	// `__fixtures__/typescript.test.ts` matches Jest's default `testMatch`.
	testPathIgnorePatterns: [ '/node_modules/', '<rootDir>/__fixtures__/' ],
};

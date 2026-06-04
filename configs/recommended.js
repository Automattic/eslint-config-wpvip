const loadOptionalConfig = require( '../utils/load-optional-config' );

/** @type import('eslint').Linter.Config[] */
const configs = [ ...require( './javascript' ), ...require( './formatting' ) ];

configs.push( ...loadOptionalConfig( 'typescript', () => require( './typescript' ) ) );
configs.push( ...loadOptionalConfig( 'jest', () => require( './testing' ) ) );
configs.push( ...loadOptionalConfig( 'react', () => require( './react' ) ) );
configs.push( ...loadOptionalConfig( 'prettier', () => require( './prettier' ) ) );

configs.typescriptResolverPath = require( './javascript' ).typescriptResolverPath;

module.exports = configs;

const loadOptionalConfig = require( './utils/load-optional-config' );

loadOptionalConfig( 'typescript', () => require( './configs/typescript' ) );
loadOptionalConfig( 'jest', () => require( './configs/testing' ) );
loadOptionalConfig( 'react', () => require( './configs/react' ) );
loadOptionalConfig( 'prettier', () => require( './configs/prettier' ) );

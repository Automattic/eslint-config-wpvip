const debugLog = require( './debug-log' );
const findPackageJson = require( 'find-package-json' );

const parent = findPackageJson( __dirname ).next()?.value || {};

debugLog( `Found package.json: ${ parent.__path || 'none' }` );

module.exports = function isPackageInstalled( packageName ) {
	const isDevDependency = !! parent.devDependencies?.[ `${ packageName }` ];
	const isProdDependency = !! parent.dependencies?.[ `${ packageName }` ];

	return isDevDependency || isProdDependency;
};

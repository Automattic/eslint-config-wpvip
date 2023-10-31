/**
 * External dependencies
 */
const findPackageJson = require( 'find-package-json' );

/**
 * Internal dependencies
 */
const debugLog = require( './debug-log' );

// Get a list of all package.json files in the current directory tree, ascending
// up the tree from the current directory. Note that this code behaves differently
// when it is installed as a package vs. when we are linting the code in this repo.
//
// When installed as a package, the current directory is inside node_modules and is
// not the "package root" as we are thinking about it. In this case, we need to ignore
// all package.json files that are inside node_modules directories.
//
// When we are linting the code in this repo, the current directory is not inside
// node_modules and the first found "package.json" is the "package root."
//
// This problem is basically impossible to solve for all edge cases (like someone who
// runs `npm run lint` from inside "node_modules") but this code should work for
// most cases.
const packages = [ ...findPackageJson( __dirname ) ];
const parent =
	packages.find( pkg => ! pkg.__path.includes( '/node_modules/' ) ) || packages.pop() || {};

debugLog( `Found package.json: ${ parent.__path || 'none' }` );

module.exports = function isPackageInstalled( packageName ) {
	const isDevDependency = Boolean( parent.devDependencies?.[ `${ packageName }` ] );
	const isProdDependency = Boolean( parent.dependencies?.[ `${ packageName }` ] );

	return isDevDependency || isProdDependency;
};

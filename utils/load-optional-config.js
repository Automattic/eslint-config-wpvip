const debugLog = require( './debug-log' );
const isPackageInstalled = require( './is-package-installed' );

module.exports = function loadOptionalConfig( packageName, loadConfig ) {
	if ( ! isPackageInstalled( packageName ) ) {
		return [];
	}

	try {
		return loadConfig();
	} catch ( error ) {
		if ( 'MODULE_NOT_FOUND' !== error?.code ) {
			throw error;
		}

		debugLog( `Skipping optional config for ${ packageName }: ${ error.message }` );

		return [];
	}
};

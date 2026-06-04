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

		// Only swallow the error if the missing module is the optional peer itself.
		// This prevents masking errors from transitive dependencies or unrelated modules.
		const missingModule = error.message?.match( /Cannot find module '([^']+)'/ )?.[ 1 ] || '';
		const isOptionalPeerMissing =
			missingModule === packageName || missingModule.startsWith( `${ packageName }/` );

		if ( ! isOptionalPeerMissing ) {
			throw error;
		}

		debugLog( `Skipping optional config for ${ packageName }: ${ error.message }` );

		return [];
	}
};

module.exports = function debugLog(message) {
	if (process.env.DEBUG) {
		// Debugging output.
		// eslint-disable-next-line no-console
		console.log(message);
	}
};

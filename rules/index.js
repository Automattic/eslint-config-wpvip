/**
 * Custom ESLint rules
 */
module.exports = {
	'dependency-group': require('./dependency-group'),
	'no-async-foreach': require('./no-async-foreach'),
	'no-unguarded-get-range-at': require('./no-unguarded-get-range-at'),
	'no-unused-vars-before-return': require('./no-unused-vars-before-return'),
};

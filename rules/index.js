/**
 * Custom ESLint rules
 */
module.exports = {
	'dependency-group': require( './dependency-group' ),
	'nestjs-route-prefix': require( './nestjs-route-prefix' ),
	'no-async-foreach': require( './no-async-foreach' ),
	'no-unguarded-get-range-at': require( './no-unguarded-get-range-at' ),
};

/**
 * From:
 * https://github.com/WordPress/gutenberg/blob/%40wordpress/eslint-plugin%4014.1.0/packages/eslint-plugin/rules/no-unguarded-get-range-at.js
 */

module.exports = {
	meta: {
		type: 'problem',
		schema: [],
	},
	create( context ) {
		return {
			'CallExpression[callee.object.callee.property.name="getSelection"][callee.property.name="getRangeAt"]'(
				node
			) {
				context.report( {
					node,
					message: 'Avoid unguarded getRangeAt',
				} );
			},
		};
	},
};

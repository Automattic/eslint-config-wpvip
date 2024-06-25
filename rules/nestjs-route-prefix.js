/**
 * Rule: @automattic/wpvip/nestjs-route-prefix
 */

const nestJsControllerDecorators = [ 'Controller' ];
const nestJsRouteDecorators = [ 'Get', 'Post', 'Put', 'Delete', 'Patch', 'Options', 'Head' ];

module.exports = {
	create( context ) {
		return {
			Decorator( node ) {
				if ( ! node.expression.callee?.name ) {
					// If it's not a callable method, bail out since Nest.js route controller decorators always a callable method.
					return;
				}

				const decoratorName = node.expression.callee.name;
				const argument = node.expression?.arguments[ 0 ] ?? [];

				if ( nestJsControllerDecorators.includes( decoratorName ) ) {
					if ( argument && argument.type === 'Literal' && argument.value !== '' ) {
						context.report( {
							node,
							message: '@Controller should not have route prefixes.',
						} );
					}
					return;
				}

				if ( nestJsRouteDecorators.includes( decoratorName ) ) {
					if (
						! argument ||
						argument.type !== 'Literal' ||
						! argument.value.startsWith( '/' ) ||
						argument.value.endsWith( '/' )
					) {
						context.report( {
							node,
							message: `@${ decoratorName } should have a route starting with '/' and not ending with '/'.`,
						} );
					}
				}
			},
		};
	},
};

/**
 * Rule: @automattic/wpvip/nestjs-route-prefix
 */

const nestJsControllerDecorators = [ 'Controller' ];
const nestJsRouteDecorators = [ 'Get', 'Post', 'Put', 'Delete', 'Patch', 'Options', 'Head' ];

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Enforce route prefixes for Nest.js route decorators',
		},
		messages: {
			controllerPrefix: '@Controller should not have route prefixes.',
			decoratorSlash: `@{{ decoratorName }} should have a route starting with '/' and not ending with '/'.`,
		},
		schema: [],
	},
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
							messageId: 'controllerPrefix',
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
							messageId: 'decoratorSlash',
							data: { decoratorName },
						} );
					}
				}
			},
		};
	},
};

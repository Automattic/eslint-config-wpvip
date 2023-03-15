/**
 * Rule: @automattic/wpvip/no-async-foreach
 *
 *
 *
 * Adapted from unmaintained eslint plugin:
 * https://www.npmjs.com/package/eslint-plugin-no-async-foreach
 */

module.exports = {
	create(context) {
		return {
			ExpressionStatement(node) {
				const { callee } = node.expression;
				if (!callee || !callee.property || !callee.property.name) {
					return;
				}
				if (callee.property.name === 'forEach') {
					const functionArguments = node.expression.arguments.find((exp) => {
						return (
							exp.type === 'ArrowFunctionExpression' ||
							exp.type === 'FunctionExpression'
						);
					});
					if (functionArguments) {
						if (functionArguments.async) {
							context.report(
								node,
								'Avoid passing an async function to Array.prototype.forEach'
							);
						}
					}
				}
			},
		};
	},
};

module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		// Allow unused vars if they are prefixed with "_".
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
	},
};

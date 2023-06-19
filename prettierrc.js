module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: true,
	parenSpacing: true,
	printWidth: 100,
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	overrides: [
		{
			files: [ '*.json', '*.yml', '*.yaml' ],
			options: {
				useTabs: false,
			},
		},
	],
};

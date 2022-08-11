module.exports = {
	extends: [
		'../../configs/base',
		'../../configs/typescript',
		'../../configs/typescript-strict',
	],
	parserOptions: {
		project: "./__fixtures__/typescript-strict/tsconfig.json",
	},
};

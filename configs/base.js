module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:json/recommended',
		'plugin:security/recommended',
		require.resolve( './javascript' ),
	],
};

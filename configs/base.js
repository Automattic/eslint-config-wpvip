module.exports = {
	extends: [
		'plugin:json/recommended',
		'plugin:security/recommended',
		require.resolve( './javascript' ),
	],
};

require( '@rushstack/eslint-patch/modern-module-resolution' );

module.exports = {
	configs: require( './configs' ),
	rules: require( './rules' ),
};

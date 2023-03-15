const fs = require('node:fs');
const debugLog = require('./debug-log');
const findPackageJson = require('find-package-json');

function findParent() {
	const packages = [...findPackageJson()];
	const firstPackage = packages.shift();

	// A little hack to help us use this plugin to lint itself: When installed via
	// NPM, .eslintrc.js will be missing (due to .npmignore).
	if ('@automattic/eslint-plugin-wpvip' === firstPackage.name) {
		const eslintRc = firstPackage.__path.replace(
			/package\.json$/,
			'.eslintrc.js'
		);
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		if (fs.statSync(eslintRc)) {
			return firstPackage;
		}
	}

	return packages.pop() || {};
}

const parent = findParent();

debugLog(`Found package.json: ${parent.__path || 'none'}`);

module.exports = function isPackageInstalled(packageName) {
	const isDevDependency = !!parent.devDependencies?.[`${packageName}`];
	const isProdDependency = !!parent.dependencies?.[`${packageName}`];

	return isDevDependency || isProdDependency;
};

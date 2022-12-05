module.exports = {
	root: true,
	extends: ['apps/backend'],
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	ignorePatterns: ['.eslintrc.js'],
}
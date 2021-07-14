module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'airbnb',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: [
			'tsconfig.json',
		],
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
	],
	rules: {
		'no-use-before-define': 'off',
	},
};

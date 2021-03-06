module.exports = {
	"env": {
		"node": true,
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"react-hooks"
	],
	"rules": {
		"max-len": [
			"error",
			{
				"code": 160,
				"tabWidth": 4,
				"ignoreTrailingComments": true,
				"ignoreUrls": true,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true
			}
		],
		"template-curly-spacing" : "off",
		"indent" : "off",
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};

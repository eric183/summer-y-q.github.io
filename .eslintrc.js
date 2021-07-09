module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    // extends: `react-app`,
    extends: [
        "eslint:recommended",
        `react-app`
    ],
    "rules": {
        "import/no-anonymous-default-export": "off"
    },
    parserOptions: {
        project: ['tsconfig.eslint.json'],
        sourceType: 'module', // Allows for the use of imports
    }
};
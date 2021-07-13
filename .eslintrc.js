module.exports = {
    root: true,
    // basePath: './',
    globals: {
        __PATH_PREFIX__: true,
    },
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        // "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        // "react-hooks"
    ],
    parserOptions: {
        // project: [
        //     'tsconfig.json'
        // ],
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    "rules": {
        "no-debugger": 0,
        "@typescript-eslint/no-non-null-assertion": 0
        // "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn",
    },

    "settings": {
        "react": {
            // "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            // "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            // "flowVersion": "0.53" // Flow version
        },
        // "propWrapperFunctions": [
        //     // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        //     "forbidExtraProps",
        //     { "property": "freeze", "object": "Object" },
        //     { "property": "myFavoriteWrapper" }
        // ],
        // "componentWrapperFunctions": [
        //     // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
        //     "observer", // `property`
        //     { "property": "styled" }, // `object` is optional
        //     { "property": "observer", "object": "Mobx" },
        //     { "property": "observer", "object": "<pragma>" } // sets `object` to whatever value `settings.react.pragma` is set to
        // ],
        // "linkComponents": [
        //     // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        //     "Hyperlink",
        //     { "name": "Link", "linkAttribute": "to" }
        // ]
    }


    // extends: [
    //   'eslint:recommended',
    //   'plugin:@typescript-eslint/recommended',
    // ],
};
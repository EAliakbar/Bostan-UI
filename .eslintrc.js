module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? 2 : 0
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
};
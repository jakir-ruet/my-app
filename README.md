# Getting Started with React Learning App

The purpose of this application is that learning of React JS for Beginner to Advance.

## Environment Setup

### Step 1:

npm i -D eslint prettier \
npm i -D eslint-plugin-prettier \
npm i -D eslint-config-prettier \
npm i -D eslint-plugin-node \
npm i -D eslint-config-node \
npx install-peerdeps --dev \
npx install eslint-config-airbnb --dev

### Step 2:

Create '.prettierrc' in root directory and type \
{ \
"singleQuote": true \
}

### Step 3:

npm install -g eslint \
eslint --init \
Select some features as per your needs

If it is install successfully then a '.eslintrc.json' file create in the root directory.

You may see the '.eslintrc.json' file in the project.

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "plugins": ["prettier", "react", "react-hooks", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "spaced-comment": "off",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "requireConfigFile": 0,
    "parser": "babel-eslint",
    "prefer-destructuring": [
      "error",
      {
        "object": true,
        "array": false
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "req|res|next|val"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es6",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  }
}
```

### Reference

- ESLint Rules - https://eslint.org/docs/rules/
- Prettier Options - https://prettier.io/docs/en/options.html
- Airbnb Style Guide - https://github.com/airbnb/javascript

### Step 4 (.vscode):

Create a '.vscode' directory in root directory in your application
Create a "settings.json" inside that '.vscode'.
Paste the below the following code.

```json
{
  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  //disable all built-in syntax checking
  "javascript.validate.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  // emmeting the code
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact, html, css"
  }
}
```

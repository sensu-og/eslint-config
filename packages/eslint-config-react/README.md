# @sensuapp/eslint-config-react

This package provides Sensu's React & JSX ESLint settings as an extensible
configuration.

![version](http://img.shields.io/npm/v/@sensuapp/eslint-config-react.svg?style=flat-square)
![license](http://img.shields.io/npm/l/@sensuapp/eslint-config-react.svg?style=flat-square)
![build](https://img.shields.io/travis/sensu/eslint-config/master.svg?style=flat-square)

## Usage

First, add the package to your project.

```sh
yarn add --dev eslint @sensuapp/eslint-config-react

# or with npm

npm install --save-dev eslint @sensuapp/eslint-config-react
```

If you did not already have an `.eslintrc` file you can add one.

```sh
./node_modules/.bin/eslint --init
```

Finally, add the following to your `.eslintrc`.

```json
{
  "extends": [
    "@sensuapp/eslint-config",
    "@sensuapp/eslint-config-react",
  ]
}
```

# @sensuapp/eslint-plugin

This package provides additional rules used by Sensu projects.

![version](http://img.shields.io/npm/v/@sensuapp/eslint-plugin.svg?style=flat-square)
![license](http://img.shields.io/npm/l/@sensuapp/eslint-plugin.svg?style=flat-square)
![build](https://img.shields.io/travis/sensu/eslint-plugin/master.svg?style=flat-square)

## Usage

First, add the package to your project.

```sh
yarn add --dev eslint @sensuapp/eslint-plugin

# or with npm

npm install --save-dev eslint @sensuapp/eslint-plugin
```

If you did not already have an `.eslintrc` file you can add one.

```sh
./node_modules/.bin/eslint --init
```

Finally, add the following to your `.eslintrc`.

```json
{
  "plugins": [
    "@sensuapp/eslint-plugin"
  ]
}
```

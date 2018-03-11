# eslint-config-sensu-flow

This package provides Sensu's Flowtype ESLint settings as an extensible
configuration.

![version](http://img.shields.io/npm/v/eslint-config-sensu.svg?style=flat-square)
![license](http://img.shields.io/npm/l/eslint-config-sensu.svg?style=flat-square)
![build](https://img.shields.io/travis/sensu/eslint-config-sensu/master.svg?style=flat-square)

## Usage

First, add the package to your project.

```sh
yarn add --dev eslint eslint-config-sensu-flow

# or with npm

npm install --save-dev eslint eslint-config-sensu-flow
```

If you did not already have an `.eslintrc` file you can add one.

```sh
./node_modules/.bin/eslint --init
```

Finally, add the following to your `.eslintrc`.

```json
{
  "extends": [
    "sensu",
    "sensu-flow"
  ]
}
```

### React

When used in concert with React you may want to remove the `prop-types` rule as
it will likely be duplicate effort. To do so add the following to your
`.eslintrc` file.


```json
{
  "extends": [
    "sensu",
    "sensu-flow",
    "sensu-react"
  ],
  "rules": {
    "react/prop-types": "off",
  }
}
```

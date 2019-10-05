# Unmaintained

No longer maintained, kept for historical purposes.

# @sensuapp/eslint-config-relay

This package provides Sensu's [Relay](https://facebook.github.io/relay)
[ESLint](https://eslint.org) settings as an extensible configuration.

![version](http://img.shields.io/npm/v/@sensuapp/eslint-config.svg?style=flat-square)
![license](http://img.shields.io/npm/l/@sensuapp/eslint-config.svg?style=flat-square)
![build](https://img.shields.io/travis/sensu/eslint-config/master.svg?style=flat-square)

## Usage

First, add the package to your project.

```sh
yarn add --dev eslint @sensuapp/eslint-config-relay

# or with npm

npm install --save-dev eslint @sensuapp/eslint-config-relay
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
    "@sensuapp/eslint-config-relay",
  ]
}
```

### graphql-config

The plugin assumes that you have a `.graphqlrc` file present. See
[graphql-config](https://github.com/graphcool/graphql-config#usage) for more
details on it's options.

```json
{
  "schemaPath": "schema.graphql",
  "includes": ["*.graphql"],
  "excludes": ["tmp/**"]
}
```

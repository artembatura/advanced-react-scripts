# [![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts) advanced-react-scripts 🍓

### ⚠ Disclaimer

> This is **not** a fork of `create-react-app`. It's just a fork of `react-scripts` with fresh dependency packages and simple webpack modifications that can toggle extra features

### 💡 Features

* [SASS](https://sass-lang.com)
* [Stylus](http://stylus-lang.com)
* [CSS Modules](https://github.com/gajus/react-css-modules#css-modules)
* SASS Modules
* Stylus Modules
* Custom CSS Modules local ident name
* [proposal-decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators)
* [proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
* [@babel/preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)

### ❔ How to use it

1. (optional) If you have existing project created by `create-react-app`, you can remove default `react-scripts`

   For it, run command:

   `npm uninstall --save react-scripts` or `yarn uninstall react-scripts`

2. Next we need install `advanced-react-scripts`:

   `npm install --save-dev advanced-react-scripts` or `yarn add advanced-react-scripts`

3. Then create `.env` file in the root of project for add any of the configuration options below to enable necessary feature

### 🔧 Configuration Options

#### Styling

**Preprocessors**

| Feature | Parameter in .env | Type | At default |
| ------- | ---- | ----------------- | ------- |
| *SASS* | `REACT_APP_SASS` | Boolean | FALSE |
| *Stylus* | `REACT_APP_STYLUS` | Boolean | FALSE |

**CSS Modules**

| Feature | Parameter in .env | Need file format | Type | At default |
| ------- | ---------------- | ----------------- | ---- | ---------- |
| *CSS Modules* | `REACT_APP_CSS_MODULES` | `[name].module.css` | Boolean | FALSE |
| *SASS Modules* | `REACT_APP_SASS_MODULES` | `[name].module.(sass/scss)` | Boolean | FALSE |
| *Stylus Modules* | `REACT_APP_STYLUS_MODULES` | `[name].module.styl` |  Boolean | FALSE |

**Customizing CSS Modules local ident name**

| Build | Type | Parameter in .env | At default |
| ------- | ---- | ----------------- | ------- |
| *Development* | `REACT_APP_DEVELOPMENT_CSS_MODULES_IDENT_NAME` | String  | [path]__[name]___[local] |
| *Production* | `REACT_APP_PRODUCTION_CSS_MODULES_IDENT_NAME` | String | [local]-[sha512:hash:base32] |

#### Experimental ES features

**Presets**

| Feature | Type | Parameter in .env | At default |
| ------- | ---- | ----------------- | ------- |
| *Babel Preset Stage-0* | `REACT_APP_BABEL_PRESET_STAGE_0` | Boolean | FALSE |

**Single plugins**

| Feature | Type | Parameter in .env | At default |
| ------- | ---- | ----------------- | ------- |
| *Proposal Decorators* | `REACT_APP_PROPOSAL_DECORATORS` | Boolean |  FALSE |
| *Proposal Class Properties* | `REACT_APP_PROPOSAL_CLASS_PROPERTIES` | Boolean | FALSE |

#### GraphQL

| Feature | Type | Parameter in .env | At default |
| ------- | ---- | ----------------- | ------- |
| *GraphQL Loader* | `REACT_APP_GRAPHQL` | Boolean | FALSE |

### :mag_right: How does it work?

The CRA team [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an `.env` file in the root of the generated CRA project and we can use it for customize webpack config

### Future

We follow updates of original `react-scripts` and changes in used packages

**We need help us, community! Also everyone can take part in the development and suggest the idea, explained in Issue or make your own changes and send in Pull Request**

### [Changelog](https://github.com/artemirq/advanced-react-scripts/tree/next/packages/react-scripts/CHANGELOG.md)

#### Credits

Inspired by [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
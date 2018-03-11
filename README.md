# [![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts) advanced-react-scripts :strawberry:

### ⚠️ Disclaimer

> This is **not** a fork of `create-react-app`. It's just a fork of `react-scripts` with fresh dependency packages simple webpack modifications that can toggle extra features

### 💡 Features

* [SASS](https://sass-lang.com)
* [Stylus](http://stylus-lang.com/)
* [CSS Modules](https://github.com/gajus/react-css-modules#css-modules)
* SASS Modules
* Stylus Modules
* Custom CSS Modules local ident name
* [proposal-decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators)
* [proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)

*NOTE: At default all features disabled and can be turn on individually*

### ❔ How to use it

1. (optional) If you have existing project created by `create-react-app`, you can remove default `react-scripts`

   For it, run command:

   `npm uninstall --save react-scripts` or `yarn uninstall react-scripts`

2. Next we need install `advanced-react-scripts`:

   `npm install --save-dev advanced-react-scripts` or `advanced-react-scripts`

3. Then create `.env` file in the root of project for add any of the configuration options below to enable necessary feature

### Configuration Options

#### Styling

Preprocessors
- `REACT_APP_SASS` **Toggle SASS**
- `REACT_APP_STYLUS` **Toggle Stylus**

CSS Modules
- `REACT_APP_CSS_MODULES` **Toggle CSS Modules**
- `REACT_APP_SASS_MODULES` **Toggle SASS Modules**
- `REACT_APP_STYLUS_MODULES` **Toggle Stylus Modules**

To use modules the file must be named in the following format: `[name].module.[preprocessor_name]`

For example `MyCssModule.module.css`/`MySassModule.module.sass`/`MyScssModule.module.scss`/`MyStylusModule.module.styl` 

Customize CSS Modules local ident name
- `REACT_APP_DEVELOPMENT_CSS_MODULES_IDENT_NAME` **Set local ident name on development build**. At default = `[path]__[name]___[local]`
- `REACT_APP_PRODUCTION_CSS_MODULES_IDENT_NAME` **Set local ident name on production build**. At default = `[local]-[sha512:hash:base32]`

#### Experimental ES features

- `REACT_APP_PROPOSAL_DECORATORS` **Toggle compile class and object decorators to ES5**
- `REACT_APP_PROPOSAL_CLASS_PROPERTIES` **Toggle transform class properties**

#### GraphQL

- `REACT_APP_GRAPHQL` **Toggle preprocess GraphQL queries**(.graphql files)

### :mag_right: How does it work?

The CRA team [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an `.env` file in the root of the generated CRA project and we can use it for customize webpack config

### Future

We follow updates of original `react-scripts` and changes in used packages

**We need help us, community! Also everyone can take part in the development and suggest the idea, explained in Issue or make your own changes and send in Pull Request**

### [Changelog](https://github.com/artemirq/advanced-react-scripts/tree/next/packages/react-scripts/CHANGELOG.md)

#### Credits

Inspired by [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
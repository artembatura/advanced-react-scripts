# :strawberry: advanced-react-scripts [![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts)

Latest added new feature :bomb: **26.02.2018** | Latest critical fix :exclamation: **[03.03.2018](#0346-release1-march-3-2018)**

Latest update from original branch at :heavy_check_mark: **28.02.2018**

---

### ⚠️ Disclaimer
> This is **not** a fork of `create-react-app`. It's just a fork of `react-scripts` with fresh dependency packages simple webpack modifications that can toggle extra features

### 💡 Features
* [SASS](https://sass-lang.com)
* [Stylus](http://stylus-lang.com/)
* [CSS Modules](https://github.com/gajus/react-css-modules#css-modules)
* SASS Modules
* Stylus Modules
* [Purge CSS](https://github.com/FullHuman/purgecss)
* [babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)
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

### Webpack loaders

#### Styling

- `REACT_APP_SASS=true`  enable SASS
- `REACT_APP_STYLUS=true`  enable Stylus

- `REACT_APP_CSS_MODULES=true`  enable CSS Modules 
- `REACT_APP_SASS_MODULES=true`  enable SASS Modules
- `REACT_APP_STYLUS_MODULES=true`  enable Stylus Modules

*NOTE: to use modules the file must be named in the following format: `[name].module.[preprocessor_name]`*

For example `MyCssModule.module.css`/`MySassModule.module.sass`/`MyScssModule.module.scss`/`MyStylusModule.module.styl` and etc. Files that are not prefixed with module will be parsed normally

#### GraphQL

- `REACT_APP_GRAPHQL=true`  preprocesses GraphQL queries in .graphql files

### Babel plugins

#### Support latest ES features

- `REACT_APP_PROPOSAL_DECORATORS=true`  enable compile class and object decorators to ES5
- `REACT_APP_PROPOSAL_CLASS_PROPERTIES=true` enable transform class properties

### Babel presets

- `REACT_APP_BABEL_STAGE_0=true`  enable Stage-0 Babel Preset([decorators too?](https://babeljs.io/docs/plugins/transform-decorators/))

### Webpack plugins

#### Optimizers

- `REACT_APP_PURGECSS=true`  enable Purge CSS, which remove unused CSS

*NOTE: optimizers uses only in production build*

### :mag_right: How does it work?

The CRA team [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an `.env` file in the root of the generated CRA project and we can use it for customize webpack config

### Future

We follow updates of original `react-scripts` and changes in used packages

**We need help us, community! Also everyone can take part in the development and suggest the idea, explained in Issue or make your own changes and send in Pull Request**

### Changelog

#### 03.46-release.3 (March 9, 2018)

Downgrade dependencies versions all @babel packages from beta.40 to beta.36

#### 03.46-release.2 (March 8, 2018)

Downgrade dependencies versions all @babel packages from beta.40 to beta.36

#### 03.46-release.1 (March 3, 2018)

* `advanced-react-scripts`
   * [Pull Request #12](https://github.com/artemirq/advanced-react-scripts/pull/12) Fix plugin-proposal-decorators regression
   * [Pull Request #13](https://github.com/artemirq/advanced-react-scripts/pull/13) Provide babel config to jest
   * Add GraphQL to `template/.env`

#### 03.46-release.0 (February 28, 2018)

[Critical fix](https://github.com/artemirq/advanced-react-scripts/commit/5bd57e2c6ea54c38e22e01dc5092a46d1c8376e5)

#### 03.46-beta.2 (February 28, 2018)

[Critical fix](https://github.com/artemirq/advanced-react-scripts/commit/85f015605c42ae6db94e2cbedbf5b11f81031cbf)

#### 03.46-beta.1 (February 28, 2018)

Merge [latest changes](https://github.com/artemirq/advanced-react-scripts/pull/10) from [original branch](https://github.com/facebook/create-react-app)
* `advanced-react-scripts`
   * Add GraphQL [optional preprocessing](https://github.com/artemirq/advanced-react-scripts#graphql)

#### 0.3.46-beta.0 (February 26, 2018)

* [Commit](https://github.com/artemirq/advanced-react-scripts/commit/9efb325547380f3e9152e31af7ae558d3a85a6ff)
   * `advanced-react-scripts`
      * [#8](https://github.com/artemirq/advanced-react-scripts/issues/8) Add experimental support Stylus and Stylus Modules(not tested)

#### 0.3.45-beta.3 (February 26, 2018)

* [Commit](https://github.com/artemirq/advanced-react-scripts/commit/31bbcdced7dfa5489be6229d1609abae1c23955a)
   * `advanced-react-scripts`
      * Support transform class properties(via babel plugin `proposal-class-properties`) Closes [Issue #7](https://github.com/artemirq/advanced-react-scripts/issues/7)
      * Update template config(`template/.env`)
      * Updated dependencies
   * `babel-plugin-named-asset-import-fresh`
      * Updated dependencies
   * `babel-preset-react-app-fresh`
      * Now using `babel-plugin-dynamic-import-node-babel-7` instead of old `babel-plugin-transform-dynamic-import`(not tested)
      * Updated dependencies
   * `eslint-config-react-app-fresh`
      * Updated dependencies
   * `react-dev-utils-fresh`
      * Updated dependencies
   * `create-react-app-fresh`
      * Updated dependencies
   * `confusing-browser-globals-fresh`
      * Updated dependencies

#### 0.3.44-beta.3 (February 11, 2018)

* `advanced-react-scripts`
   * [Support ES6 Decorators](https://github.com/artemirq/advanced-react-scripts/issues/6)(add babel plugin `proposal-decorators`) [Commit 1](https://github.com/artemirq/advanced-react-scripts/commit/fc5768083ef651f5cde08634d5bcb7e371e936b8), [Commit 2](https://github.com/artemirq/advanced-react-scripts/commit/4340ed750684011de81f9631abeb5237c3a7cee3)

#### 0.3.44-beta.0 (February 10, 2018)

* [Commit](https://github.com/artemirq/advanced-react-scripts/commit/50e8acd2c0e427acd61b6390bf9d5644f383a7e3)
   * `advanced-react-scripts`
      * Add babel-preset-stage-0
      * Updated dependencies
      * Update template config(`template/.env`)
   * `babel-plugin-named-asset-import-fresh`
      * Updated dependencies
   * `babel-preset-react-app-fresh`
      * Updated dependencies
   * `eslint-config-react-app-fresh`
      * Updated dependencies
   * `react-dev-utils-fresh`
      * Updated dependencies
   * `create-react-app-fresh`
      * Updated dependencies


#### Credits

Inspired by [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
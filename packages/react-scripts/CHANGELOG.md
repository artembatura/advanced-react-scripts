#### 03.50-beta.0 (April 4, 2018)

* Add URL Font loader

#### 03.49-beta.0 (April 1, 2018)

* Update all dependencies
* Add and configure svg-sprite-loader
* Add customizable bundle attribute

#### 03.48-release.1 (March 14, 2018)

* Fix Readme

#### 03.48-release.0 (March 14, 2018)

* Fix [#17](https://github.com/artemirq/advanced-react-scripts/issues/17)
* Add Babel preset Stage 0 `@babel/preset-stage-0`
* Change .env parameter `REACT_APP_GRAPHQL` to `REACT_APP_GRAPHQL_LOADER`

#### 03.47-release.1 (March 10, 2018)

Fix Readme and re-upload...

#### 03.47-release.0 (March 10, 2018)

* Close [#14](https://github.com/artemirq/advanced-react-scripts/issues/14). Add possibility customize CSS Modules local indent name for production and development build
* Close [#16](https://github.com/artemirq/advanced-react-scripts/issues/16). Remove Webpack plugin `PurgeCSS`, because it does not recognize CSS Modules
* Remove Babel preset `babel-preset-stage-0` , not actually with new babel
* Remove SVG Webpack loader because unnecessary
* Update dependencies packages

#### 03.46-release.4 (March 9, 2018)

Revert all versions dependencies to from beta.36 to beta.40

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
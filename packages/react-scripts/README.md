# 🚀 *Advanced* react-scripts
[![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts)

This repository is fork of `react-scripts` with fresh dependency packages and simple webpack modifications that can toggle extra features

## 💡 Features

* __[SASS](https://sass-lang.com) / [Stylus](http://stylus-lang.com)__

* __[CSS Modules](https://github.com/gajus/react-css-modules#css-modules) / SASS Modules / Stylus Modules__

* __Proposal Decorators__ ([i](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators))

* __Proposal Class Properties__ ([i](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties))

* __Babel Preset Stage 0__ ([i](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0))

* __Customizable CSS Modules Local Ident Name__

* __SVG Loader__ (makes sprite) ([why](https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites)) ([i](https://github.com/kisenka/svg-sprite-loader))

* __Additional bundle attribute__ (`async|defer|...`) ([i](https://github.com/numical/script-ext-html-webpack-plugin))

* __Font Loader__ (`ttf|eot|woff|woff2`) ([i](https://github.com/webpack-contrib/file-loader))

## ❔ How to use it

1. If you have existing project created by `create-react-app`, you can remove default `react-scripts`

   For it, run command:

   `npm uninstall --save react-scripts` or `yarn uninstall react-scripts`

2. Next we need install `advanced-react-scripts`:

   `npm install --save-dev advanced-react-scripts` or `yarn add advanced-react-scripts`

3. Then create `.env` file in the root of project for add any of the configuration options below to enable necessary feature

## 🔧 Configuration Options

### Styling

#### Preprocessors

| Feature | Parameter in .env | Type | At default |
| ------- | ----------------- | ---- | ---------- |
| *SASS* | `REACT_APP_SASS` | Boolean | `FALSE` |
| *Stylus* | `REACT_APP_STYLUS` | Boolean | `FALSE` |

#### CSS Modules

| Feature | Parameter in .env | Need file format | Type | At default |
| ------- | ---------------- | ----------------- | ---- | ---------- |
| *CSS Modules* | `REACT_APP_CSS_MODULES` | `[name].module.css` | Boolean | `FALSE` |
| *SASS Modules* | `REACT_APP_SASS_MODULES` | `[name].module.(sass/scss)` | Boolean | `FALSE` |
| *Stylus Modules* | `REACT_APP_STYLUS_MODULES` | `[name].module.styl` |  Boolean | `FALSE` |

#### CSS Modules local ident name

| Build Type | Parameter in .env | Type | At default |
| ---------- | ----------------- | ---- | ---------- |
| *Development* | `REACT_APP_DEVELOPMENT_CSS_MODULES_IDENT_NAME` | String  | `[path]__[name]___[local]` |
| *Production* | `REACT_APP_PRODUCTION_CSS_MODULES_IDENT_NAME` | String | `[local]-[sha512:hash:base32]` |

#### Fonts

| Build Type | Parameter in .env | Type | At default |
| ---------- | ----------------- | ---- | ---------- |
| *Font Loader* | `REACT_APP_FONT_LOADER` | Boolean | `FALSE` |

<details>
   <summary>Example</summary>

```css
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'),
         local('Open-Sans'),
         url('./../resources/fonts/OpenSans.woff2') format('woff2');
}
```
</details>

### Experimental ES features

#### Presets

| Feature | Parameter in .env | Type | At default | 
| ------- | ----------------- | ---- | ---------- |
| *Babel Preset Stage-0* | `REACT_APP_BABEL_PRESET_STAGE_0` | Boolean | `FALSE` |

#### Single plugins

| Feature | Parameter in .env | Type | At default |
| ------- | ---- | ----------------- | ------- |
| *Proposal Decorators* | `REACT_APP_PROPOSAL_DECORATORS` | Boolean | `FALSE` |
| *Proposal Class Properties* | `REACT_APP_PROPOSAL_CLASS_PROPERTIES` | Boolean | `FALSE` |

### Specific loaders

#### GraphQL

| Feature | Parameter in .env | Type | At default |
| ------- | ----------------- | ---- | ---------- |
| *GraphQL Loader* | `REACT_APP_GRAPHQL_LOADER` | Boolean | `FALSE` |

[Official documentation](https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader)

#### SVG

| Feature | Parameter in .env | Type | At default |
| ------- | ----------------- | ---- | ---------- |
| *SVG Loader (sprite)* | `REACT_APP_SVG_SPRITE_LOADER` | Boolean | `FALSE` |

<details>
   <summary>Example</summary>

```js
import twitterIcon from '../assets/twitter.svg';

console.log(twitterIcon); // output 'sprite-[hash].svg#twitter-usage'

<svg>
  <use xlinkHref={twitterIcon}></use>
</svg>
```
</details>

### Bundle tweaks

| Feature | Parameter in .env | Type | At default |
| ------- | ----------------- | ---- | ---------- |
| *Bundle Attribute* | `REACT_APP_BUNDLE_ATTRIBUTE` | String | `null` |

## Future

We follow updates of original `react-scripts` and changes in used packages

**We need help us, community! Everyone can take part in the development and suggest the idea, explained in Issue or make your own changes and send in PR. We have no strict rules for your issues. Any wishes are taken into account =)**

### [Changelog](https://github.com/artemirq/advanced-react-scripts/tree/next/packages/react-scripts/CHANGELOG.md)
# 🚀 *Advanced* react-scripts
[![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts)

This repository is fork of `react-scripts` with fresh dependency packages and simple webpack modifications that can toggle extra features

## 💡 Features

* [SASS](https://sass-lang.com)
* [Stylus](http://stylus-lang.com)
* [CSS Modules](https://github.com/gajus/react-css-modules#css-modules)
* SASS Modules
* Stylus Modules
* [proposal-decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators)
* [proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
* [@babel/preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)
* Customizable CSS Modules local ident name
* Loading SVG files as sprite ([svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader))
* Customizable attribute for bundle (`async`, `defer`, etc) ([script-ext-html-webpack-plugin](https://github.com/numical/script-ext-html-webpack-plugin))

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

See [example](https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader) from official documentation

#### SVG

| Feature | Parameter in .env | Type | At default |
| ------- | ----------------- | ---- | ---------- |
| *SVG Sprite Loader* | `REACT_APP_SVG_SPRITE_LOADER` | Boolean | `FALSE` |

See examples of use
<details>
   <summary>
   
   *SVG Sprite Loader*
   
   </summary>

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
| *Bundle attribute* | `REACT_APP_SCRIPT_DEFAULT_ATTRIBUTE` | String | `null` |

## Future

We follow updates of original `react-scripts` and changes in used packages

**We need help us, community! Also everyone can take part in the development and suggest the idea, explained in Issue or make your own changes and send in Pull Request**

## [Changelog](https://github.com/artemirq/advanced-react-scripts/tree/next/packages/react-scripts/CHANGELOG.md)
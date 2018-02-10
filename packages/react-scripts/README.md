# :strawberry: [advanced-react-scripts](https://www.npmjs.com/package/advanced-react-scripts) :strawberry:

:heavy_check_mark:  Updated from original branch at **03.02.2018**

[![npm version](https://img.shields.io/npm/v/advanced-react-scripts.svg)](https://www.npmjs.com/package/advanced-react-scripts)

---

### ⚠️ Disclaimer
> This is **not** a fork of ```create-react-app```. It's just a fork of ```react-scripts``` with simple webpack modifications that can toggle extra features

Part of reasons for this fork's existence is explained better in [this Medium article](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a) by [@kitze](https://github.com/kitze), which create [custom-react-scripts](https://github.com/kitze/custom-react-scripts)

In compare with `custom-react-scripts`, `advanced-react-scripts` doesn't support LESS and Stylus, but i try to support the latest version of react-scripts from original branch and add features, which will be useful for projects with React C:

### 💡 Features
* [SASS](https://sass-lang.com)
* [CSS modules](https://github.com/gajus/react-css-modules#css-modules)
* SASS modules
* [Purge CSS](https://github.com/FullHuman/purgecss)
* [babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)

**NOTE: At default all features disabled and can be turned individually*

### ❔ How to use it

1. If you have existing project created by `create-react-app`, you can remove default `react-scripts`

   For it, run command:

   `npm uninstall --save react-scripts`

2. Next we need install `advanced-react-scripts`:

   `npm install --save-dev advanced-react-scripts`

3. Then create `.env` file in the root of project for add any of the configuration options below to enable necessary feature

### 📝 Configuration options

#### Styling

- `REACT_APP_SASS=true`  enable SASS
- `REACT_APP_CSS_MODULES=true`  enable CSS Modules 
- `REACT_APP_SASS_MODULES=true`  enable SASS Modules

Note: to use modules the file must be named in the following format: ```[name].module.[preprocessor_name]```

For example ```styles.module.css```/```header.module.sass```/```myStyles.module.scss```, etc. Files that are not prefixed with module will be parsed normally

#### Babel

- `REACT_APP_BABEL_STAGE_0=true`  enable Stage-0 Babel Preset([Decorators support too](https://babeljs.io/docs/plugins/transform-decorators/))

#### Optimizers

Optimizers uses only in production build

- `REACT_APP_PURGECSS=true`  enable Purge CSS, which remove unused CSS

### :mag_right: How does it work?

The CRA team recently [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an ```.env``` file in the root of the generated CRA project

From the original readme:
> To define permanent environment variables, create a file called .env in the root of your project:
> ```REACT_APP_SECRET_CODE=abcdef```

### Credits

#### In general idea & code was taken from https://github.com/kitze/custom-react-scripts. Thank you, @kitze

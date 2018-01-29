# :strawberry: advanced-react-scripts :strawberry:

> :heavy_check_mark: Latest version of original react-scripts: **Changes from original branch at 26.01.2018**

---

### ⚠️ Disclaimer:
> This is **not** a fork of ```create-react-app```. It's just a fork of ```react-scripts``` with simple webpack modifications that can toggle extra features

Old part of reasons for this fork's existence is explained better in [this Medium article](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a)

### 💡 Features:
* [Sass](https://sass-lang.com)
* [CSS modules](https://github.com/gajus/react-css-modules#css-modules)
* Sass modules
* [Purge CSS](https://github.com/FullHuman/purgecss)

**At default all features disabled and can be turned individually*

### ❔ How to use it

If you have existing project, run command:

```npm uninstall --save react-scripts```

Next

```npm install --save-dev advanced-react-scripts```

Create `.env` file in the root of project and add any of the configuration options below to enable that feature

### 📝 Configuration options

#### Styling

- ```REACT_APP_SASS=true``` - enable SASS support
- ```REACT_APP_CSS_MODULES=true``` - enable CSS modules
- ```REACT_APP_SASS_MODULES=true``` - enable Sass modules
- ```REACT_APP_PURGECSS=true``` - enable Purge CSS

Note: to use modules the file must be named in the following format: ```[name].module.[preprocessor_name]```

For example ```styles.module.css``` or ```header.module.sass``` or ```footer.module.less```, etc. Files that are not prefixed with module will be parsed normally

### :mag_right: How does it work?

The CRA team recently [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an ```.env``` file in the root of the generated CRA project

From the original readme:
> To define permanent environment variables, create a file called .env in the root of your project:
> ```REACT_APP_SECRET_CODE=abcdef```

### Credits

#### The idea was taken from https://github.com/kitze/custom-react-scripts. Code based too on this repository. Thank you, @kitze

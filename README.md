# advanced-react-scripts 

Latest version of original react-scripts: Alfa(2.0.0?) changes at 20.01.2018**

### Credits

#### The idea was taken from https://github.com/kitze/custom-react-scripts. Code based too on this repository. Thank you, @kitze

### Disclaimer:
> This is **not** a fork of ```create-react-app```. It's just a fork of ```react-scripts``` with simple webpack modifications that can toggle extra features

The reason for this fork's existence is explained better in [this Medium article](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a)

### Features:
* Sass
* CSS modules
* Sass modules

**At default all features disabled and can be turned individually*

### How to use it

If you have existing project, run command:

```npm uninstall --save react-scripts```

Next

```npm install --save-dev advanced-react-scripts```

Create `.env` file in the root of project and add any of the configuration options below to enable that feature

### Configuration options

#### Styling

- ```REACT_APP_SASS=true``` - enable SASS support
- ```REACT_APP_CSS_MODULES=true``` - enable CSS modules
- ```REACT_APP_SASS_MODULES=true``` - enable Sass modules

Note: to use modules the file must be named in the following format: ```[name].module.[preprocessor_name]```

For example ```styles.module.css``` or ```header.module.sass``` or ```footer.module.less```, etc. Files that are not prefixed with module will be parsed normally

### How does it work?

The CRA team recently [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an ```.env``` file in the root of the generated CRA project

From the original readme:
> To define permanent environment vairables, create a file called .env in the root of your project:
> ```REACT_APP_SECRET_CODE=abcdef```

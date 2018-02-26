// Allows you to use two kinds of imports for SVG:
// import logoUrl from './logo.svg'; gives you the URL.
// import { ReactComponent as Logo } from './logo.svg'; gives you a component.
const svgLoader = isDev => {
  return {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          // @remove-on-eject-begin
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app-fresh')],
          // @remove-on-eject-end
          cacheDirectory: true,
        },
      },
      require.resolve('svgr/webpack'),
      {
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  };
};

const styleLoader = require('../config/styles-loader');
const sassLoader = require.resolve('sass-loader');
const stylusLoader = require.resolve('stylus-loader');

module.exports = {
  SVG: {
    default: true,
    get: svgLoader,
  },
  CSS: {
    default: true,
    get: styleLoader(undefined, /\.css$/, /\.module\.css$/),
  },
  CSS_MODULES: {
    get: styleLoader(undefined, /\.module\.css$/, undefined, true),
  },
  SASS: {
    get: styleLoader(sassLoader, /\.s[ac]ss$/, /\.module\.s[ac]ss$/),
  },
  SASS_MODULES: {
    get: styleLoader(sassLoader, /\.module\.s[ac]ss$/, undefined, true),
  },
  STYLUS: {
    get: styleLoader(stylusLoader, /\.styl/, /\.module\.styl/),
  },
  STYLUS_MODULES: {
    get: styleLoader(stylusLoader, /\.module\.styl/, undefined, true),
  },
};

const stylesLoader = require('../config/styles-loader');
const sassLoader = require.resolve('sass-loader');
const stylusLoader = require.resolve('stylus-loader');

module.exports = {
  CSS: {
    default: true,
    get: stylesLoader(undefined, /\.css$/, /\.module\.css$/),
  },
  SASS: {
    get: stylesLoader(sassLoader, /\.s[ac]ss$/, /\.module\.s[ac]ss$/),
  },
  STYLUS: {
    get: stylesLoader(stylusLoader, /\.styl/, /\.module\.styl/),
  },
  STYLUS_MODULES: {
    get: stylesLoader(stylusLoader, /\.module\.styl/, undefined, true),
  },
  SASS_MODULES: {
    get: stylesLoader(sassLoader, /\.module\.s[ac]ss$/, undefined, true),
  },
  CSS_MODULES: {
    get: stylesLoader(undefined, /\.module\.css$/, undefined, true),
  },
  GRAPHQL: {
    get: () => {
      return {
        test: /\.(graphql)$/,
        loader: 'graphql-tag/loader',
      };
    },
  },
};

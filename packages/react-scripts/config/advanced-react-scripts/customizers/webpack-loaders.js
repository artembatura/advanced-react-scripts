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
  GRAPHQL_LOADER: {
    get: () => ({
      test: /\.(graphql)$/,
      loader: 'graphql-tag/loader',
    }),
  },
  SVG_SPRITE_LOADER: {
    get: () => ({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('svg-sprite-loader'),
          options: {
            extract: true,
            spriteFilename: `sprite.[hash:6].svg`,
          },
        },
        {
          loader: require.resolve('svgo-loader'),
          options: {
            plugins: [
              { removeTitle: true },
              { convertPathData: false },
              { removeUselessStrokeAndFill: true },
            ],
          },
        },
      ],
    }),
  },
  FONT_LOADER: {
    get: () => ({
      test: /\.(ttf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[ext]',
        },
      },
    }),
  },
};

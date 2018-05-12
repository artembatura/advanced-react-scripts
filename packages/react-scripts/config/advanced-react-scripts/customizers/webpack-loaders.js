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
        },
        {
          loader: require.resolve('svgo-loader'),
          options: {
            plugins: [
              { removeDoctype: true },
              { removeXMLProcInst: true },
              { removeComments: true },
              { removeMetadata: true },
              { removeEditorsNSData: true },
              { removeNonInheritableGroupAttrs: true },
              { cleanupAttrs: true }, // yeah
              { removeAttrs: { attrs: '(stroke|fill)' } },
              { removeUselessStrokeAndFill: true },
              { minifyStyles: true },
              { convertStyleToAttrs: true },
              { cleanupIDs: true },
              { removeUselessDefs: true },
              { convertColors: true },
              { removeUnknownsAndDefaults: true },
              { removeViewBox: true },
              { cleanupEnableBackground: true },
              { removeHiddenElems: true },
              { removeEmptyText: true },
              { convertShapeToPath: true },
              { moveElemsAttrsToGroup: true }, // yeah
              { moveGroupAttrsToElems: true }, // yeah
              { collapseGroups: true },
              { removeRasterImages: true },
              { convertTransform: true },
              { removeEmptyAttrs: true }, // yeah
              { removeEmptyContainers: true },
              { removeUnusedNS: true },
              { removeTitle: true },
              { removeDesc: true },
              { removeStyleElement: true },
              { removeScriptElement: true },
              { removeDimensions: true },
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

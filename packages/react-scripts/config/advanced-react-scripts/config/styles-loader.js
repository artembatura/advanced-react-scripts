const paths = require('../../paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const autoprefixer = require('autoprefixer');

const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const cssFilename = 'static/css/[name].[contenthash:8].css';

const devLocalIdentName =
  process.env.REACT_APP_DEVELOPMENT_CSS_MODULES_IDENT_NAME ||
  '[path]__[name]___[local]';
const prodLocalIdentName =
  process.env.REACT_APP_PRODUCTION_CSS_MODULES_IDENT_NAME ||
  '[local]-[sha512:hash:base32]';

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

const postCSSLoaderOptions = Object.assign(
  {},
  { sourceMap: shouldUseSourceMap },
  { ident: 'postcss' },
  {
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        flexbox: 'no-2009',
      }),
    ],
  }
);

module.exports = (loader, test, exclude, modules) => isDev => {
  let loaders = isDev
    ? [
        {
          loader: require.resolve('style-loader'),
        },
      ]
    : [];

  loaders = loaders.concat([
    {
      loader: require.resolve('css-loader'),
      options: Object.assign(
        {},
        { minimize: !isDev, sourceMap: shouldUseSourceMap },
        { importLoaders: 1 },
        modules === true
          ? {
              localIdentName: isDev ? devLocalIdentName : prodLocalIdentName,
              modules: true,
            }
          : {}
      ),
    },
    {
      loader: require.resolve('postcss-loader'),
      options: postCSSLoaderOptions,
    },
  ]);

  if (loader) {
    loaders.push({
      loader,
      options: {
        sourceMap: shouldUseSourceMap,
      },
    });
  }

  if (isDev) {
    return {
      test,
      exclude,
      use: loaders,
    };
  }

  return {
    test,
    exclude,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {},
        {
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false,
            },
          },
          use: loaders,
        },
        extractTextPluginOptions
      )
    ),
  };
};

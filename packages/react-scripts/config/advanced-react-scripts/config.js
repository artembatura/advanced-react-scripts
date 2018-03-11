const mapObject = require('./utils/map-object');

const customizers = {
  webpackLoaders: require('./customizers/webpack-loaders'),
  babelPlugins: {
    PROPOSAL_CLASS_PROPERTIES: {
      get: () => [
        require.resolve('@babel/plugin-proposal-class-properties'),
        { loose: true },
      ],
    },
    PROPOSAL_DECORATORS: {
      get: () => require.resolve('@babel/plugin-proposal-decorators'),
    },
    NAMED_ASSET_IMPORT: {
      default: true,
      get: () => [
        require.resolve('babel-plugin-named-asset-import-fresh'),
        {
          loaderMap: {
            svg: {
              ReactComponent: 'svgr/webpack![path]',
            },
          },
        },
      ],
    },
  },
};

module.exports = (env, isDev) => {
  return mapObject(customizers, group => {
    return mapObject(
      group,
      (customizer, key) => {
        const envValue = process.env['REACT_APP_' + key];
        const activeEnvValue = env && envValue && envValue !== 'false';
        return (activeEnvValue || customizer.default) && customizer.get(isDev);
      },
      true
    );
  });
};

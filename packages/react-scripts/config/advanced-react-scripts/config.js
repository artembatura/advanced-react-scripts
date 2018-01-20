const mapObject = require('./utils/map-object');

const customizers = {
    webpackLoaders: require('./customizers/webpack-loaders')
};

module.exports = (env, isDev) => {
    return mapObject(customizers, group => {
        return mapObject(
            group,
            (customizer, key) => {
                const envValue = process.env['REACT_' + key];
                const activeEnvValue = env && envValue && envValue !== 'false';
                return (activeEnvValue || customizer.default) && customizer.get(isDev);
            },
            true
        );
    });
};
const paths = require('../../paths');
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const cssFilename = 'static/css/[name].[contenthash:8].css';
const extractTextPluginOptions = shouldUseRelativeAssetPaths ? { publicPath: Array(cssFilename.split('/').length).join('../') } : {};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const autoprefixer = require('autoprefixer');

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
                { minimize: !isDev, sourceMap: shouldUseSourceMap },
                { importLoaders: 1 },
                modules === true
                    ? {
                        localIdentName: '[local]-[hash:8]',
                        modules: true,
                    }
                    : {}
            ),
        },
        {
            loader: require.resolve('postcss-loader'),
            options: Object.assign(
                { sourceMap: shouldUseSourceMap },
                { plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                        }),
                    ]
                }
            ),
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
                {
                    fallback: require.resolve('style-loader'),
                    use: loaders,
                },
                extractTextPluginOptions
            )
        ),
    };
};
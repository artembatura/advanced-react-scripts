const paths = require('../../paths');
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const cssFilename = 'static/css/[name].[contenthash:8].css';

// ExtractTextPlugin expects the build output to be flat.
// (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// However, our output is structured with css, js and media folders.
// To have this structure working with relative paths, we have to use custom options.
const extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};

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
                        localIdentName: '[local]__[name]__[hash:8]',
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
                                'not ie < 11',
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
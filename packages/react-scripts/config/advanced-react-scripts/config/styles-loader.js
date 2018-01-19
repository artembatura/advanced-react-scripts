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

const postCSSLoaderOptions =
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    Object.assign(
        { sourceMap: shouldUseSourceMap },
        { ident: 'postcss' },
        { plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
                flexbox: 'no-2009',
            }),
        ] }
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
                { minimize: !isDev, sourceMap: shouldUseSourceMap },
                { importLoaders: 1 },
                modules === true
                    ? {
                        localIdentName: '[path]__[name]___[local]',
                        modules: true,
                    }
                    : {}
            ),
        },
        {
            loader: require.resolve('postcss-loader'),
            options: postCSSLoaderOptions
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
                    fallback: {
                        loader: require.resolve('style-loader'),
                        options: { hmr: false },
                    },
                    use: loaders
                },
                extractTextPluginOptions
            )
        ),
    };
};
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    // the file bundle name is generated from the name in the entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // external CSS file
        new ExtractTextPlugin('[name].[contenthash].css'),

        // Cache Busting: the filename changes when the file contents change --
        // and as long as the files are the same, they can stay cached
        new WebpackMd5Hash(),

        // Use CommonsChunkPlugin to create a separate bundle
        // of vendor libraires so they are cached separately.
        // the name here must match the entry point name higher up
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // create HTML file that creates a reference to bundled JS
        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),

        // eliminate duplicate packages
        new webpack.optimize.DedupePlugin(),

        // minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
        ]
    }
}
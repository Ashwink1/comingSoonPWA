 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');

    module.exports = merge(common, {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '[name].css',
                allChunks: true,
                disable: true,
                ignoreOrder: true,
            }),
        ],
 });
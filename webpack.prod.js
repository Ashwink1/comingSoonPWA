const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
    module.exports = merge(common, {
      devtool: 'cheap',
      plugins: [
          new ExtractTextPlugin({
              filename: '[name].[id].css',
              //      allChunks: true,
              ignoreOrder: true,
          }),
          new UglifyJSPlugin(),
      ]
});
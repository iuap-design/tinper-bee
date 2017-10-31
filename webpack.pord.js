var merge = require('webpack-merge');
var config = require('./webpack.conf');
var webpack = require('webpack');

module.exports = merge(config, {
    output: {
        filename: 'tinper-bee.min.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false,
            },
        })
    ]
})
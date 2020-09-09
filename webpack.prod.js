var merge = require('webpack-merge');
var config = require('./webpack.conf');
var webpack = require('webpack');

module.exports = merge(config, {
    output: {
        filename: 'tinper-bee.min.js',
    },
    // 添加process.env.NODE_ENV 解决redux production 控制台提示问题
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
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

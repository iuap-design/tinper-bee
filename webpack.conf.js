var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    cache: false,
    entry: {
        index: './index',
    },
    output: {
        path: path.join(process.cwd(), './build'),
        filename: 'tinper-bee.js',
        library: 'TinperBee',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","postcss-loader"],
                    fallback: "style-loader"
                })
            },
        ]
    },
    externals: {
        react: {
            root: 'React',
            var: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            var: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
        'prop-types': {
            root: 'PropTypes',
            var: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
        },

    },
    plugins: [
        new ExtractTextPlugin({
            filename: "index.css"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,  // remove all comments
        //     },
        //     compress: {
        //         warnings: false,
        //     },
        // }),
    ],
};

module.exports = config;

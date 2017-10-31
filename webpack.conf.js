var webpack = require('webpack');
var path = require('path');

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
    module: {},
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

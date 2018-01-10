const glob = require('glob');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let entries = {};

glob.sync("./lib/*/index.js").forEach(path => {
    let chunk = path.split("./lib/")[1].split(".js")[0];
    entries[chunk] = [path];
});

module.exports =  {
    entry: entries,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "",
        libraryTarget: 'umd',
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
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","postcss-loader"],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["sass-loader", "css-loader","postcss-loader"],
                    fallback: "style-loader"
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
    ],
    resolve: {
        extensions: [
            ".js", "jsx", ".css"
        ]
    }
}
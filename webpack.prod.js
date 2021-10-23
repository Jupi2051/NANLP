const HtmlWebpackPlugin = require('html-webpack-plugin');
const JestPlugin = require("babel-jest");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/client/index.js"],
    mode: "production",
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/client/html/index.html",
                filename: "./index.html"
            },
            new WorkboxPlugin.GenerateSW()
        ),
    ]
}
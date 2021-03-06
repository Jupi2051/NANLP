const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/client/index.js"],
    mode: "development",
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
            }
        ),
    ]
}
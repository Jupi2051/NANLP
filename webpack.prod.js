module.exports = {
    entry: "./src/client/index.js",
    mode: "production",
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
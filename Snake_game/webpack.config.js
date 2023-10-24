const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
      ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        hot: true,
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    }
}
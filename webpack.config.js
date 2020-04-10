const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        table: path.resolve(__dirname, "./src/tablepage/index.js"),
        index: path.resolve(__dirname, "./src/authRegistr/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        port: 7870,
        index: "index.html",
        hotOnly: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "table.html",
            template: path.resolve(__dirname, "./public/table.html"),
            chunks: ["table"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // devtool: "source-map",
};
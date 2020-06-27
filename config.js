const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/JavaScript/index.js',
        main: './src/JavaScript/main.js',
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static/js'),
    },
    module:{
        rules:[
        {
            test: /\.(scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                ],
        },
        ],
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    ],
  };
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const { test } = require('media-typer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


//const webpack = require('webpack'); //to access built-in plugins
//const path = require('./src');

module.exports = {
    // entry: './path/to/my/entry/file.js',
    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true,
        filename: 'main[contenthash].js'
    },

    module: {
        rules: [{
                test: /\.html$/i,
                use: 'html-loader',

            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/i,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?p|gif)$/i,
                loader: 'file-loader'

            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        //  new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Maquinas21 aqui encuentras todo',
            template: './src/index.html',
            // filename: './index.html',

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets/', to: 'assets/' }]
        })

    ],

    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`
            new HtmlMinimizerPlugin(),
            new CssMinimizer(),
            new Terser()
        ],
    }
};
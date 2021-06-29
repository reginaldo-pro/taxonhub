const path = require('path');
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = env => require(`./webpack.${env}`)(env);
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 


module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge (
        {
            mode,
            target: 'web',
            devServer: {
                port: 3000,
                open: true,
                hot: true,
                overlay: true,
                contentBase: './build',
            },
            entry: './src/index.js',
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'js/[name].bundle.js'
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx"]
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        exclude: /(node_modules)/,
                        use: ['babel-loader'], // we use this to transpile es6 code on the web
                    },
                    {
                        test: /\.jpe?g|png$/,
                        exclude: /node_modules/,
                        loader: ["url-loader", "file-loader"]
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader',
                    }
                ]
            },
            plugins: [
                // HtmlWebpackPlugin is used to inject our created bundles into this html file so // we need to create it.
                new HtmlWebpackPlugin({
                    template: './public/index.html',
                    filename: './index.html',
                    favicon: './assets/favicon.ico'
                }),
                new webpack.HotModuleReplacementPlugin(),
                new CleanWebpackPlugin()
            ]
        },
        modeConfiguration(mode)
    );
};
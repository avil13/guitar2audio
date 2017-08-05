const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const ENV = process.env.NODE_ENV;
const debug = process.env.NODE_ENV !== "production";

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        guitar2audio: './guitar2audio.ts',
        app: './app.ts',
        styles: './scss/main.scss'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'Guitar2audio',
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    devtool: debug ? "inline-sourcemap" : null,

    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    devServer: {
        port: 4000, //Tell dev-server which port to run
        open: true, // to open the local server in browser
        contentBase: path.resolve(__dirname, 'src'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            title: "Webpack Boilerplate 🤖", //Remove or change to change title in index.html
            template: 'index.ejs'
        }),
        new DashboardPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        })
    ]
};

if (ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;

'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    // The entry file. All your app roots fromn here.
    entry: [
        path.join(__dirname, 'app/index.prod.jsx')
    ],
    // Where you want the output to go
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: ''
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // handles creating an index.html file and injecting assets. necessary because assets
        // change name because the hash part changes. We want hash name changes to bust cache
        // on client browsers.
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        // extracts the css from the js files and puts them on a separate .css file. this is for
        // performance and is used in prod environments. Styles load faster on their own .css
        // file as they dont have to wait for the JS to load.
        new ExtractTextPlugin('[name]-[hash].min.css'),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        // creates a stats.json
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        // Runs before loaders
        preLoaders: [],
        // loaders handle the assets, like transforming sass to css or jsx to js.
        loaders: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']

            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
	       loader: "file-loader"
	    },
	    {
            test: /\.scss$/,
            // we extract the styles into their own .css file instead of having
            // them inside the js.
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
	    },
	       {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }]
    },
    postcss: [
        require('autoprefixer')
    ]
};

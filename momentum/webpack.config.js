const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  
  const isProduction = options.mode === 'production';

  const config = {

    mode: isProduction ? 'production' : 'development',

    devtool: 'source-map',
    //watch: !isProduction,

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin( {
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: "assets/sounds", to: "sounds" },
          { from: "assets/quotes.json", to: "json" },
          { from: "assets/images", to: "images" },
        ],})
    ],

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
/* 
        {
          test: /\.(png|ico|svg|jpe?g|gif)$/,
          use: [ {
            loader: 'file-loader',
            options : {
              name: '[name]-[hash].[ext]',
              outputPath: 'assets',
              //publicPath: 'assets',
              //emitFile: true,
              //esModule: false,
  
            }
          }
          ]
          
        },
       {
          test: /\.(otf|ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options : {
            name: 'fonts/[name]-[hash].[ext]',
            
          }
        },*/
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ]
    },
    devServer : {
      compress: true,
      port: 3000,
    },
  }

  return config;
  
};
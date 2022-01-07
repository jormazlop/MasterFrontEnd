const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
   },
   entry: {
     app: ['@babel/polyfill', './index.tsx'],
     appStyles: ['./mystyles.scss',]
   },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
       {
         test: /\.tsx$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
       },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: "sass-loader",
          options: {
          implementation: require("sass")
        }
      }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
            "css-loader"
          ],
      },
     ],
   },
   plugins: [
       new HtmlWebpackPlugin({
         filename: 'index.html', 
         template: 'index.html',
         title: 'React App',
         favicon: './assets/logo-lemoncode.png'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: "./assets", to: "assets" }
          ],
        })
     ]
};
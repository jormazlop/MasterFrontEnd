const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
    watchFiles: './src'
  },
  plugins: [new BundleAnalyzerPlugin()]
});
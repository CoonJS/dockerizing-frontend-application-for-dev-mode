var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryPoint = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: entryPoint,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader'
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dockerizing-frontend-application-for-dev-mode',
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};

const { isPlainObject } = require('jquery');
const path = require('path');
const { Module } = require('webpack');
let webpack = require('webpack');

Module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './src.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

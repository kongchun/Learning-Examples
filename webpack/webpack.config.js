const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    	inject:"head"
    }),

    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]

	
}
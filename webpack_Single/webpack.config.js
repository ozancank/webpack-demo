const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'main.js' },
  module: {
    rules: [
      {
        test: /\.css$/,
        //use:["style-loader","css-loader"] //CSS kodlarını html içerisine style tagleri arasında yazar.
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};

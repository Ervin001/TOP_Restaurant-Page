<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/pages/home.js',
>>>>>>> master
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
<<<<<<< HEAD
  mode: 'development',
=======
>>>>>>> master
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
<<<<<<< HEAD
    publicPath: '/',
=======
>>>>>>> master
  },
  optimization: {
    runtimeChunk: 'single',
  },
<<<<<<< HEAD
=======
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
>>>>>>> master
};

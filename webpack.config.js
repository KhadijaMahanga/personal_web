var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
   entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   node: {
      console: true,
   }
}

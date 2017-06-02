var path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: './images/[name].[hash].[ext]'
        }
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

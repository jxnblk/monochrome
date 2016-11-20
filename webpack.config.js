
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/entry.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        inclue: /hue-name/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  devServer: {
    contentBase: 'public/',
    historyApiFallback: true
  }
}


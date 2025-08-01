const TerserPlugin = require('terser-webpack-plugin')

const path = require('path')
const env = process.env.NODE_ENV || 'development'

module.exports = {
  entry: `./src/@development/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static')
  },

  mode: env,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(mp4|webm|mp3|wav)$/i,
        type: 'asset/resource'
      }
    ]
  },

  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@env': path.join(__dirname, 'src', '@' + env)
    }
  }
}

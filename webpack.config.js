const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const commonConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash:8].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

const productionConfig = {}

const developmentConfig = {
  devtool: 'source-map',
  devServer: {
    port: 8000
  }
}

module.exports = (env, options) => {
  switch(options.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig)
    case 'production':
      return merge(commonConfig, productionConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}

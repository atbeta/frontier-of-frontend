const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const commonConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 8889,
      openAnalyzer: false
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 8000,
    historyApiFallback: true
  }
}

module.exports = (env, options) => {
  switch (options.mode) {
    case 'development':
      return smp.wrap(merge(commonConfig, developmentConfig))
    case 'production':
      return smp.wrap(merge(commonConfig, productionConfig))
    default:
      throw new Error('No matching configuration was found!')
  }
}

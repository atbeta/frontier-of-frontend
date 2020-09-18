const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 8000
  },
}

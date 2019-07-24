const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const rules = [
  {
    exclude: /node_modules/,
    loader: 'babel-loader',
    test: /\.tsx?/,
  },
]

module.exports = {
  devServer: {
    contentBase: './',
    hot: true,
    port: 3000,
  },
  entry: './src/index.tsx',
  mode: 'development',
  module: { rules },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: { 
    extensions: ['.ts', '.tsx', '.js'],  
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  target: 'web',
  plugins: [
    new HtmlWebPackPlugin({
        template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map'
}

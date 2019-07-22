const path = require('path')
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
  },
  target: 'web',
}

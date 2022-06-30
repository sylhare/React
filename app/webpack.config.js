const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: './dist',
    port: 7231,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              name: "[path][name]-[hash:8].[ext]",
              limit: 10000,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

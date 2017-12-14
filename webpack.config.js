const path = require('path');
const webpack = require('webpack');

const config = {
  target: 'electron',
  context: path.resolve(__dirname, "src/renderer"),
  entry: [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test:  /\.js|\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [
              ['import', { libraryName: 'antd', style: true }] // `style: true` 会加载 less 文件
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
  },
  node: {
    fs: "empty"
  }
};

module.exports = config;

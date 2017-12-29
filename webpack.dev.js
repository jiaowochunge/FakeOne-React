const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/app/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'www')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ONE·一个',
      template: './src/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'src/app/script')]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'babel-preset-react'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.(gif|png|jpg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './asset/img/[hash].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

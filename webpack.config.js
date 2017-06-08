const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'www'),
};

const dev = true

const common = {
  entry: {
    main: path.join(PATHS.src, 'app.js')
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.jsx?$/,
        include: PATHS.src,
        exclude: path.join(PATHS.src, 'blockly'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react'].concat(dev ? ['react-hmre'] : []),
              plugins: ['transform-runtime']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './asset/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
    ]),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(dev)
    }),
    new HtmlWebpackPlugin({
      minify: {},
      template: path.join(PATHS.src, 'index.ejs'),
      inject: 'body'
    }),
  ].concat(dev ? [
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),

  ])
};

if (dev) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      port: 8001,
    },
    devtool: "#source-map",
  });
} else {
  module.exports = common;
}

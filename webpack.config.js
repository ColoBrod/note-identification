const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => ({
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    teacher: './src/js/teacher.js',
  },
  output: {
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /(logo|star|settings|search)\.(png|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'img',
            esModule: false,
          }
        }
      },
      {
        test: /notes\/.*\.png$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/notes',
            esModule: false,
          }
        }
      },
    ]
  },
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: false,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: 'src/teacher.html',
      filename: 'teacher.html',
      chunks: ['teacher']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devtool: argv.mode === 'development' ? 'source-map' : false,
})

// Removed from package.json
// "watch": "webpack --mode development --progress --watch && browser-sync start --server 'dist' --files \"index.html, css/*.css, js/*.js\" ",
// "watch": "webpack-dev-server --mode development --progress",

const path = require('path');

const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  resolve: {
      extensions: ['.js', '.ts']
  },
  entry: {
    polyfills: "./src/polyfills.ts",
    main: "./src/main.ts",
    vendor: "./src/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
          test: /\.scss$/,
          loader: ["raw-loader", "sass-loader?sourceMap"]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: 'tslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "dist/fonts/[name].[ext]"
        }
      },
      {
          test: /\.html$/,
          loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new GoogleFontsPlugin({
        fonts: [
            { family: "Lato" },
        ]
    })
  ],
  devtool: "source-map",
  devServer: {
      "historyApiFallback": true
    }
};
const path = require("path");
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/js/index.js",
  plugins: [new miniCssExtractPlugin({
    filename : 'main.[fullhash].css'
  }),new htmlWebpackPlugin({
    template : "./src/template.html"
  })],
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
           loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test : /\.(css)$/,
        use : ['style-loader','css-loader','postcss-loader']
      },
      {
        test : /\.(html)$/,
        use : {
          loader : 'html-loader',
        }
      },{
        test : /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        // generator: {
        //   filename: 'static/[hash][ext][query]'
        // }
      }
    ]
  }
};

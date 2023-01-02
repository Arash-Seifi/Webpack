const common = require('./webpack.common')
const {merge} = require("webpack-merge")
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  plugins : [ new CleanWebpackPlugin(),],
  optimization : {
    minimize : true,
    minimizer : [new TerserPlugin()]
  }
});

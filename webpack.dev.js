const common = require('./webpack.common')
const {merge} = require("webpack-merge")
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
});

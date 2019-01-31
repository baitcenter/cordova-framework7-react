const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  devtool: false
});

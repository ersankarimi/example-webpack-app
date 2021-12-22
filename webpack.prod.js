const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
	mode: "production",
	devtool: "source-map",
	output: {
		filename: "app.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
});

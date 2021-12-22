const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	// devServer: {

	// },
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist"),
	},
});

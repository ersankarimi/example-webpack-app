const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",

	// output
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "./assets/js/[name].js",
		assetModuleFilename: "./assets/[name][ext]",
	},

	// module
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
});

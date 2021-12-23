const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
	mode: "production",
	devtool: "source-map",

	// output
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "./assets/js/[name].[contenthash].js",
		assetModuleFilename: "./assets/[name].[hash][ext]",
	},

	// optimization
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},

	// plugins
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./assets/css/[name].[contenthash].css",
		}),
	],

	// module
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
});

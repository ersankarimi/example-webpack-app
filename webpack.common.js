const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App Demo",
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// entry
	entry: {
		app: "./src/index.js",
		vendor: "./src/vendor.js",
	},
	output: {
		clean: true,
	},

	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App Demo",
			template: "./src/template.html",
		}),
	],

	// module
	module: {
		rules: [
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

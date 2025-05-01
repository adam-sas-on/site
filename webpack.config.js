// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	],
	output: {
		filename: "./static/js/main.js"
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {loader: "babel-loader"}
		},
			{
				test: /\.s?css$/,
				use: ["css-loader", "style-loader"]
			}]
	}
};

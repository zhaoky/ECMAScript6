/**
 * Created by zhaoky on 2017/1/19.
 */
var webpack = require("webpack");

module.exports = {
	devtool  : "source-map",  //生成source-map
	entry    : __dirname + "/es6/2.destructuring.js",
	output   : {
		path    : __dirname + "/public",
		filename: "bundle.js",
		publicPath:"http://127.0.0.1:8888/"
	},
	devServer: {
		contentBase       : "./public",//本地服务器所加载的页面所在的目录
		colors            : true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		hot               : true,
		inline            : true,//实时刷新
		port              : "8888" //默认8080
	},
	module   : {
		loaders: [
			{
				test   : /\.js$/,
				exclude: /node_modules/,
				loader : 'babel',//在webpack的module部分的loaders里进行配置即可
				query  : {
					'presets': ['es2015']
				}
			}
		]
	}
};
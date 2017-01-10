// webpack.config.js
var path = require("path");

module.exports = {
	entry: './src/app.js', //演示单入口文件
	output: {
		path: path.join(__dirname, 'dist'), //打包输出的路径
		filename: 'bundle.js', //打包后的名字
		publicPath: "./dist" //html引用路径，在这里是本地地址。
	}
};
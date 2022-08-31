// 引入一个包
const path = require("path");

// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
  // 入口文件
  entry: "./src/index.ts",
  mode: "production",
  // 指定打包文件所在的目录
  output: {
    // 指定打包后的文件目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的文件
    filename: "bundle.js",
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        // test指定规则对哪一些文件生效，匹配以ts结尾的文件
        test: /\.ts$/,
        // 以ts结尾的文件要用什么来进行处理
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境（在哪些浏览器运行）
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方法
                    useBuiltIns: "usage", // usage按需加载
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "HTML标题",
      template: "./src/index.html", // 根据目录文件生成html模板
    }),
    new CleanWebpackPlugin(),
  ],
  // 设置引用模块
  resolve: {
    extensions: [".ts", ".js"], // 以ts和js结尾的文件都可以作为模块使用
  },
};

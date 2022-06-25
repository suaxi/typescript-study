const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js"
    },
    mode: 'development',
    //指定打包时所使用的模块
    module: {
        rules: [
            {
                //规则生效的文件
                test: /\.ts$/,
                //加载器
                use: 'ts-loader',
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: 'webpack打包插件'
            template: "./src/index.html"
        }),
    ],

    //设置需要引用的模块
    resolve: {
        extensions: ['.ts', ".js"]
    }
}
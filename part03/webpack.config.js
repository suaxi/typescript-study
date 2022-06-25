const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js",
        environment: {
            //不使用箭头函数
            arrowFunction: false
        }
    },
    mode: 'development',
    //指定打包时所使用的模块
    module: {
        rules: [
            {
                //规则生效的文件
                test: /\.ts$/,
                //加载器（执行顺序为倒序，ts->js->转译）
                use: [
                    //配置babel
                    {
                        loader: 'babel-loader',
                        options: {
                            //环境预设置
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "51",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        //使用corejs的方式，usage 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
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
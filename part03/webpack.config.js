const path = require('path');

module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js"
    },
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
    }
}
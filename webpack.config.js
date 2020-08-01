'use strict';
const path = require("path");
const webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: 'development',
    plugins:[
        new  webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: "./dist",
        // port: 8080,
        hot: true //是否开启热更新
    },
    // watch: true //和在package.json 里面配置的--watch 是一样的
}
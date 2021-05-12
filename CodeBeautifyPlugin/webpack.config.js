const path = require('path');
const CodeBeautifyPlugin = require('./CodeBeautifyPlugin')

module.exports = {
    mode: "development", // "production" | "development" | "none",
    devtool: false, //模块不会被eval包裹，更直观
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"), // string (default)
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "[name].js", // string (default)
        // entry chunk 的文件名模板
        publicPath: "/assets/", // string
    },
    plugins: [
        new CodeBeautifyPlugin(),
    ]
}
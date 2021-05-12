const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none",
    devtool: false, //模块不会被eval包裹，更直观
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"), // string (default)
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "[name].js", // string (default)
        // entry chunk 的文件名模板
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        // cacheDirectory: true
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/
            },
            {test: /\.css$/, use: 'css-loader'},
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        //尽可能减少后缀尝试的可能性
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: 'index.html',
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
    ]
}
const path = require('path');
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const HappyPack = require('happypack')

const threadNum = os.cpus().length
const happyThreadPool = HappyPack.ThreadPool({size: threadNum})

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
    optimization: {
        splitChunks: {
            chunks: 'async',//同步（initial）、异步（async）、所有模块有效（all）
            minSize: 30000,//最小尺寸，当模块大于30KB
            maxSize: 0,//对模块进行二次分割时候使用，不推荐使用
            minChunks: 1,//打包生成的chunk文件最少有另外多少个chunk引用了它
            maxAsyncRequests: 5,//最大异步请求数
            maxInitialRequests: 3,//最大初始化请求数
            automaticNameDelimiter: '~',// 打包分割符号
            name: true, //打包后的名称
            cacheGroups: { //缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env', '@babel/preset-react'],
                //         cacheDirectory: true
                //     }
                // },
                use: 'happypack/loader',
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
        modules: [path.resolve(__dirname, '..', 'node_modules')],
        mainFields: ['main'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // 'react': path.resolve(__dirname, '..', 'node_modules/react/cjs/react.min.js'),
        },
        //尽可能减少后缀尝试的可能性
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: 'index.html',
        }),
        // new HardSourceWebpackPlugin(),
        new HappyPack({
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        cacheDirectory: true
                    }
                },
            ],
            threadPool: happyThreadPool
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS的参数如下：
            uglifyJS: {
                output: {
                    beautify: false,
                    comments: false
                },
                compress: {
                    // warnings: false,
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        })

    ]
}
/**    移除打包后代码的注释
 1、CodeBeautifyPlugin.js 文件（独立模块）
 2、模块对外暴露的 js 函数
 */

class CodeBeautifyPlugin {
    //在构造函数中获取用户为该插件传入的配置
    constructor(pluginOptions) {
        this.options = pluginOptions;
    }

    //原型定义一个 apply 函数，并注入了 compiler 对象
    apply(compiler) {
        var reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)|(\/\*\*\*\*\*\*\/)/g;
        /**
         emit   AsyncSeriesHook
         输出 asset 到 output 目录之前执行。
         回调参数：compilation
         */
        compiler.hooks.emit.tap('CodeBeautifyPlugin', (compilation) => {
            Object.keys(compilation.assets).forEach((data) => {
                console.log(data);
                let content = compilation.assets[data].source(); // 获取处理的文本
                content = content.replace(reg, function (word) { // 去除注释后的文本
                    return /^\/{2,}/.test(word) || /^\/\*!/.test(word) || /^\/\*{3,}\//.test(word) ? "" : word;
                });
                compilation.assets[data] = {
                    source() {
                        return content;
                    },
                    size() {
                        return content.length;
                    }
                }
            });
        });
    }
}

//暴露 js 函数
module.exports = CodeBeautifyPlugin;
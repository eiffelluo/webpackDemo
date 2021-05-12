class BasePlugin {
    //在构造函数中获取用户为该插件传入的配置
    constructor(pluginOptions) {
        this.options = pluginOptions;
    }

    //原型定义一个 apply 函数，并注入了 compiler 对象
    apply(compiler) {
        compiler.hooks.emit.tap('BasePlugin', (compilation) => {
            console.log('BasePlugin')
        });
    }
}

//暴露 js 函数
module.exports = BasePlugin;
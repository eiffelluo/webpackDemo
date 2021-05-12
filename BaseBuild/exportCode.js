const fs = require('fs')
const path = require('path')
const exportGraph = require('./exportGraph')

const bundle = (data) => {
    const directoryPath = path.resolve(__dirname, 'dist')
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath)
    }
    const filePath = path.resolve(directoryPath, 'bundle.js')
    fs.writeFileSync(filePath, `${data}\n`)
}

//下面是生成代码字符串的操作
const exportCode = (entry) => {
    //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object]
    const graph = JSON.stringify(exportGraph(entry))
    const code = `
        (function(graph) {
            //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
            function require(module) {
                //localRequire的本质是拿到依赖包的exports变量
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, graph[module].code);
                return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
            }
            require('${entry}')
        })(${graph})`
    bundle(code)
}
module.exports = exportCode

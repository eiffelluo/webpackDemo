const exportDependencies = require('./exportDependencies')

//entry为入口文件路径
const exportGraph = (entry)=>{
    const entryModule = exportDependencies(entry)
    const graphArray = [entryModule]
    for(let i = 0; i < graphArray.length; i++){
        const item = graphArray[i];
        //拿到文件所依赖的模块集合,dependencies的值参考exportDependencies
        const { dependencies } = item;
        for(let j in dependencies){
            graphArray.push(
                exportDependencies(dependencies[j])
            )//关键代码，目的是将入口模块及其所有相关的模块放入数组
        }
    }
    //接下来生成图谱
    const graph = {}
    graphArray.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    //可以看出，graph其实是 文件路径名：文件内容 的集合
    return graph
}
module.exports = exportGraph
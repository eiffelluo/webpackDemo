const path = require('path');
const exportGraph = require(path.resolve(__dirname, '..', './exportGraph'))
console.log(exportGraph(path.resolve(__dirname, './index.js')))
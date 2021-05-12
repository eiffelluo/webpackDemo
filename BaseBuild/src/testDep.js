const path = require('path');

const exportDependencies = require(path.resolve(__dirname, '..', './exportDependencies.js'))
console.log(exportDependencies(path.resolve(__dirname, './index.js')))
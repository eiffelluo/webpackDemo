const path = require('path');
const exportCode = require(path.resolve(__dirname, '..', './exportCode.js'))

exportCode(path.resolve(__dirname, './index.js'))
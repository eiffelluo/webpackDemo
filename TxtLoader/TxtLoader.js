const {getOptions} = require('loader-utils');

function txtLoader(source) {
    const options = getOptions(this);

    source = source.replace(/\[name\]/g, options.name);

    return `export default ${JSON.stringify(source)}`;
}

module.exports = txtLoader
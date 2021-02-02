const config = require('./config');

const fs = require('fs');

module.exports = () => {
    let data = fs.readFileSync(config.MESSAGE_FILE).toString();
    return data.replace(/\n/g, "<br />");
};
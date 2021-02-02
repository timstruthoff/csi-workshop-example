const fs = require('fs');

module.exports = file => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (err) {
        return false;
    }
}
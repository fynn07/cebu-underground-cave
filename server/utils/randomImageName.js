const crypto = require('crypto');

const randomImageName = () => {
    return crypto.randomBytes(32).toString('hex');
}

module.exports = {randomImageName}
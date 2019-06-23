const { settings } = require('../package.json')

var secrets;

try {
    secrets = require('../secrets.json')
} catch (err) {
    console.info('using environment variables instead of secrets.json')
}

const PORT = process.env.PORT || settings.PORT;

module.exports = {
    PORT
};
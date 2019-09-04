const { settings } = require('../package.json')

var secrets;
var connectionString;
try {
    secrets = require('../secret.json');
    connectionString = `${mongo.address_prefix}${mongo.username}:${mongo.password}${mongo.address_suffix}`;
} catch (err) {
    console.info('using environment variables instead of secrets.json')
    connectionString = process.env.DB_CONNECT_STR || "mongodb+srv://test:test@egads-gamejam-2019-forms-xyfuk.mongodb.net/test?retryWrites=true&w=majority";
}

// console.log("connect to " + connectionString);

const PORT = process.env.PORT || settings.PORT;

module.exports = {
    PORT,
    connectionString,

};
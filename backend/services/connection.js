const pgc = require('postgresql-client')
const createSubscriber = require("pg-listen")

function createConnection() {
    return new pgc.Pool({
        host: process.env.CONNECTION_STRING || 'postgres://postgres:1234@localhost',
        pool: {
            min: 1,
            max: 10,
            idleTimeoutMillis: 5000
        }
    });
}


const connection = createConnection()
const subscriber = () => createSubscriber({connectionString: process.env.CONNECTION_STRING || 'postgres://postgres:1234@localhost'})
module.exports = { connection, subscriber }
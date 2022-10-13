const {connection} = require('./services/connection');
const fs = require('fs')
const scripts = [
    './sql/drop.sql',
    './sql/users.sql',
    './sql/contacts.sql',
    './sql/messages.sql',
];

(async() => {
    for(const script of scripts) {
        console.log('Executing ', script)
        await connection.execute(fs.readFileSync(script).toString('utf-8'))
    }
    await connection.close()
})()

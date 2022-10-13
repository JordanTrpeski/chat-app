const {connection} = require('./connection')
const {get_user_id_from_token, exchange_username_for_user_id, exchange_user_id_for_username} = require("./users");

async function add_contact(token, username) {
    const user_id = get_user_id_from_token(token)
    const second_user_id = await exchange_username_for_user_id(username)
    const query = 'INSERT INTO contacts(first, second) VALUES ($1, $2)'
    const opts = {
        params: [
            user_id,
            second_user_id
        ]
    }
    const value = await connection.query(query, opts)
    if (value.rowsAffected !== 1) {
        throw `Couldn't add contact`
    }
}

async function get_contacts(token) {
    const user_id = get_user_id_from_token(token)
    const query = 'SELECT * FROM contacts WHERE first=$1 OR second=$1'
    const opts = {
        params: [
            user_id
        ]
    }
    const result = await connection.query(query, opts)
    const contacts = []
    for(const row of result.rows) {
        if (row[0] === user_id) {
            contacts.push(await exchange_user_id_for_username(row[1]))
        } else {
            contacts.push(await exchange_user_id_for_username(row[0]))
        }
    }
    return contacts
}

module.exports = {
    add_contact,
    get_contacts
}
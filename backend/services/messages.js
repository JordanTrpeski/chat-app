const {connection, subscriber} = require('./connection')
const {get_user_id_from_token, exchange_username_for_user_id, exchange_user_id_for_username} = require("./users");
const debug = require('debug')('backend:server');

async function send_message(token, contact, content) {
    const sender = get_user_id_from_token(token)
    const receiver = await exchange_username_for_user_id(contact)
    const query = 'INSERT INTO messages(sender, receiver, text) VALUES ($1, $2, $3)'
    const opts = {
        params: [
            sender,
            receiver,
            content
        ]
    }
    const value = await connection.query(query, opts)
    if (value.rowsAffected !== 1) {
        throw `Couldn't send message`
    }
}


async function process_message(message_row) {
    const id = message_row[0]
    const sent_at = +message_row[1]
    const sender = await exchange_user_id_for_username(message_row[2])
    const receiver = await exchange_user_id_for_username(message_row[3])
    const value = message_row[4]
    return {id, sent_at, sender, receiver, value}
}

async function process_message_payload(payload) {
    const id = payload.id
    const sent_at = +new Date(payload.sent_at)
    const sender = await exchange_user_id_for_username(payload.sender)
    const receiver = await exchange_user_id_for_username(payload.receiver)
    const value = payload.text
    return {id, sent_at, sender, receiver, value}

}

async function get_messages(token, contact, page) {
    const sender = get_user_id_from_token(token)
    const receiver = await exchange_username_for_user_id(contact)
    const query = 'SELECT id,sent_at,sender,receiver,text FROM messages WHERE (sender=$1 AND receiver=$2) OR (sender=$2 AND receiver=$1) ORDER BY sent_at DESC LIMIT 10 OFFSET $3'
    const opts = {
        params: [
            sender,
            receiver,
            page * 10
        ]
    }
    const result = await connection.query(query, opts)
    const messages = []
    for (const message of result.rows) {
        messages.push(await process_message(message))
    }

    return messages
}

async function subscribe_for_messages(token, handler) {
    try {
        const sender = get_user_id_from_token(token)
        const sub = subscriber()
        const event_id = '_' + sender.replaceAll('-','')

        sub.connect().then(async() => {
            debug(`CONNECT ${event_id}`)
            await sub.listenTo(event_id)
            sub.notifications.on(event_id, async payload => {
                handler(await process_message_payload(payload))
            })
        })
        return () => {
            debug(`CLOSE ${event_id}`)
            sub.close()
        }
    } catch {
        return () => {}
    }


}

module.exports = {
    send_message,
    get_messages,
    subscribe_for_messages
}


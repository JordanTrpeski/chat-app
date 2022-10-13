const {connection} = require('./connection')
const crypto = require('crypto')
const jwt = require('./jwt')

function hash(value) {
    return crypto.createHash('sha256').update(value).digest('base64')
}

async function exchange_user_id_for_username(user_id) {
    const query = 'SELECT username FROM users WHERE id=$1'
    const opts = {
        params: [
            user_id.toLowerCase()
        ]
    }
    const response = await connection.query(query, opts)
    if (response.rows.length !== 1) {
        throw `Couldn't find user`
    }
    const [row] = response.rows
    const [username] = row
    return username

}

async function exchange_username_for_user_id(username) {
    const query = 'SELECT id FROM users WHERE username=$1'
    const opts = {
        params: [
            username.toLowerCase()
        ]
    }
    const response = await connection.query(query, opts)
    if (response.rows.length !== 1) {
        throw `Couldn't find user`
    }
    const [row] = response.rows
    const [id] = row
    return id
}

async function register(username, password, profile) {
    const password_hash = hash(password)
    const opts =  {
        params: [
            profile,
            password_hash,
            username.toLowerCase()
        ],
    }
    const query = 'INSERT INTO users(profile, password_hash, username) VALUES($1, $2, $3);'
    const value = await connection.query(query, opts)
    if (value.rowsAffected !== 1) {
        throw `Couldn't create user`
    }
}

function get_user_id_from_token(token) {
    return jwt.decode_jwt(token).id
}

async function change_password(token, old_password, new_password) {
    const user_id = get_user_id_from_token(token)
    const new_password_hash = hash(new_password)
    const old_password_hash = hash(old_password)
    const query = 'UPDATE users SET password_hash=$1 WHERE id=$2 AND password_hash=$3'
    const opts = {
        params: [
            new_password_hash,
            user_id,
            old_password_hash
        ]
    }
    const value = await connection.query(query, opts)
    if (value.rowsAffected !== 1) {
        throw `Couldn't change password`
    }
}

async function change_profile(token, new_profile) {
    const user_id = get_user_id_from_token(token)
    const query = 'UPDATE users SET profile=$1 WHERE id=$2'
    const opts = {
        params: [
            new_profile,
            user_id
        ]
    }
    const value = await connection.query(query, opts)
    if (value.rowsAffected !== 1) {
        throw `Couldn't change profile`
    }
}

async function profile(username) {
    const query = 'SELECT profile FROM users WHERE username=$1'
    const opts = {
        params: [
            username.toLowerCase()
        ]
    }
    const response = await connection.query(query, opts)
    if (response.rows.length !== 1) {
        throw `Couldn't find user`
    }
    const [row] = response.rows
    const [profile] = row
    return profile
}

async function login(username, password) {
    const password_hash = hash(password)
    const query = 'SELECT id FROM users WHERE username=$1 AND password_hash=$2'
    const opts = {
        params: [
            username.toLowerCase(),
            password_hash
        ]
    }
    const response = await connection.query(query, opts)
    if (response.rows.length !== 1) {
        throw `Couldn't find user`
    }
    const [row] = response.rows
    const [id] = row
    return jwt.create_jwt({
        id,
        // expire in 24 hours
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    })

}

async function get_self(token) {
    const user_id = get_user_id_from_token(token)
    const query = 'SELECT username FROM users WHERE id=$1'
    const opts = {
        params: [
            user_id
        ]
    }
    const response = await connection.query(query, opts)
    if (response.rows.length !== 1) {
        throw `Couldn't find user`
    }
    const [row] = response.rows
    const [username] = row
    return username

}

module.exports = {
    login,
    profile,
    change_profile,
    change_password,
    register,
    get_user_id_from_token,
    get_self,
    exchange_username_for_user_id,
    exchange_user_id_for_username
}
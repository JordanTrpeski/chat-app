const jwt = require('jsonwebtoken')


function create_jwt(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET || 'viral')
}

function decode_jwt(token) {
    return jwt.verify(token, process.env.JWT_SECRET || 'viral')
}

module.exports = {
    create_jwt,
    decode_jwt
}
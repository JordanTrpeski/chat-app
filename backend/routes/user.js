const express = require('express');
const router = express.Router();
const users = require('../services/users')
const {create_async_response} = require("../services/response");

router.get('/profile/:username', create_async_response(req =>
    users.profile(req.params['username'])));

router.post('/login', create_async_response(async req => {
    const token = await users.login(req.body['username'], req.body['password'])
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    req.res.cookie('auth_token', token, {
        httpOnly: true,
        expires: tomorrow,
        sameSite: "strict"
    })
    return token
}))

router.post('/profile', create_async_response(req =>
    users.change_profile(req.cookies['auth_token'], req.body)))

router.post('/password', create_async_response(req =>
    users.change_password(req.cookies['auth_token'], req.body['old_password'], req.body['new_password'])))

router.post('/register', create_async_response(req =>
    users.register(req.body['username'], req.body['password'], req.body['profile'])))

router.get('/self', create_async_response(req =>
    users.get_self(req.cookies['auth_token'])))


module.exports = router;
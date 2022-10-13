const express = require('express');
const router = express.Router();
const contacts = require('../services/contacts')
const {create_async_response} = require("../services/response");

router.put('/:username', create_async_response(req =>
    contacts.add_contact(req.cookies['auth_token'], req.params['username'])))

router.get('/all', create_async_response(req =>
    contacts.get_contacts(req.cookies['auth_token'])))

module.exports = router;
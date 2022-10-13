const express = require('express');
const router = express.Router();
const messages = require('../services/messages')
const {create_async_response} = require("../services/response");

router.post('/:username', create_async_response(req =>
    messages.send_message(req.cookies['auth_token'], req.params['username'], req.body)))

router.get('/event/subscribe', req => {
    req.res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive'
    });

    req.res.write('retry: 10000\n\n');

    messages.subscribe_for_messages(req.cookies['auth_token'], message => {
        req.res.write(`data: ${JSON.stringify(message)}\n\n`);
    }).then(cleanup => {
        req.res.on('close', cleanup)
    })

})


router.get('/:username/:page', create_async_response(req =>
    messages.get_messages(req.cookies['auth_token'], req.params['username'], parseInt(req.params['page']))))


module.exports = router;
function response_handler(req, async_fn) {
    async_fn(req).then(result => {
            req.res.json({'success': true, result})
        }
    ).catch(e => {
        req.res.json({'success': false, 'error': e})
    })
}

function create_async_response(async_fn) {
    return req => {
        response_handler(req, async_fn)
    }
}

module.exports = {
    create_async_response
}
const express = require('express');
const router = express.Router();

router.get('/', req => {
    req.res.end()
});

module.exports = router;

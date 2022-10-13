const express = require('express');
const router = express.Router();

router.get('/', req => {
  req.res.send('hello, world!')
  req.res.end()
});

module.exports = router;

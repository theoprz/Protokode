const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('game', {
        title: 'Game',
        name: 'Test'
    });
});

module.exports = router;

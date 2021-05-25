const express = require('express');
const router = express.Router();
const map = require('../map.json');

router.get('/', function(req, res, next) {
    res.render('game', {
        title: 'Game',
        name: 'Test',
        map: map
    });
});

module.exports = router;
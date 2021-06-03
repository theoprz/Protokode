const express = require('express');
const router = express.Router();
const map = require('../public/data/map.json');

router.get('/', function(req, res, next) {
    res.render('game', {
        title: 'Game',
        name: 'Game',
        map: map
    });
});

module.exports = router;
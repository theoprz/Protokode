const express = require('express');
const router = express.Router();
const map = require('../public/data/map.json');

router.get('/', function(req, res, next) {
    res.render('test', {
        title: 'Test',
        name: 'un test',
        map: map
    });
});

module.exports = router;
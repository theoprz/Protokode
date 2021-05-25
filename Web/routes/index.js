const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        name: 'Test'
    });
});

router.get('/index', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        name: 'Test'
    });
});

module.exports = router;

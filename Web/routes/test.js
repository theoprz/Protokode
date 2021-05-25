const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('test', {
        title: 'Test',
        name: 'un test'
    });
});

module.exports = router;

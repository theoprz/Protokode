const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        name: 'Test'
    });
});

module.exports = router;

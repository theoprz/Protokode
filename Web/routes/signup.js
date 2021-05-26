const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('signup', {
        title: 'Sign Up',
        name: 'Test'
    });
});

module.exports = router;

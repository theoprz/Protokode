const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('aboutus', {
        title: 'About Us',
        name: 'Test'
    });
});

module.exports = router;

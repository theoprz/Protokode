const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.post('/', function(req, res, next) {
    res.render('signup', {
        title: 'Sign Up',
        name: 'Test'
    });
    console.log(req.body.email);
    console.log(req.body.name);
    console.log(req.body.message);
})

module.exports = app;

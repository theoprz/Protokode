const fs = require('fs');
const express = require('express');
const app = express();
let bodyParser = require('body-parser');


app.use(bodyParser.json())

app.post('/', function(req, res, next) {
    res.render('signup', {
        title: 'Sign Up',
        name: 'Test'
    });

    console.log(req.body.email);
    console.log(req.body.name);
    console.log(req.body.message);

    let data = JSON.parse(fs.readFileSync("public/data/feedback.json"));
    console.log(data);
})

module.exports = app;

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


    let message ={
        "email":req.body.Email,
        "name":req.body.Name,
        "message":req.body.message
        };

    let data = JSON.parse(fs.readFileSync("public/data/feedback.json"));

    Object.create(data.message)
    data.nbMessage++;
    data.message[data.nbMessage]=message;


    let string= JSON.stringify(data,null,"\t");

    fs.writeFileSync("public/data/feedback.json",string);


})

module.exports = app;

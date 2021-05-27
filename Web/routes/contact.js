const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        action: "/signup", //post action for the form
        fields: [
            {name:'Name',type:'text',property:'required'},   //first field for the form
            {name:'Email',type:'email',property:'required'},   //another field for the form
            {name:'message',property:'required'}   //another field for the form
            ],
        name: 'Test'
    });
});

module.exports = router;



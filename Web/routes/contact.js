const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        action: "/signup", //post action for the form
        fields: [
            {name:'email',type:'text',property:'required'},   //first field for the form
            {name:'name',type:'text',property:'required'},   //another field for the form
            {name:'message',type:'text',property:'required'}   //another field for the form
            ],
        name: 'Test'
    });
});

module.exports = router;



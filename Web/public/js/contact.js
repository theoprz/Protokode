/*

function validateForm()                                    
{ 
    var name = document.forms[form]["name"];               
    var email = document.forms[form]["email"];    
    var message = document.forms[form]["message"]; 
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}*/
/*
const { name } = require("ejs");

let form  = document.getElementById('signup');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

form.submit()

let name = form.elements['name'];
let email = form.elements['email'];
//let message = form.elements['message'];
let fullName = name.value;
let emailAddress = email.value;
//let fullmessage = message.value;

var express = require('express');
var bodyParser = require("body-parser");
*/
// serveur html
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(80);
 
server.get('/contact', function(request, response) {
  response.sendFile( __dirname  + '/contact');
});
 
server.post('/signup', function(request, response) {
  var p1 = request.body.p1; 
  console.log("p1=" + p1);
});
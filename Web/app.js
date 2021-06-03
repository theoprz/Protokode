const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const test = require('./routes/test');
const game = require('./routes/game');
const contact = require('./routes/contact');
const aboutus = require('./routes/aboutus');
const signup = require('./routes/signup');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/game', game);
app.use('/test', test);
app.use('/contact', contact);
app.use('/aboutus', aboutus);
app.use('/index', routes);
app.use('/signup', signup);


app.use(function (req, res, next) {
    let err = new Error('Introuvable');
    err.status = 404;
    next(err);
})

if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    })
})

module.exports = app;

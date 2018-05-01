/*
1 - Setup all the const using require - express.js - this is the main app
                                        bodyParser - this is a type of middleware to parse some commands
                                        path - this is required to direct express to folders and files.
                                        app - this is the express() function: its will allow you to access other methods in the express framework
                                        expressValidator - this is only used to validate forms.
2 - Set ejs as the app 'view engine' and then set the pathto views.
3 - Setup the public folder for images, .JS and CSS files
4 - Setup middleware for bodyParser and expressValidator
*/
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//Set static folder root - we use this to save Images/CSS/JS files
app.use(express.static(path.join(__dirname, "public")));

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//expressValidator middleware !!!!to be saved!!!!
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace =param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while (namespace.length){
      formParam+= '['+namespace.shift()+']';
    }
    return{
      param: formParam,
      msg: msg,
      value: value,
    };
  }
}));


// VIEWS  and URL Directions
app.get('/', function(req, res) {
    res.render('base', {      title: "David Redmond Web Developer"} );
});
app.get('/portfolio', function(req, res) {
    res.render('portfolio', {      title: "David Redmond Portfolio"} );
});
app.get('/about', function(req, res) {
    res.render('about', {      title: "David Redmond About me"} );
});
app.get('/contact', function(req, res) {
    res.render('contact', {      title: "David Remdond Contact Me"} );
});
app.get('/blog', function(req, res) {
    res.render('blogMain', {      title: "Helpful Articles"} );
});


app.listen('8000', function(){
  console.log('Portfolio Server Running on Port 8000');
});

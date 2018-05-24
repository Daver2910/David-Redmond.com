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
const nodemailer = require('nodemailer');

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


// Nodemailer Setup!
app.post('/', (req, res)=>{
    res.render( "base", {
      title : "David Redmond Web Developer"
    });
    
  let output =`<h4>You have a new message from the contact form</h4>
  <ul>
    <li>Name : ${req.body.name}</li>
    <li>Email : ${req.body.email}</li>
    <li>Phone No. : ${req.body.phone}</li>
  </ul>
  <H4>Message</h4>
  <p> ${req.body.message}</p>`;

      nodemailer.createTestAccount((err, account) => {
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
              host: 'smtp.david-redmond.com',
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                  user: '1234@david-redmond.com', // generated ethereal user
                  pass: 'Dave3208!' // generated ethereal password
              },
              tls: {
                rejectUnauthorized: false
              }
            });
          // setup email data with unicode symbols
          let mailOptions = {
              from: '"Node Application" <1234@david-redmond.com>', // sender address
              to: 'mail.davidredmond@gmail.com', // list of receivers
              subject: '*** NEW contact from Website***', // Subject line
              text: 'Hello world?', // plain text body
              html: output // html body - this is the var created above
          };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.render("base", {      title: "David Redmond Web Developer"} );


            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
});

//
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

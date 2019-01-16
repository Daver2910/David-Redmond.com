const express = require('express');
const app = express.Router();
const translate = require('../translations/locales');
const $t = translate.setLang();
const nodeMailer = require('../services/nodeMailer');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../database/UserModel');

app.get('/', (req, res, next) => {
    res.status(200);
    res.render('base', {$t});
});

app.get('/about', (req, res, next) => {
    res.status(200);
    res.render('about', {$t});
});

app.get('/admin', (req, res, next) => {
    res.status(200);
    res.render('admin', {$t, name:'David'})
});

app.get('/blog', (req, res, next) => {
    res.status(200);
    res.render('blogMain', {$t});
});

app.get('/contact', (req, res, next) => {
    res.status(200);
    res.render('contact', {$t});
});

app.get('/cv',(req, res, next) => {
    res.status(200);
    res.render('cv', {$t});
});

app.get('/login', (req, res) => {
    res.status(200);
    res.render('login', {$t, error:[], })
});

app.post('/login', (req, res, next) => {

    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.status(200);
                res.render('admin');
            } else {
                res.status(409);
                res.render('login')
            }
        })
        .catch(err => {
            res.status(404).json({
                message: err
            })
        })

});

app.post('/form', (req, res, next) => {
    let output = `<h4>You have a new message from the contact form</h4>
                          <ul>
                            <li>Name : ${req.body.name}</li>
                            <li>Email : ${req.body.email}</li>
                            <li>Phone No. : ${req.body.phone}</li>
                          </ul>
                          <H4>Message</h4>
                          <p> ${req.body.message}</p>`;

    nodeMailer(output);
    res.render('base', {$t});
});

app.get('/portfolio', function (req, res, next) {
        res.render('portfolio', {$t});
    });

app.get('/register', (req, res, next) => {
    res.status(200);
    res.render('register', {error: []});
});

app.post('/register', (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) throw err
        const user = new User({
            _id: mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            surname: req.body.surname,
            email: req.body.email,
            password: hash
        });
        user.save()
            .then(result => {
                // res.status();
                res.redirect('/login', 201, {user: result});
                res.redirect('/login', 201, {user: result});
            })
            .catch(err => {
                res.status(500).json({user});
                res.render('register', {user});
            });
    })
});

module.exports = app;

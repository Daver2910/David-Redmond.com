const express = require('express');
const Port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const path = require('path');
const Router = require("./routes/Routes");
const Validator = require('./services/expressValidator');
const mongoose = require('mongoose');
const vars = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static/")));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator(Validator));

mongoose.connect(`mongodb://${vars.db.username}:${vars.db.password}@${vars.db.name}`, { useNewUrlParser: true });

app.use('/', Router);

app.listen(Port, () => { console.log(`Portfolio Server Running on Port ${Port}`)});

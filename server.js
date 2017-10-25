////////////////////////////
//SETTING UP AND CONFIGURE//
////////////////////////////

const express = require('express');
const authRoutes = require('./config/routes');
const passportSetup = require('./config/passport');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
var ejs = require('ejs');
var path = require('path');
var request = require('request');


///////////////
//BODY PARSER//
///////////////

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/////////////
//SETUP EJS//
/////////////

app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//connect to db models//
// var db = require('./models');

//serve static files in public//
app.use(express.static('public'));


//////////////
////ROUTES////
//////////////

//adding auth for google/facebook
app.use('/auth' , authRoutes);

//Get ALL those routes
var routes = require(__dirname + '/config/routes');
app.use('/https://damp-brook-42509.herokuapp.com/', routes);


//////////////////////////////
//get connected to localhost//
//////////////////////////////

 app.listen(process.env.PORT || 3000);


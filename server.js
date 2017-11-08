////////////////////////////
//SETTING UP AND CONFIGURE//
////////////////////////////

const express = require('express');
const https = require('https');
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
//function that gets name/rating/photo
var find = function(object){
  if (object === " "){
    console.log("Sorry");
  } else {

    var results = object.map(function(obj){
      var restaurantModify = {
            _id: obj.restaurant.id || null,
            name : obj.restaurant.name || null,
            rating : obj.restaurant.user_rating || "0",
            photo : obj.restaurant.thumb || getPhoto,
            url : obj.restaurant.url || null,
            hours : obj.restaurant.hours || null
          };
      return (restaurantModify);
      }); 
      return(results);
  }
};

var getPhoto = 'https://i.pinimg.com/736x/11/54/89/11548944f15d77b5e948357024294490--bar-scene-nyc-restaurants.jpg';


app.post("/results", function(req, res){

  //get searched name from script.js (front-end)
  var name = req.body.nameURL;
  console.log(name);
  ///////////
  //KEY VAR//
  ///////////
//search?q=80218&count=8&sort=rating
  var options = {
    host : 'developers.zomato.com',
    path: '/api/v2.1/reviews',
    method: 'GET',
    headers: {'Content-Type': 'application/json; charset=utf-8','user-key': 'dbd65a3baa3d8dc9e8830dacf6da39a5'}
  };

  https.request(options, function(err, response, body){
    console.log(response);
    if(!err) {
      //parses body
      console.log(body);
      var respObj = JSON.parse(body);
      console.log(respObj);
      //returns restaurants in body
      var restaurants = respObj.restaurants;
      //returns find function (name,rating,photo)
      var found = find(restaurants);
      
      //renders on page
      res.render('./views/homeSearch', {found});
    } else {
      console.log(error);
    }
  });
});

app.use('/', routes);

 // app.use(function (req, res, next) {
 //    if (req.headers['x-forwarded-proto'] === 'https') {
 //      res.redirect('http://' + req.hostname + req.url);
 //    } else {
 //      next();
 //    }
  // });


//////////////////////////////
//get connected to localhost//
//////////////////////////////

app.listen(process.env.PORT || 3000);



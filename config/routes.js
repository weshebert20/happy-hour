const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const router = require('express').Router();
const passport = require('passport');
var ejs = require('ejs');
router.use(passport.initialize());
router.use(passport.session());


//connect db with routes
var db = require('../models');


// route to log-in page
router.get('/', function(req, res){
  res.render('./views/login');
});

router.get('/results', function(req,res){
  res.render('./views/home');
});

router.post('/hourTimes', function(req, res){

  var newRest = new db.Restaurant({
    _id: req.body.id,
    name: req.body.name,
    hour: req.body.hour,
  });

  newRest.save(function(err, rest){
    if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", rest.name);
      // send back the book!
      res.send(rest);
    });
});
  //get req.body from ajax
  //make a db.find statment to see if it exist
  //if it doesnt exist...db.create new one
  //if it does exist be done
  //make a res.send


router.delete('/hourTimes/Delete', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('rest deleted', req.params);
  var restId = req.body.id;
  // find the index of the book we want to remove
  db.Restaurant.findOneAndRemove({ _id: restId }, function (err, deletedRest) {
    res.json(deletedRest);
  });
});

///////////////
//GOOGLE AUTH//
///////////////

router.get('/google',
  passport.authenticate('google', { scope: ['email profile'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Authenticated successfully
    res.redirect('/results');
  });

/////////////////
//FACEBOOK AUTH//
/////////////////

router.get('/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/results',
                                      failureRedirect: '/login' 
  }));


var getPhoto = 'https://i.pinimg.com/736x/11/54/89/11548944f15d77b5e948357024294490--bar-scene-nyc-restaurants.jpg';



///////////////////////
//results search page//
///////////////////////

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


router.post("/results", function(req, res){

  //get searched name from script.js (front-end)
  var name = req.body.nameURL;
  console.log(name);

  ///////////
  //KEY VAR//
  ///////////

  var options = {
    url : name,
    headers: {'user-key': '84d86141509866d80a7965697edb8965'},
    gzip:true
  };

  request(options, function(err, response, body){
    if(!err) {
      //parses body
      var respObj = JSON.parse(body);
      console.log(respObj);
      //returns restaurants in body
      var restaurants = respObj.restaurants;
      //returns find function (name,rating,photo)
      var found = find(restaurants);
      //renders on page
      res.render('./views/partials/homeSearch', {found});
    } else {
      console.log(error);
    }
  });
});
          

module.exports = router;

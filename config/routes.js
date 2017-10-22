
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const router = require('express').Router();
const passport = require('passport');
var ejs = require('ejs');
router.use(passport.initialize());
router.use(passport.session());

// route to log-in page
router.get('/', function(req, res){
	res.render('./views/login');
});

router.get('/results', function(req,res){
	res.render('./views/home');
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


///////////////////////
//results search page//
///////////////////////

//function that gets name/rating/photo
var find = function(object){
  if (object.length === 0){
    return("Sorry");
  } else {
    var results = object.map(function(obj){
      var restaurantModify = {
            name : obj.restaurant.name,
            rating : obj.restaurant.user_rating,
            photo : obj.restaurant.thumb
          };
      return (restaurantModify);
      }); 
      return(results);
  }
};


router.post("/resultsSearch", function(req, res){

  //get searched name from script.js (front-end)
  var name = req.body.nameURL;

  ///////////
  //KEY VAR//
  ///////////

  var options = {
    url : name,
    headers: {'user-key': '84d86141509866d80a7965697edb8965'},
    gzip:true
  };
  console.log(options);

  request(options, function(err, response, body){
    if(!err && response.statusCode === 200) {
      //parses body
      var respObj = JSON.parse(body);
      //returns restaurants in body
      var restaurants = respObj.restaurants;
      //returns find function (name,rating,photo)
      var found = find(restaurants);
      //renders on page
      res.render('./views/home', {found});
    } else {
      console.log(error);
    }
  });
});
          

module.exports = router;
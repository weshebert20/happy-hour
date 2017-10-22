
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
                                      failureRedirect: '/login' }));
          

module.exports = router;

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

///////////////
//GOOGLE AUTH//
///////////////

router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/results');
});

/////////////////
//FACEBOOK AUTH//
/////////////////

router.get('/facebook',
  passport.authenticate('facebook'),
  function(req, res){});


router.get('/facebook/callback', 
	passport.authenticate('facebook', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/results');
});



module.exports = router;

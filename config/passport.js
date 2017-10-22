const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
//auth login


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//add mongoDB for user
var User = require('../models/user');

//setting up google strategy
passport.use(
	new GoogleStrategy({
	//options for stategy 
	callbackURL: keys.google.callbackURL,
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret
	},function(accessToken, refreshToken, profile, done){
		return done(null, profile);
	})
);

//setting up facebook strategy
passport.use(
	new FacebookStrategy({
  	clientID: keys.facebook.clientID,
  	clientSecret: keys.facebook.clientSecret,
  	callbackURL: keys.facebook.callbackURL
	},function(accessToken, refreshToken, profile, done) {
    	return done(null, profile);
  })
);

// serialize and deserialize
// passport.serializeUser(function(user, done) {
//   console.log('serializeUser: ' + user._id);
//   done(null, user._id);
// });
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user){
//     console.log(user);
//       if(!err) done(null, user);
//       else done(err, null);
//     });
// });


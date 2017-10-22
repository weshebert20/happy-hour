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
var db = require('./models');

//serve static files in public//
app.use(express.static('public'));


//////////////
////ROUTES////
//////////////

//adding auth for google/facebook
app.use('/auth' , authRoutes);

//Get ALL those routes
var routes = require(__dirname + '/config/routes');
app.use('/', routes);


app.post('/test', function(req, res){
	name = req.body.name;
	console.log(name);



///////////
//KEY VAR//
///////////

var options = {
    url : "https://developers.zomato.com/api/v2.1/search?q=" + name + "&count=4&lat=39.7344&lon=-104.9726",
    headers: {'user-key': '84d86141509866d80a7965697edb8965'},
    gzip:true
  };
  });

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

//results search page
app.get("/resultsSearch", function(req, res){
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




//////////////////////////////
//get connected to localhost//
//////////////////////////////

app.listen(3000, function (){
	console.log("listening on port 3000");
});
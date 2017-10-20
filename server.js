////////////////////////////
//SETTING UP AND CONFIGURE//
////////////////////////////

const express = require('express');
const app = express();
var request = require('request');
var ejs = require('ejs');
var path = require('path');


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

// connect to db models
var db = require('./models');

// serve static files in public
app.use(express.static('public'));



//////////////
////ROUTES////
//////////////

var results;


var options = {
    url : "https://developers.zomato.com/api/v2.1/search?entity_id=305&count=10&lat=39.7344&lon=-104.9726",
    headers: {'user-key': '84d86141509866d80a7965697edb8965'},
    gzip:true
  };


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

console.log(results);
app.get("/", function(req, res){
	res.render('./views/home');
});

app.get("/results", function(req, res){
	request(options, function(err, response, body){
		if(!err && response.statusCode === 200) {
			var respObj = JSON.parse(body);
			var restaurants = respObj.restaurants;
			var found = find(restaurants);
			// findUserRating(restaurants);
			res.send(found);

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
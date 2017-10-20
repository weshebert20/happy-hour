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

//connect to db models//
var db = require('./models');

//serve static files in public//
app.use(express.static('public'));


//////////////
////ROUTES////
//////////////

//route to log-in page
app.get('/', function(req, res){
	res.render('./views/index');
});


///////////
//KEY VAR//
///////////

var options = {
    url : "https://developers.zomato.com/api/v2.1/search?entity_id=305&count=10&lat=39.7344&lon=-104.9726",
    headers: {'user-key': '84d86141509866d80a7965697edb8965'},
    gzip:true
  };

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

//home page
// app.get("/results", function(req, res){
// 	res.render('./views/home');
// });

//results search page
app.get("/results", function(req, res){
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
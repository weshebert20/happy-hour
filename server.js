//setting up express
const express = require('express');
const app = express();


//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// serve static files in public
app.use(express.static('public'));

var client_id = require("/env.js");
var client_secret = require("env.js");


//////////////
////ROUTES////
//////////////

app.get('/', function(req, res){
	res.send("Oh Hai!");
});



//get connected to localhost
app.listen(3000, function (){
	console.log("listening on port 3000");
});
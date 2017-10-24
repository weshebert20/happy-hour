var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/happy_hour");

// module.exports.Restaurant = require("./user.js");
module.exports.Restaurant = require("./rest.js");
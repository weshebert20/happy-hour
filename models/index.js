var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/happy_hour");

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

// module.exports.Restaurant = require("./user.js");
module.exports.Restaurant = require("./rest.js");
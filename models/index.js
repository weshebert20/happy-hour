var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/happy_hour");

// module.exports.Restaurant = require("./user.js");
module.exports.Restaurant = require("./rest.js");
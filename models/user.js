var mongoose = require('mongoose');
Schema = mongoose.Schema;


// define the schema for our user model
var userSchema = new Schema({
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// create the model for users and expose it to our app
var Use = mongoose.model('User', userSchema);

module.exports = Use;
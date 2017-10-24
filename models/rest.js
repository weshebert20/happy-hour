var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
	restaurants:[{
		name: String,
		rating: {},
		photo: String,
		utl: String,
		hours: String
	}]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
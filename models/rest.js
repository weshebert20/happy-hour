var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
		_id: String,
		name: String,
		hour: String,
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
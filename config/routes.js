
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');





// request({
//   url: 'https://api.foursquare.com/v2/venues/explore',
//   method: 'GET',
//   qs: {
//     client_id: 'LTO33RIJ2NOYVVPWXN3EDF4PVUUGZ0NGCHZKYGAO4YFB5GE4',
//     client_secret: 'YL3WVWO1OACH13AZS3X5QR0STBC4FQBIFWHHZSLF22DKXR5U',
//     ll: '39.73,-104.98',
//     postalCode: "80202",
//     limit: 10,
//     categoryId: '4bf58dd8d48988d116941735',
//     v: '20170801',
//   }
// }, function(err, res, body) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res.body);
//     var data = res.body;
//   }



// router.route('/', function(req, res){
// 	res.get(data);
// });
// });





module.exports = router;

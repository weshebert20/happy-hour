const expect = require('chai').expect;
const request = require('request');

  var options = {
    url : 'https://developers.zomato.com/api/v2.1/search?q=linger&count=8&lat=39.7392&lon=-104.9903',
    headers: {'user-key': 'dbd65a3baa3d8dc9e8830dacf6da39a5'},
    gzip:true
  };

  describe("zomato", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(options, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it("should return 200", function() {
		expect(apiResponse.statusCode).to.eq(200);
	});
	it("should return restaurants", function() {
	  if (typeof(apiBody) == "string") {
	  	apiBody = JSON.parse(apiBody);
	  }
	});
});


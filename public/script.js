$( document ).ready(function() {



	$("#nameEnter").on("submit", function(){
		event.preventDefault();
		//get name searched value
		var name = $('#inputName').val();
		console.log(name);
		//add name searched value to URL
		var nameURL = 'https://developers.zomato.com/api/v2.1/search?q='+ name + '&count=4&lat=39.7344&lon=-104.9726';
		
	});
});


























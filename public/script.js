$( document ).ready(function() {



	$("#nameEnter").on("submit", function(){
		event.preventDefault();
		//get name searched value
		var name = $('#inputName').val();
		console.log(name);

		
		// add name searched value to URL
		var nameURL = 'https://developers.zomato.com/api/v2.1/search?q=' + name + '&sort=rating';

		$.ajax({
			type:'post',
			url:'/resultsSearch',
			data: {nameURL:nameURL},
			success: function(backend){
				$('body').html(backend);
			}
		});
	});
});


























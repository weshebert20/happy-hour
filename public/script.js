$( document ).ready(function() {



	$("#nameEnter").on("submit", function(){
		event.preventDefault();
		//get name searched value
		var name = $('#inputName').val();
		
		// add name searched value to URL
		var nameURL = 'https://developers.zomato.com/api/v2.1/search?q=' + name + '&sort=rating';

		$.ajax({
			type:'post',
			url:'/resultsSearch',
			data: {nameURL:nameURL},
			success: function(backend){
				$('#bodySecond').html(backend);
			}
		});
	});

		$("#buttonChange").click(function() {
    $('html,body').delay(800).animate({
        scrollTop: $("#bodySecond").offset().top},
        'slow');
});
});


























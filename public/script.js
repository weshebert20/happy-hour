$( document ).ready(function() {
	//ajax request getting searched zip into back end
	$("#nameEnter").on("submit", function(){
		event.preventDefault();
		//get name searched value
		var name = $('#inputName').val();
		
		// add name searched value to URL
		var nameURL = 'https://developers.zomato.com/api/v2.1/search?q=' + name + '&count=12&sort=rating';

		$.ajax({
			type:'post',
			url:'/resultsSearch',
			data: {nameURL:nameURL},
			success: function(backend){
				$('#bodySecond').html(backend);
			}
		});
	});

	//scroll down on submit
	$("#buttonChange").click(function() {
    	$('html,body').delay(800).animate({
        	scrollTop: $("#bodySecond").offset().top},
        	'slow');
	});

	$('.hoursTime').on('click', function(){
		event.preventDefault();
		console.log('HEY');
		var hoursStart = $('#hoursFrom').val();
		console.log(hoursStart);
		var hoursEnd = $('#hoursTo').val();
		console.log(hoursEnd);

		$('.madeHours').append(hoursStart + " to " + hoursEnd);
		// $.ajax({
		// 	type:'put',
		// 	url:'/resultsSearch',
		// 	data: {hoursStart:hoursStart},
		// 	success: function(addHour){
		// 		$('.madeHours').html(addHour);
		// 	}
		// });

		// $('i').addClass('removePlus');
	});

	$('.hoursTime').on('click', function(){
		event.preventDefault();
		$("form").attr('data-dismiss', 'modal');
		// $('.removePlus').remove();
	});


});


























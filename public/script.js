$( document ).ready(function() {
	//ajax request getting searched zip into back end
	$("#nameEnter").on("submit", function(){
		event.preventDefault();
		//get name searched value
		var name = $('#inputName').val();
		
		// add name searched value to URL
		var nameURL = 'https://developers.zomato.com/api/v2.1/search?q=' + name + '&count=8&sort=rating';

		$.ajax({
			type:'post',
			url:'/resultsSearch',
			data: {nameURL:nameURL},
			success: function(backend){
				$('#bodySecond').html(backend);
			}
		});
	});

	var cards = $('.card').length;

	//on click pull out id, drop into modal (input type=hidden)
	

	//scroll down on submit
	$("#buttonChange").click(function() {
    	$('html,body').delay(800).animate({
        	scrollTop: $("#bodySecond").offset().top},
        	'slow');
	});

	
	$('.hoursTime'+[0]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[0]).val();
		var hoursEnd = $('#hoursTo'+[0]).val();

		$('.clicked0').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[1]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[1]).val();
		var hoursEnd = $('#hoursTo'+[1]).val();

		$('.clicked1').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[2]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[2]).val();
		var hoursEnd = $('#hoursTo'+[2]).val();

		$('.clicked2').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[3]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[3]).val();
		var hoursEnd = $('#hoursTo'+[3]).val();

		$('.clicked3').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[4]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[4]).val();
		var hoursEnd = $('#hoursTo'+[4]).val();

		$('.clicked4').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[5]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[5]).val();
		var hoursEnd = $('#hoursTo'+[5]).val();

		$('.clicked5').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[6]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[6]).val();
		var hoursEnd = $('#hoursTo'+[6]).val();

		$('.clicked6').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});

	$('.hoursTime'+[7]).on('click', function(){
		event.preventDefault();
		var hoursStart = $('#hoursFrom'+[7]).val();
		var hoursEnd = $('#hoursTo'+[7]).val();

		$('.clicked7').html(hoursStart + " p.m. to " + hoursEnd + " p.m.");
		});



	$('.closeButton').on('click', function(){
		event.preventDefault();
		$(this).attr('data-dismiss', 'modal');
	});
});


























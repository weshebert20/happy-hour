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

	$('.saveBtn'+[0]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[0]).html();
		var name = $('.resName'+[0]).html();
		var hour = $('.clicked0').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[1]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[1]).html();
		var name = $('.resName'+[1]).html();
		var hour = $('.clicked1').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[2]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[2]).html();
		var name = $('.resName'+[2]).html();
		var hour = $('.clicked2').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[3]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[3]).html();
		var name = $('.resName'+[3]).html();
		var hour = $('.clicked3').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[4]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[4]).html();
		var name = $('.resName'+[4]).html();
		var hour = $('.clicked4').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[5]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[5]).html();
		var name = $('.resName'+[5]).html();
		var hour = $('.clicked5').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[6]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[6]).html();
		var name = $('.resName'+[6]).html();
		var hour = $('.clicked6').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});
	$('.saveBtn'+[7]).on('click', function(){
		event.preventDefault();
		var id = $('.idNum'+[7]).html();
		var name = $('.resName'+[7]).html();
		var hour = $('.clicked7').html();

		$.ajax({
			type:'post',
			url:'/hourTimes',
			data: {id:id, name:name, hour:hour}
		});
	});

	var cards = $('.card').length;
	

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


























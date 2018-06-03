$(document).ready(function(){
	
	$('.navbar-toggle').click(function(){
		$('.navbar-toggle').toggleClass('animate');
		$('.navbar-collapse').toggle('slow');
		$('.navbar-collapse').toggleClass('collapse-in');
	});

	$(".scroll-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#information").offset().top - 120
	    }, 1000);
	});

});

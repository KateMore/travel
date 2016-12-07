$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//cancel standard processing clicking on the link
		event.preventDefault();

		//take away the the block identifier attribute href
		var id  = $(this).attr('href'),

		//We find out the height from the top-up to the block referenced by anchor
			top = $(id).offset().top;
		
		//animate the transition to the distance - top 1,500 ms
		$('body,html').animate({scrollTop: top}, 1500);
	});


    // animation of sections titles and others

	$(".animation1").animated("fadeInUp", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	$(".animation_4").animated("rotateIn", "fadeOutDown");


});
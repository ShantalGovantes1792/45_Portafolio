$(document).ready(function () {
	 new WOW().init();
	// SKILLBARS

	// LIGHTBOX GALLERY
	$('.with-caption').magnificPopup({
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
			},
		    gallery: {
	      		enabled: true 
	    	}
		});

		$('.iframeblocker').click(function(e) {
			console.log('Prevent everthing in iFrame');
			e.preventDefault();
	    	e.stopPropagation();
			var target = $(e.target);
			($(target.parent()).find('a')).click()
		});

	// SKILLS BARS

	var posicion = $("#skills").position().top;
	var done = false;

		$(window).scroll(function(){

		    if (done) {
		        return;
		    }

		    var scrollTop = $(window).scrollTop();

		    if( (scrollTop > posicion ) ){

		        $('.skillbar').each(function(){
			    $(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			    }, 2000);
			});
					
			done = true;
		    }

		});

	// MENU DESAPARECER Y APARECER

	$(".menu-margin").on("click", function(){
	 	
		// SI ESTA EN PEQUEÑO OCULTALO SINO NO HAGAS NADA

	 	if ( $(window).width() <= 768 ) {
	 		console.log("Esta en chiquito");
	 		$("#myNavbar").hide(400);
	 	}

		

	});


	$("#home-nav").on("click", function(){
	 	$("#myNavbar").toggle(400)
	});


});

/*
class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"
*/
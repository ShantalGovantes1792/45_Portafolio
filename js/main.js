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

});

$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
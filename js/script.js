$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul')
	$('.pKanan').addClass('pMuncul')
});



$(window).scroll(function() { 
	var wScroll = $(this).scrollTop();


// service //

	if( wScroll > $('#services').offset().top - 400) { 
		$('.services .card-panel').addClass('muncul');
	}

})

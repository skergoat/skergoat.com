$(function() {
	
	$('.GetinTouch').click(function() {

		$('.sub').not('#sub-6').fadeOut(1000);
		$('#sub-6').fadeIn(1000);

		var height = $('#page-6').height();
		$('#main-2').css({'max-height':height + 'px', 'height':height + 'px'});

		$('#input-1').addClass('active');
		$('#info-name').text('#sub-6');

		$('html, body').animate({ 
			scrollLeft:'0px',
			scrollTop:'0px'	
		}, 0);

		$('.sub').not('#sub-6').css('display', 'none');

	});

});
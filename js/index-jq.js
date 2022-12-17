jQuery.noConflict();

jQuery(document).ready(function($) {


	const showHide = (e) => {
		//$('.down-arrow').css('color', 'red');
		let card = e.currentTarget.id;
		let cardId = '#' + card + '-details';
		console.log(cardId);
		$(cardId).css('visibility', 'visible');
		$(cardId).toggle(500);

		//$(`${e.currentTarget} span`).css('color', 'red');
		console.log(e.currentTarget);
	}	

	$('#vitis-details').hide();
	$('#palm-details').hide();
	// event handler for show/hide details
	$('.show-hide').click(showHide);

});




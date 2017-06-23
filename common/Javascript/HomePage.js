/**
 * 
 */

/*$.noConflict();*/

$('.picture_box').zySlide({speed:700});

$(document).ready(function() {


	/*  Mouse Function */

	
	$('.previous, .next').mouseenter(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$('.div_1').mouseenter(function() {
		if ($('.middle-content-1').css('visibility') == 'visible') {
			$(this).css('cursor', 'default');
		} else {
			$(this).css('cursor', 'pointer');
		}
	});

	$('.div_2').mouseenter(function() {
		if ($('.middle-content-2').css('visibility') == 'visible') {
			$(this).css('cursor', 'default');
		} else {
			$(this).css('cursor', 'pointer');
		}
	});

	$('.div_3').mouseenter(function() {
		if ($('.middle-content-3').css('visibility') == 'visible') {
			$(this).css('cursor', 'default');
		} else {
			$(this).css('cursor', 'pointer');
		}
	});

	$('.a-class-2').mouseenter(function() {
		$(this).siblings('.sale-information').css('z-index', '20');
		$(this).siblings('.sale-information').css('visibility', 'visible');
	});

	$('.a-class-2').mouseleave(function() {
		$(this).siblings('.sale-information').css('visibility', 'hidden');
	});

	$('.sale-information').mouseenter(function() {
		$(this).css('visibility', 'visible');
		$(this).css('cursor', 'pointer');
	});

	$('.sale-information').mouseleave(function() {
		$(this).css('visibility', 'hidden');
		$(this).css('z-index', '10');
	});

	$('.left-information-1').mouseenter(function() {
		$(this).css('cursor', 'default');
	});

	$('.left-bottom-button, .right-bottom-button').mouseenter(function() {
		$(this).css('cursor', 'pointer');
	});

	$('.ul-page-1 ul li').mouseenter(function() {
		if ($(this).css('background-color') != 'rgb(249, 148, 190)') {
			$(this).css('cursor', 'pointer');
			$(this).css('color', '#F994BE');
		} else {
			$(this).css('cursor', 'default');
		}
	});

	$('.ul-page-1 ul li').mouseleave(function() {
		$(this).css('color', 'black');
	});

	$('.left-information-1-extra-1').mouseenter(function() {
		$(this).css('color', 'red');
	});

	$('.left-information-1-extra-1').mouseleave(function() {
		$(this).css('color', '#3D5FD6');
	});


	/*  Click Function  */


	$('.div_1').click(function() {
		if ($('.middle-content-1').css('visibility') == 'hidden') {
			$(this).css('border', '1px solid #DBDDDF');
			$(this).css('border-bottom', 'none');
			$('.div_2, .div_3, .div_4').css('border', 'none');
			$('.div_2, .div_3, .div_4').css('border-bottom', '1px solid #DBDDDF');
			$('.middle-content-1').css('visibility', 'visible');
			$('.middle-content-2, .middle-content-3').css('visibility', 'hidden');
		}
		
	});

	$('.div_2').click(function() {
		if ($('.middle-content-2').css('visibility') == 'hidden') {
			$(this).css('border', '1px solid #DBDDDF');
			$(this).css('border-bottom', 'none');
			$('.div_1, .div_3, .div_4').css('border', 'none');
			$('.div_1, .div_3, .div_4').css('border-bottom', '1px solid #DBDDDF');
			$('.middle-content-2').css('visibility', 'visible');
			$('.middle-content-1, .middle-content-3').css('visibility', 'hidden');
		}
		
	});

	$('.div_3').click(function() {
		if ($('.middle-content-3').css('visibility') == 'hidden') {
			$(this).css('border', '1px solid #DBDDDF');
			$(this).css('border-bottom', 'none');
			$('.div_1, .div_2, .div_4').css('border', 'none');
			$('.div_1, .div_2, .div_4').css('border-bottom', '1px solid #DBDDDF');
			$('.middle-content-3').css('visibility', 'visible');
			$('.middle-content-1, .middle-content-2').css('visibility', 'hidden');
		}
		
	});

});

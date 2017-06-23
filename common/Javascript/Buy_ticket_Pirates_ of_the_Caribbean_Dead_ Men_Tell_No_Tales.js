$(document).ready(function() {

	/*  Mouse Function */

	$('#ul-1 ul li label, #ul-2 ul li label').mouseenter(function() {
		if ($(this).parents('li').css('background-color') != 'rgb(36, 140, 244)') {
			$(this).css('color', '#248CF4');
		}
	});

	$('#ul-1 ul li label').mouseleave(function() {
		$(this).css('color', 'black');
	});

	$('.ticket-sale ul li > div:nth-child(2)').mouseenter(function() {
		$(this).css('visibility', 'hidden');
		$(this).siblings('.order-ticket').css('visibility', 'visible');
	});

	$('.order-ticket').mouseleave(function() {
		$(this).css('visibility', 'hidden');
		$(this).siblings('.ticket-sale ul li div:nth-child(2)').css('visibility', 'visible');
	});

	/*  Click Function */

	$('#img-1').click(function() {
		$('.shelter').css('display', 'block');
		$('.play-video').css('display', 'block');
	});

	$('.close-video').click(function() {
		$('.shelter').css('display', 'none');
		$('.play-video').css('display', 'none');
	});

	$('#span-1').click(function() {
		$(this).text('');
		$('#span-2').css('visibility', 'visible');
	});

	$('#span-3').click(function() {
		$('#span-1').text('更多 >>');
		$('#span-2').css('visibility', 'hidden');
	});

	$(document).click(function(e) {
		e = window.event || e;
		obj = $(e.srcElement || e.target);
		if (!$(obj).is('#area') && !$(obj).is('#ul-1') && !$(obj).is('#ul-area-1')
			   && !$(obj).is('#ul-2') && !$(obj).is('#ul-area-2')
			   && !$(obj).is('#hr-1') && !$(obj).is('label') && !$(obj).is('#area li')
			   && !$(obj).is('.switch')) {
			$('.middle-item-left-bottom').css('visibility', 'hidden');
		} else if ($(obj).is('.switch')) {
			$('.middle-item-left-bottom').css('visibility', 'visible');
		}
	});

	$('.select-show').click(function() {
		$(this).parents('.buy').siblings('.hidden-item').css('visibility', 'visible');
		$(this).parents('.buy').siblings('.hidden-item').children('.ticket-sale')
		       .children('ul').children('li').children('div:nth-child(2)')
		       .css('visibility', 'visible');
		Height = $('.Buy-ticket-box').height();
		/*alert($(this).parents('.buy').siblings('.hidden-item').children('.ticket-sale')
			    .children('ul').children('li').length);*/
		if ($(this).parents('.buy').siblings('.hidden-item').children('.ticket-sale')
			  .children('ul').children('li').length >= 4) {
			$(this).parents('.buy').siblings('.hidden-item').css('height', '190px');
			$('.Buy-ticket-box').css('height', Height + 190);
		} else {
			$(this).parents('.buy').siblings('.hidden-item').css('height', '105px');
			$(this).parents('.buy').siblings('.hidden-item').children('.delete-option')
			            .css('margin-top', '-80px');
			$('.Buy-ticket-box').css('height', Height + 100);
		}
		$(this).parents('.buy').css('visibility', 'hidden');
	});

	$('.delete-option').click(function() {
		$(this).parents('.hidden-item').css('visibility', 'hidden');
		$(this).parents('.hidden-item').children('.ticket-sale').children('ul').children('li')
		      .children('div:nth-child(2)').css('visibility', 'hidden');
		$(this).parents('.hidden-item').css('height', '0px');
		Height = $('.Buy-ticket-box').height();
		if ($(this).parents('.buy').siblings('.hidden-item').children('.ticket-sale')
			  .children('ul').children('li').length >= 4) {
			$('.Buy-ticket-box').css('height', Height - 190);
		} else {
			$('.Buy-ticket-box').css('height', Height - 100);
		}
		$(this).parents('.hidden-item').siblings('.buy').css('visibility', 'visible');
	});


	/* Other Function */
	
});
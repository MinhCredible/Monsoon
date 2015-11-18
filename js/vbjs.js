var main = function(){
	$('.dot1').click(function(){
		$('.slide').hide();
		$('.slide1').show();
	});
	$('.dot2').click(function(){
		$('.slide').hide();
		$('.slide2').show();
	});
	$('.dot3').click(function(){
		$('.slide').hide();
		$('.slide3').show();
	});
	$('.dot4').click(function(){
		$('.slide').hide();
		$('.slide4').show();
	});
}

$(document).ready(main);

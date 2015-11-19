var main = function(){

	$('.dot1').click(function(){
		$('.slide').hide();
		$('.slide1').show();
	});
	$('.dot2').click(function(){
		$('.slide').fadeOut('fast');
		$('.slide2').show();
		$('.slide2').fadeIn('slow', 2000);
	});
	$('.dot3').click(function(){
		$('.slide').hide();
		$('.slide3').show();
	});
	$('.dot4').click(function(){
		$('.slide').hide();
		$('.slide4').show();
	});
};

function displayTime () {
	var elt = document.getElementById("clock");
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout (displayTime, 1000);
};
displayTime();

$(document).ready(main);


var main = function(){

	
	$('.arrow-next').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next()

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next()

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();
		if(prevSlide.length === 0) {
     	 	prevSlide = $('.slide').last();
     		prevDot = $('.dot').last();
     	}
     	currentSlide.fadeOut(600).removeClass('active-slide');
     	prevSlide.fadeIn(600).removeClass('active-slide');

     	currentDot.removeClass('active-dot');
     	prevDot.addClass('active-dot');
	});

	


	$('.dot1').click(function(){
		$('.slide').hide();
		$('#slide1').show();
	});
	$('.dot2').click(function(){
		$('.slide').hide();
		$('#slide2').show();
	});
	$('.dot3').click(function(){
		$('.slide').hide();
		$('#slide3').show();
	});
	$('.dot4').click(function(){
		$('.slide').hide();
		$('#slide4').show();
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


function displayTime () {
	var elt = document.getElementById("clock");
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout (displayTime, 1000);
};
displayTime();

var main = function(){

	$('.arrow-next').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		nextSlide.fadeIn(500).addClass('active-slide');

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
     	currentSlide.fadeOut(500).removeClass('active-slide');
     	prevSlide.fadeIn(500).addClass('active-slide');

     	currentDot.removeClass('active-dot');
     	prevDot.addClass('active-dot');
	});


	$('.dot').click(function(){
		var index = $(this).index(); // get the index or position of the current element that has the class .dot
		$('.slide').fadeOut(500); // to hide all elements with class .slide
		$('.dot').removeClass('active-dot');
		$('.slide').removeClass('active-slide').addClass('active');
		$('#slide' + (index+1)).fadeIn(500); 
		$('#slide' + (index+1)).removeClass('active').addClass('active-slide');
		$(this).addClass('active-dot');
		});
	
};


$(document).ready(main);


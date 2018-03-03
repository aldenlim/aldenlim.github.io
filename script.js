$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop() + ($(window).height()*0.1);
	var viewportBottom = viewportTop + ($(window).height()*0.8);
	return elementBottom < viewportBottom && elementTop > viewportTop;
};

$(document).ready(function(){

	var works = $(".works");
	for(var i = 0; i < works.length; i++){
	    var target = Math.floor(Math.random() * works.length -1) + 1;
	    var target2 = Math.floor(Math.random() * works.length -1) +1;
	    works.eq(target).before(works.eq(target2));
	};

});

$(window).on("resize scroll", function() {
	if($(window).width() < $(window).height()) {
		$('.works').each(function() {
			if($(this).isInViewport()) {
				$(this).children('.img-container').addClass('hover');
				console.log('added class');
			} else {
				$(this).children('.img-container').removeClass('hover');
				console.log('removed class');
			}
		});		
	} else {
		$('.works').each(function(){
			$(this).children('.img-container').removeClass('hover');
		});
	};
});
$('.carousel').carousel({
  interval: 4000
})

$("a").on("click", function() {
	let ref = $(this).attr("href");
	$('html, body').animate({
	    scrollTop: $(ref).offset().top
	}, 1000);
});
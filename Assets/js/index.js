$('.carousel').carousel({
  interval: 4000
})

$("a").on("click", function() {
	let ref = $(this).attr("href");
	console.log($(ref).offset());
	$('html, body').animate({
	    scrollTop: $(ref).offset().top
	}, 1000);
});

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideAppear");
        }
    });
  });
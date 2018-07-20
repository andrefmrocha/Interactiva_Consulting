$(function () {
    let hash = $(location).attr('hash');
    let offset = $($(location).attr('hash')).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 1000);
    $(hash).addClass("slideAppear");

        $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slideAppear");
            }
        });
    });


});



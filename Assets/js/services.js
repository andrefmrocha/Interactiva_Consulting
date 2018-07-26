$(function () {
    let hash = $(location).attr('hash');

    let offset = $($(location).attr('hash')).offset();
    if (offset){
        $('html, body').animate({
            scrollTop: offset.top
        }, 1000);
        $(hash).addClass("slideAppear");
    }
    else
    {
        $("#servicosDiagram").addClass("slideAppear");
        $("#servicosDiagram .row").addClass("slideAppear");
    }

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


});



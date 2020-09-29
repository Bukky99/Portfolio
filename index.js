//the $ just identifies the function

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function(){
        let target = $(this.hash);
        if(target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000
            );
        }
    });
});
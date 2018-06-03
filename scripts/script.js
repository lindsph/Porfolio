$(function() {

    $('a').smoothScroll({
        offset: -100,
        speed: 500,
        easing: 'swing'
    });

    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $(window).scroll(function () {
        var windowYmax = 100;
        var scrolledY = $(window).scrollTop();

        if (scrolledY > windowYmax) {
            $('.navigation').addClass("headerTransition");
        } else {
            $('.navigation').removeClass("headerTransition");
            $('.navigation').addClass("stickyHeader");
        }
    });
});
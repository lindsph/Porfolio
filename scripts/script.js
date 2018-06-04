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

    new TypeIt('.type-it', {
        // strings: ["Web Developer", "Solving Problems, Developing Solutions"],
        speed: 75,
        autoStart: false
    })
        .type("Web Developer")
        .pause(2000)
        .delete()
        .type("Solving Problems, Developing Solutions")
        .pause(1000)
    // END OF TYPE-IT FUNCTION

    let $input;

    function onInputFocus(event) {
        const $target = $(event.target);
        const $parent = $target.parent();
        $parent.addClass('input--filled');
    };

    function onInputBlur(event) {
        const $target = $(event.target);
        const $parent = $target.parent();

        if (event.target.value.trim() === '') {
            $parent.removeClass('input--filled');
        }
    };

    $(document).ready(function () {
        $input = $('.input__field');

        // in case there is any value already
        $input.each(function () {
            if ($input.val().trim() !== '') {
                const $parent = $input.parent();
                $parent.addClass('input--filled');
            }
        });

        $input.on('focus', onInputFocus);
        $input.on('blur', onInputBlur);
    });
});
$(function () {

    let header = $('.header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header-scroll');
        } else {
            header.removeClass('header-scroll');
        }
    });

    $('.menu__icon').on('click', function () {
        $('.menu__body').toggleClass('menu__body--active');
        $('body').toggleClass('lock');

    });

    $('.menu__link').on('click', function () {
        $('.menu__body').removeClass('menu__body--active');
        $('.menu__icon').removeClass('menu__icon--active');
        $('body').removeClass('lock');

    });

    $('.menu__icon').on('click', function () {
        $('.menu__icon').toggleClass('menu__icon--active');

    });

    $(".menu__body a,.menu__link,.logo").on("click", function (e) {

        e.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1000);
    });

})

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

});

$(document).ready(function () {
    $('.card').hide();
    $('.card').slice(0, 3).show();
    $('.btn-show-more').on('click', function (e) {
        e.preventDefault();
        $('.card:hidden').slice(0, 3).show();
        if ($('.card:hidden').length < 1) {
            $('.btn-show-more').hide();
        }
    })
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
});

//
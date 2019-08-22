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

$(document).ready(function () {
    $('.pricing-plan__menu li').on('click', function () {
        $(this).addClass('active').slideDown(500).siblings().removeClass('active')
            .closest('div.pricing-plan__row')
            .find('div.pricing__plan__container__content').removeClass('active')
            .eq($(this).index()).addClass('active').slideDown(500);
    })
});
$('.btn-signUp').on('click', function () {
    alert('Sorry, is not a modal?')
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
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
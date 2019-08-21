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
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                writableWidth: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
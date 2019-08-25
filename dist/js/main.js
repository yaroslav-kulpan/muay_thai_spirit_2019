$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

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
            items: 4,
            nav: true,
            loop: false
        }
    }
});
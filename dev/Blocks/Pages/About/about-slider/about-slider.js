var aboutSliderOwl = $('.about-slider-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 15,
    nav: false,
    smartSpeed: 1200,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$(".about-slider_nav-left").click(function() {
    aboutSliderOwl.trigger('prev.owl.carousel');
});

$(".about-slider_nav-right").click(function() {
    aboutSliderOwl.trigger('next.owl.carousel');
});
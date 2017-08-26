var productRelatedOwl = $('.product-related-carousel').owlCarousel({
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
            items: 3
        }
    }
});

$(".product-related__nav-left").click(function() {
    productRelatedOwl.trigger('prev.owl.carousel');
});

$(".product-related__nav-right").click(function() {
    productRelatedOwl.trigger('next.owl.carousel');
});
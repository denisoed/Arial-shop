var newItemOwl = $('.new-item-carousel').owlCarousel({
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

$(".new-item_nav-left").click(function() {
    newItemOwl.trigger('prev.owl.carousel');
});

$(".new-item_nav-right").click(function() {
    newItemOwl.trigger('next.owl.carousel');
});
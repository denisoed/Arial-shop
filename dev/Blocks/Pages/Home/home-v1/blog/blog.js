var blogOwl = $('.blog__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 30,
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

$(".blog-nav-left").click(function() {
    blogOwl.trigger('prev.owl.carousel');
});

$(".blog-nav-right").click(function() {
    blogOwl.trigger('next.owl.carousel');
});
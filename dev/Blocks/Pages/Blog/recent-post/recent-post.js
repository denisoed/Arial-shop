var recentPostOwl = $('.recent-post__carousel').owlCarousel({
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

$(".recent-post_nav-left").click(function() {
    recentPostOwl.trigger('prev.owl.carousel');
});

$(".recent-post_nav-right").click(function() {
    recentPostOwl.trigger('next.owl.carousel');
});
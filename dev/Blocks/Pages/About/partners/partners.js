$('.partners-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 15,
    nav: false,
    smartSpeed: 1200,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
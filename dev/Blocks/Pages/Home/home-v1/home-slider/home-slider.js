var owl = $('.home-slider__home-carousel');

// Carousel initialization
owl.owlCarousel({
    loop: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    margin: 15,
    nav: false,
    smartSpeed: 1200,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(".home-nav-left").click(function() {
    owl.trigger('prev.owl.carousel');
});

$(".home-nav-right").click(function() {
    owl.trigger('next.owl.carousel');
});


// add animate.css class(es) to the elements to be animated
function setAnimation(_elem, _InOut) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each(function() {
        var $elem = $(this);
        var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

        $elem.addClass($animationType).one(animationEndEvent, function() {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
        });
    });
}

// Fired before current slide change
owl.on('change.owl.carousel', function(event) {
    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-out]");
    setAnimation($elemsToanim, 'out');
});

// Fired after current slide has been changed
owl.on('changed.owl.carousel', function(event) {

    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-in]");
    setAnimation($elemsToanim, 'in');
})
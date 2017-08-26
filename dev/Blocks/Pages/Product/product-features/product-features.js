(function() {

    let content = $('.product-features-content');
    for (let i = 1; i < content.length; i++) {
        $(content[i]).addClass('disNone');
    };

    $('.product-features-tabs').on('click', function(e) {
        let target = e.target;
        let tabs = $('.product-features-tabs__tab');

        if ($(target).hasClass('product-features-tabs__tab')) {

            for (let i = 0; i < content.length; i++) {
                $(content[i]).addClass('disNone');
                $(content[i]).removeClass('disBlock');
            };

            for (let i = 0; i < tabs.length; i++) {
                $(tabs[i]).removeClass('product-features-active');
            };

            $(target).addClass('product-features-active');
            $('.' + $(target).attr('data-tab')).addClass('disBlock')
        }
    });

})();
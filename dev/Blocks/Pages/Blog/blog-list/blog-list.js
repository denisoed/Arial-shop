var filterList = {

    init: function() {
        $('.blog-list-item').mixItUp({
            selectors: {
                target: '.blogItem',
                filter: '.blog-list-filter__btn'
            },
            load: {
                filter: '.mix'
            }
        });
    }
};

filterList.init();
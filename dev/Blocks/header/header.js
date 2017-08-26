/*****************************************************/
/********** Show-hide option modal window ************/
/*****************************************************/

(function() {

    function showModalOptions(btnClass, modalWindow) {
        $(btnClass).on('click', function() {

            // Close all modal windows, when opening a new modal window
            $('.the-modal').slideUp('fast');

            if ($(modalWindow).is(':hidden') == true) {
                $(modalWindow).slideDown('fast');
            } else if ($(modalWindow).is(':hidden') == false) {
                $(modalWindow).slideUp('fast');
            }

        });
    }
    // Main menu
    showModalOptions('.main-menu-bars', '.main-menu__search-and-nav');
    showModalOptions('.main-menu-cart__content', '.opt-cart');
    showModalOptions('.main-menu-wishlist', '.opt-wishlist');
    showModalOptions('.user-menu__content', '.opt-user-menu');

    // Main menu v4
    showModalOptions('.main-menu-v4-cart__content', '.opt-cart');
    showModalOptions('.main-menu-v4-wishlist', '.opt-wishlist');

    // Top line 
    showModalOptions('.payment', '.opt-payment');
    showModalOptions('.language', '.opt-lang');

    showModalOptions('.category', '.opt-category');

    // Shop
    showModalOptions('.product-item-v2-color', '.opt-color');
    showModalOptions('.product-item-v2-size', '.opt-size');
    showModalOptions('.product-item-v2-type', '.opt-type');


})();

/*****************************************************/
/********************* Dropdown **********************/
/*****************************************************/

(function() {

    function addToggleIcon(classIcon) {
        let link = $('.main-menu-navbar__li');
        link.children('.main-menu-navbar-dropdown').prev().addClass(classIcon);
    }

    addToggleIcon('tringle');
    addToggleIcon('tringleMobile');

    $('.main-menu-navbar__link').on('click', function(e) {
        let target = e.target;
        if ($(target).parent().find('ul.main-menu-navbar-dropdown').length !== 0) {
            e.preventDefault();
        }
    });

    if ($(window).width() < 992) {

        (function dropDownMenu() {

            $('.main-menu-navbar__link').on('click', function(e) {
                let target = e.target;

                if ($(target).parent().children('.main-menu-navbar-dropdown').is(':hidden') == true) {
                    $(target).parent().children('.main-menu-navbar-dropdown').slideDown('fast');
                } else if ($(target).parent().children('.main-menu-navbar-dropdown').is(':hidden') == false) {
                    $(target).parent().children('.main-menu-navbar-dropdown').slideUp('fast');
                }
            });

        })();

    };

})();

/*****************************************************/
/********* Dropdown for Main menu v4 *****************/
/*****************************************************/

(function() {

    let targetColor = $('.backTop').css('background-color');
    let link = $('.main-menu-v4-navbar__li');
    link.children('.main-menu-v4-navbar-dropdown').parent().addClass('afterShow');

    $('.main-menu-v4-navbar__link').on('click', function(e) {
        let target = e.target;
        if ($(target).parent().find('ul.main-menu-v4-navbar-dropdown').length !== 0) {
            e.preventDefault();
        }
    });

    // if ($(window).width() < 992) {

    (function dropDownMenu() {

        $('.main-menu-v4-navbar__link').on('click', function(e) {
            let target = e.target;
            $('.main-menu-v4-navbar-dropdown').hide('fast');
            $('.main-menu-v4-navbar__li').removeClass('bgForActive');

            if ($(target).parent().children('.main-menu-v4-navbar-dropdown').is(':hidden') == true) {
                $(target).parent().children('.main-menu-v4-navbar-dropdown').css("display", "flex");
                $(target).parent().addClass('bgForActive');
            } else if ($(target).parent().children('.main-menu-v4-navbar-dropdown').is(':hidden') == false) {
                $(target).parent().removeClass('bgForActive');
                $(target).parent().children('.main-menu-v4-navbar-dropdown').css("display", "none");
            }
        });

    })();

    // };

})();

/*****************************************************/
/**************** Fixed Main menu ******************/
/*****************************************************/

(function() {

    if ($(window).width() > 992) {
        $(".fixed-menu").sticky({ zIndex: 10 });
    }

})();

/*****************************************************/
/********************** Right block ******************/
/*****************************************************/
(function() {

    function showRightBlock(btnClass, modalWindow) {
        $(btnClass).on('click', function() {

            if ($(modalWindow).hasClass('hideBlock')) {
                $(modalWindow).removeClass('hideBlock')
            } else {
                $(modalWindow).addClass('hideBlock');
            }

        });
    }

    showRightBlock('.show-right-block', '.right-block');
})();

/*****************************************************/
/********************** Main menu v4 ******************/
/*****************************************************/
(function() {

    function showRightBlock(btnClass, closeBtn, modalWindow) {
        $(btnClass).on('click', function() {
            $(modalWindow).addClass('show-Main-menu-v4');
        });

        $(closeBtn).on('click', function() {
            $(modalWindow).removeClass('show-Main-menu-v4');
        });
    }

    showRightBlock('.open-main-menu-v4', '.close-main-menu', '.main-menu-v4');
})();
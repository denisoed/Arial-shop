//------------ Search modal window hide -------------------\\
$('.search-modal').hide('fast');

var accentColorMap = $('.subscribe__content').css('background-color');

//--------------- Google map options ---------------\\
function initMap() {

    var uluru = { lat: 40.674, lng: -73.945 };
    // Styles a map in night mode.

    var main_color = '#0E2646', //Main color
        saturation_value = -1, //saturation
        brightness_value = 1; //brightness

    //Style for elements on map
    var style = [{
            //Saturation of notation on the map
            elementType: "labels",
            stylers: [
                { saturation: saturation_value }
            ]
        },
        { //We hide the signs of metro stations, stations, airports and other transport links on the map
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            //Hide the road designation on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            //Hide the designation of local roads
            featureType: "road.local",
            elementType: "labels.icon",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            //Hide the designation of the highway on the map
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            //Hide road signs on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                { visibility: "off" }
            ]
        },
        //Styles for different elements on the map
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "landscape",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]

        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        }
    ];

    // Options map
    var map = new google.maps.Map(document.getElementById('google-map'), {
        center: uluru,
        scrollwheel: false,
        zoom: 15,
        styles: style
    });

    // Set marker on map
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//------------------- Star rating -------------------\\
var starColor = $('.backTop').css('background-color');

function starRating(Class) {
    $(Class).rateYo({
        rating: 3.6,
        starWidth: "20px",
        normalFill: '#6b6a64',
        ratedFill: starColor
    });
};

starRating(".product-item__rateYo");
starRating(".view-detail__rateYo");
starRating(".product-item2__rateYo");

//--------------- Button back to top ----------------\\
if ($('#backTop').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#backTop').addClass('show');
            } else {
                $('#backTop').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#backTop').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//----------------Init mixitup grid-----------------\\
var filterList = {

    init: function(boxClass, itemClass) {
        $(boxClass).mixItUp({
            selectors: {
                target: itemClass,
                filter: '.products-filter__btn'
            },
            load: {
                filter: '.mix'
            }
        });
    }
};
filterList.init('.products-item', '.product-item');

//-------------------- FadeIn effect for modal window ------------\\
function showModal(btnClass, modalWindow) {
    $(btnClass).on('click', function() {

        if ($(modalWindow).is(':hidden') == true) {
            $(modalWindow).fadeIn();
        } else if ($(modalWindow).is(':hidden') == false) {
            $(modalWindow).fadeOut();
        }

    });
}

// View detail pruduct modal window
$('.view-detail').hide();
showModal('.open-modal-view-detail', '.view-detail');
showModal('.view-detail__btn-close', '.view-detail');

// Search modal
showModal('.main-menu-search-btn', '.search-modal');
showModal('.main-menu-v4-search-btn', '.search-modal');
showModal('.search-modal__btn-close', '.search-modal');

// Preloader
setTimeout(function() {
    $('.preloader').fadeOut("slow", function() {
        // Animation complete.
    });
}, 1000);

// Clock
var clock = $('.deal__clock').FlipClock({
    clockFace: "dailyCounter",
    autoStart: false,
    collbacks: {
        stop: function() {
            $('.deal__clock-message').html('Stop');
        }
    }
});

var finish = "November 01 2017 00:00:00";
var first = new Date(finish);
var last = Date.now();
var remaning = (first - last) / 1000;

clock.setTime(remaning);
clock.setCountdown(true);
clock.start()

// Parallax
function parallaxIt() {
  var $fwindow = $(window);

  $('[data-type="content"]').each(function (index, e) {
    var scrollTop = $fwindow.scrollTop();
    var $contentObj = $(this);

    $fwindow.on('scroll resize', function (){
      scrollTop = $fwindow.scrollTop();

      $contentObj.css('top', ($contentObj.height() * index) - scrollTop);
    });
  });

  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);

    $fwindow.on('scroll resize', function() {
      var yPos = - ($fwindow.scrollTop() / $backgroundObj.data('speed'));
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $backgroundObj.css({ backgroundPosition: coords });
    });
  });

  $fwindow.trigger('scroll');
};

parallaxIt();

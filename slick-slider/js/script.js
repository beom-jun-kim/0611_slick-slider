'use strict';


$(document).ready(function(){


    // basic slider
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // custom slider
    $('.custom__slider').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'linear',
    });

    // responsive
    $('.responsive__slider').slick({
        dots: true,
        infinite: true,
        // autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });


});
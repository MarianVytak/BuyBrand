$(function () {

    'use strict';

    $('.chart-table__subgroup').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(window).on("load",function(){

        $(".toggle-content").mCustomScrollbar();

    });

});
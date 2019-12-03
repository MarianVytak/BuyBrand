$(function () {

    'use strict';

    $('.chart-table__subgroup').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        variableWidth: true,
        initialSlide: 0,
    });

    $('.chart-table__block_list_all').on('click', function (e) {
        e.preventDefault();
        let thisList = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisList).toggleClass('active');
    });

    $(window).on("load",function(){

        // $(".chart-table__subgroup").mCustomScrollbar({
        //     theme: 'dark',
        //     horizontalScroll: true,
        //     autoHideScrollbar: false,
        //     //scrollButtons: true,
        //     mouseWheel: {
        //         enable: true,
        //     }
        // });

        $(".chart-table__block_list").mCustomScrollbar();

    });

});
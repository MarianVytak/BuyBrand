$(function () {

    'use strict';

    // Заміна тексту для dropdown
    $('.dropdown-item').on('click', function (e) {
        e.preventDefault();
        let thisText = $(this).text();
        let thisDropdown = $(this).attr('data-target');
        $(thisDropdown).text(thisText);
    });

    // Згортання/розгортання контенту
    $('.btn-all').on('click', function (e) {
        e.preventDefault();
        let thisList = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisList).toggleClass('active');
    });
    // Фікс багу з бордером в таблиці
    $('.btn-all-table').on('click', function () {
        $('.table').toggleClass('active');
    });

    // Заміна чартів для мобільної версії
    if ($('html, body').width() < 768) {
        $('.chart').fadeOut();
        $('.chart-table').fadeIn();
        $('.sidebar__toggle_link_chart').removeClass('active');
        $('.sidebar__toggle_link_chart-table').addClass('active');
    }

    // Переключення форм в модальному вікні
    const placingForm1Btn = $('.placingForm-1__btn');
    const placingForm2Btn = $('.placingForm-2__btn');
    const placingForm1 = $('.placingForm-1');
    const placingForm2 = $('.placingForm-2');
    const placingForm3 = $('.placingForm-3');
    const placingStep1 = $('.step-back-1');
    const placingStep2 = $('.step-back-2');
    placingForm1Btn.on('click', function() {
        placingForm1.fadeOut();
        placingForm2.fadeIn();
    });
    placingForm2Btn.on('click', function() {
        placingForm2.fadeOut();
        placingForm3.fadeIn();
    });
    $('.close').on('click', function() {
        placingForm1.fadeIn();
        placingForm2.fadeOut();
        placingForm3.fadeOut();
    });
    placingStep1.on('click', function() {
        placingForm2.fadeOut();
        placingForm1.fadeIn();
    });
    placingStep2.on('click', function() {
        placingForm3.fadeOut();
        placingForm2.fadeIn();
    });

    // Popover
    $('[data-toggle="popover"]').popover({
        trigger: 'hover'
    });

    // Tooltip
    $('.chart__block_grid_item').tooltip();

    const range = document.getElementById('range');
    noUiSlider.create(range, {
        start: [20],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

});
$(function () {

    'use strict';

    const moreLink = $('.more-text__link a');
    moreLink.on('click', function (e) {
        e.preventDefault();
        let moreText = $(this).attr('href');
        let text = $(this).text();
        $(moreText).toggleClass('active');

        if (text == 'Подробнее') {
            $(this).text('Скрыть');
        } else {
            $(this).text('Подробнее');
        }
    });

});
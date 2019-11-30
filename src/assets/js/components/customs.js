$(function () {

    'use strict';

    // Заміна тексту для dropdown
    $('.dropdown-item').on('click', function () {
        let thisText = $(this).text();
        let thisDropdown = $(this).attr('data-target');
        $(thisDropdown).text(thisText);
    });

    // Popover
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });

});
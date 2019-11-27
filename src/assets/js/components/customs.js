'use strict';

$('.dropdown-item').on('click', function () {
    let thisText = $(this).text();
    let thisDropdown = $(this).attr('data-target');
    $(thisDropdown).text(thisText);
});
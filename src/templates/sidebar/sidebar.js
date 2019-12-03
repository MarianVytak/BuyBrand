'use strict';

const toggleLink = $('.sidebar__toggle_link');
const chart = $('.chart-toggle');
toggleLink.on('click', function (e) {
    e.preventDefault();
    let thisChart = $(this).attr('href');
    toggleLink.removeClass('active');
    $(this).addClass('active');
    chart.fadeOut();
    $(thisChart).fadeIn();
});
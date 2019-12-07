$(function () {

    'use strict';

    // Заміна тексту для dropdown
    $('.dropdown-item').on('click', function (e) {
        e.preventDefault();
        let thisText = $(this).text();
        let thisDropdown = $(this).attr('data-target');
        $(thisDropdown).text(thisText);
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
    $('.chart__block_grid_item').tooltip({
        title: '<div class="chart-hover">\n' +
            '    <ul class="chart-hover_list">\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item bg-age-4 active">\n' +
            '            <div class="chart-hover_list_item_names">\n' +
            '                <div class="chart-hover_list_item_name">Name</div>\n' +
            '                <div class="chart-hover_list_item_name-full">Полное название</div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1-w.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '        <li class="chart-hover_list_item">\n' +
            '            <div class="chart-hover_list_item_name">Name</div>\n' +
            '            <div class="chart-hover_list_item_info">\n' +
            '                <div class="chart-hover_list_item_info_ratio">\n' +
            '                    1000 <span class="ratio-up"></span>\n' +
            '                </div>\n' +
            '                <div class="chart-hover_list_item_info_chart">\n' +
            '                    <img src="../../../assets/img/chart-1.png" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="chart-hover_list_item_position">\n' +
            '                <div class="chart-hover_list_item_position_this">Позиция: 10</div>\n' +
            '                <div class="chart-hover_list_item_position_change">\n' +
            '                    <img src="../../../assets/img/icons/up.png" alt="">\n' +
            '                    <span>6</span>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </li>\n' +
            '    </ul>\n' +
            '</div>',
    });

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
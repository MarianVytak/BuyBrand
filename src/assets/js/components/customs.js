$(function () {

    'use strict';

    // Заміна тексту для dropdown
    $('.dropdown-item').on('click', function () {
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
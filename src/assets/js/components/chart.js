var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['янв. 2019', 'фев. 2019', 'март 2019', 'апр. 2019', 'май 2019', 'июнь 2019', 'июль 2019', 'авг. 2019', 'сен. 2019', 'окт. 2019', 'ноя. 2019', 'дек. 2019'],
        datasets: [{
            label: 'Коефіцієнт',
            data: [400, 560, 500, 850, 700, 790, 880, 920, 830, 910, 1000, 1100],
            backgroundColor: 'rgba(63, 160, 253, 0.49)',
            borderColor: 'rgba(63, 160, 253, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
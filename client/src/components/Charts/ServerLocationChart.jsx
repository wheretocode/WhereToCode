import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ServerLocationChart = () => {
    const options = {
        chart: {
            type: 'donut',
        },
        series: [100, 40, 30, 20, 10],
        labels: ['Virginia', 'Texas', 'Arizona', 'New York', 'Washington'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
    }

    return(
        <div>
            <h3>Servers By Location</h3>
            <ReactApexChart options={options}
                            series={options.series}
                            type='donut'
                            width={500}
                            height={400}
                            />
        </div>
    );
}

export default ServerLocationChart;
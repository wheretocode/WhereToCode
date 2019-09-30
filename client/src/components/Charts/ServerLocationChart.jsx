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

    const chartStyle = { backgroundColor: 'white', padding: '10px', margin: '12px', boxShadow: '3px 3px 5px 3px #888888' }

    return(
        <div style={chartStyle}>
            <h2>Servers By Location</h2>
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
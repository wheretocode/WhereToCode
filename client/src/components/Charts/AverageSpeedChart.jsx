import React from 'react';
import Chart from 'react-apexcharts';

const AverageSpeedChart = () => {
    const options = {
        chart: {
            id: 'averageSpeed'
        },
        xaxis: {
            categories: ['user', 'us', 'europe', 'china', 'russia']
        }
    };

    const series = [
        {
            name: 'download speed Mbps',
            data: [10, 14.20, 12.8, 4.1, 11.6]
        }
    ];

    return(
        <div>
            <h3>Average Download Speed by Region:</h3>
             <Chart options={options} 
                    series={series} 
                    type="bar" 
                    width={500}
                    height={320} />
        </div>
    )
}

export default AverageSpeedChart;
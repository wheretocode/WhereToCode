import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AverageSpeedChart = () => {
    const options =  {
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '16px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },

        xaxis: {
          categories: ['User', 'US', 'Europe','China', 'Russia'],
          labels: {
              style: {
                  fontSize: '14px'
              }
          }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '18px'
                }
            }
        }
      }

    const series = [
        {
            name: 'Download Speed (Mbps)',
            data: [10, 14, 12, 8, 13]
        },
        {
            name: 'Upload Speed (Mbps)',
            data: [6, 8, 7, 5, 6]
        }
    ];

    return(
        <div id='chart'>
            <h3>Average Download Speed by Region:</h3>
             <ReactApexChart options={options} 
                    series={series} 
                    type="bar" 
                    width={500}
                    height={400} />
        </div>
    )
}

export default AverageSpeedChart;
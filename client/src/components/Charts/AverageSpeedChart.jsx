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

    const chartStyle = { backgroundColor: 'white', padding: '10px', margin: '12px', boxShadow: '3px 3px 5px 3px #888888' }

    return(
        <div style={chartStyle}>
            <h2>Average Download Speed by Country:</h2>
             <ReactApexChart options={options} 
                    series={series} 
                    type="bar" 
                    width={500}
                    height={400} />
        </div>
    )
}

export default AverageSpeedChart;
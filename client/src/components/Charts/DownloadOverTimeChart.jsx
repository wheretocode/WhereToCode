import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DownloadOverTimeChart = () => {
    const startDate = new Date();

    const dates = [
        `${startDate.getMonth() + 1}/${startDate.getDate() - 7}`,
        `${startDate.getMonth() + 1}/${startDate.getDate() - 6}`,
        `${startDate.getMonth() + 1}/${startDate.getDate() - 5}`,
        `${startDate.getMonth() + 1}/${startDate.getDate() - 4}`,
        `${startDate.getMonth() + 1}/${startDate.getDate() - 3}`,
        `${startDate.getMonth() + 1}/${startDate.getDate() - 2}`,
        `${startDate.getMonth() + 1}/${startDate.getDate()}`
    ]

    const options = {
        chart: {
              zoom: {
                  enabled: false
              }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'straight'
          },
          grid: {
              row: {
                  colors: ['#f3f3f3', 'transparent'],
                  opacity: 0.5
              },
          },
          xaxis: {
              categories: dates,
          }
      }

    const series = [{
        name: "Dowload (Mbps)",
        data: [10.21, 8.15, 13.21, 12.12, 15.42, 9.1, 13.5]
    }]

    const chartStyle = { backgroundColor: 'white', padding: '10px', margin: '12px', boxShadow: '3px 3px 5px 3px #888888' } 

    return (
        <div style={chartStyle}>
            <h2>User Download Speed 7 Days</h2>
            <ReactApexChart options={options} 
                            series={series} 
                            type="line" 
                            height="350"
                            width='500' 
                            />
        </div>
    );
}

export default DownloadOverTimeChart;
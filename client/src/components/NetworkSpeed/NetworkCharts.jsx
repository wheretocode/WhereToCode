import React from 'react';

import AverageSpeedChart from '../Charts/AverageSpeedChart';
import ServerLocationChart from '../Charts/ServerLocationChart';
import DownloadOverTimeChart from '../Charts/DownloadOverTimeChart';

class NetworkCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    formatting = {
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#eee',
        width: '90%'
    }

    render() {
        return(
            <div style={this.formatting}>
                <AverageSpeedChart />
                <DownloadOverTimeChart />
                <ServerLocationChart/>
            </div>
        );
    }
}

export default NetworkCharts;
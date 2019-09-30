import React from 'react';

import AverageSpeedChart from '../Charts/AverageSpeedChart';
import ServerLocationChart from '../Charts/ServerLocationChart';

class NetworkCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <AverageSpeedChart />
                <ServerLocationChart/>
            </div>
        );
    }
}

export default NetworkCharts;
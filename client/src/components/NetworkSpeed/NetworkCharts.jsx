import React from 'react';

import AverageSpeedChart from '../Charts/AverageSpeedChart';

class NetworkCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div>
                <AverageSpeedChart />
            </div>
        );
    }
}

export default NetworkCharts;
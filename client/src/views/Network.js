import React from 'react';

import NetworkKey from '../components/NetworkSpeed/NetworkKey';
import NetworkCharts from '../components/NetworkSpeed/NetworkCharts';

const Network = () =>  {
        return(
            <div>
                <div>
                    <h2>Network Terms and Definitions:</h2>
                    <NetworkKey />
                </div>
                
                <div>
                    <h2>Network Data Visualized:</h2>
                    <NetworkCharts />
                </div>
            </div>
        )
}

export default Network;
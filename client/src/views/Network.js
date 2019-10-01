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
                
                <NetworkCharts />
            </div>
        )
}

export default Network;
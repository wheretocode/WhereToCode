import React from 'react';

const NetworkDashboard = () => {
    const networkInterface = navigator.connection 
                             || navigator.mozConnection 
                             || navigator.webkitConnection;

    const network = Object.entries({
        type: networkInterface.type,
        effectiveType: networkInterface.effectiveType,
        downlink: networkInterface.downlink,
        downlinkMax: networkInterface.downlinkMax,
        rtt: networkInterface.rtt,
        saveData: networkInterface.saveData,
        onchange: networkInterface.onchange
    });

    console.log(network);

    return(
        <div>
            <h2>Network Dashboard</h2>

            <div>
                {
                    network.map(data => {
                        if(data[1] !== null && data[1] !== undefined) {

                            return <p key={Math.random()}>
                                        {`${data[0]}: ${data[1]}`}
                                    </p>

                        }
                    })
                }
            </div>
        </div>
    );
}

export default NetworkDashboard;
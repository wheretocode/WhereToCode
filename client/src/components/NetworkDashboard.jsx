import React from 'react';

const NetworkDashboard = () => {
    //Obtain Available Network Information from User's Browser
    const networkInterface = navigator.connection 
                             || navigator.mozConnection 
                             || navigator.webkitConnection;

    //Creates an Array of Arrays of the Network Data for Mapping
    let network = [];

    if(networkInterface !== undefined) {
        network = Object.entries({
            type: networkInterface.type,
            effectiveType: networkInterface.effectiveType,
            downlink: networkInterface.downlink,
            downlinkMax: networkInterface.downlinkMax,
            rtt: networkInterface.rtt,
            saveData: networkInterface.saveData,
            onchange: networkInterface.onchange
        });
    }

    //Network Information Key to Display for Users
    const networkKey = {
        type: 'Connection Type',
        effectiveType: 'Effective Connection Type',
        downlink: 'Downlink Speed',
        downlinkMax: 'Max Downlink Speed',
        rtt: 'Round Trip Time',
        saveData: 'Reduced Data Usage',
    }

    return(
        <div>
            <h2>Network Dashboard</h2>

            <div data-testid='info-box' >
                {
                    network.map(data => {
                        //Check for Available Data Out of Possible Options
                        //data[0] = key, data[1] = value
                        if(data[1] !== null && data[1] !== undefined) {
                            
                            //Check If Time Units Need To Be Added
                            let displayData;

                            if(data[0] === 'downlink' || data[0] === 'downlinkMax') {
                                displayData = `${data[1]} Mb/s`;
                            } else if(data[0] === 'rtt') {
                                displayData = `${data[1]} ms`
                            } else {
                                displayData = data[1];
                            }

                            return <p key={Math.random()}>
                                        {`${networkKey[data[0]]}: ${displayData}`}
                                    </p>

                        }
                        //Removes Warning for No Return on Arrow Function
                        return null;
                    })
                }
            </div>
        </div>
    );
}

export default NetworkDashboard;
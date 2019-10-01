import React from 'react';
import { DataTable, Text } from 'grommet';


const NetworkKey = () => {
    return(
        <div>
               <DataTable
                    columns={
                        [
                            { property: 'Name', header: <Text>Name</Text> },
                            { property: 'Definition', header: <Text>Definition</Text> },
                            { property: 'Example', header: <Text>Example</Text> }
                        ]
                    }
                    data={
                        [
                            { Name: 'Download Speed (Mbps)', Definition: 'the data download rate of a network or Internet connection in megabits per second', Example: '100.50 Mbps' },
                            { Name: 'Download Speed (Bps)', Definition: 'the unadjusted download rate of a network or Internet connection in bytes per second', Example: '12562500 Bps' },
                            { Name: 'Upload Speed (Mbps)', Definition: 'the data upload rate of a network or Internet connection in megabits per second', Example: '70.50 Mbps' },
                            { Name: 'Upload Speed (Bps)', Definition: 'the unadjusted data upload rate of a network or Internet connection in bytes per second', Example: '8812500 Bps' },
                            { Name: 'Ping', Definition: 'how long it took to download a small file from the server, in ms', Example: '120 ms' },
                            { Name: 'ISP', Definition: 'internet service provider of the currently connected network', Example: 'Comcast' },
                            { Name: 'Current IP', Definition: 'a unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network.', Example: '55.555.55.555' },
                            { Name: 'Server Location', Definition: ' name of a location, usually a city, but can be anything, for the network\'s server', Example: 'Houstan, TX' },
                            { Name: 'Server Distance', Definition: ' distance from client to server (Imperial)', Example: '34mi' },

                        ]
                    }
                    />
        </div>
    )
}

export default NetworkKey;
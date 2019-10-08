import React from 'react';
import axios from 'axios';

import NetworkTableGeneral from './NetworkTableGeneral';
import NetworkTableSpeeds from './NetworkTableSpeeds';

import TriangleLoader from '../Loaders/TriangleLoader';

import { Box, Button, RoutedButton } from 'grommet';

import * as ROUTES from '../../Routes/routes';

class NetworkSpeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = { client: {}, server: {} }
    }

    resetState = () => {
        this.setState({ client: {}, server: {} });
    }

    runNetworkTest = () => {
        this.resetState();
        // https://wheretocode-master.herokuapp.com/api/network
        axios.get('https://wheretocode-staging-3.herokuapp.com/api/network')
             .then(res => { 
         console.log(res)
                                this.setState({ 
                                download: res.data.speeds.download.toFixed(2),
                                upload: res.data.speeds.upload.toFixed(2),
                                originalDownload: res.data.speeds.originalDownload.toFixed(0),
                                originalUpload: res.data.speeds.originalDownload.toFixed(0),
                                client: res.data.client,
                                server: res.data.server
                            })
                        })
             .catch(err => console.log(err));
    }

    componentDidMount() {
        // let imageAddr = "https://images.pexels.com/photos/1338789/pexels-photo-1338789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        // let startTime, endTime;

        // const downloadSize = 1626000;
        // const download = new Image();

        // download.onload = function () {
        //     endTime = (new Date()).getTime();
        //     showResults();
        // }

        // startTime = (new Date()).getTime();
        // const cacheBuster = "?nnn=" + startTime;

        // download.src = imageAddr + cacheBuster;
    
        // function showResults() {
        //     var duration = Math.round((endTime - startTime) / 1000);
        //     var bitsLoaded = downloadSize * 8;
        //     var speedBps = (bitsLoaded / duration).toFixed(0);
        //     var speedKbps = (speedBps / 1024).toFixed(2);
        //     var speedMbps = (speedKbps / 1024).toFixed(2);
    
        //     const data = {
        //         duration,
        //         bitsLoaded,
        //         speedBps,
        //         speedKbps,
        //         speedMbps
        //     }
    
        //     alert("Your connection speed is: \n" + 
        //         speedBps + " bps\n"   + 
        //         speedKbps + " kbps\n" + 
        //         speedMbps + " Mbps\n" );
        // }

   
        const xhr = new XMLHttpRequest();
        
    
        xhr.onreadystatechange = function () {
            // we only need to know when the request has completed
            if (xhr.readyState === 4 && xhr.status === 200) {

                // Here we stop the timer & register end time
                const endTime = ((new Date()).getTime() / 1000);

                // Also, calculate the file-size which has transferred
                const fileSize = xhr.responseText.length;
                console.log(fileSize)
                // N.B: fileSize reports number of Bytes
                
                console.log(endTime,startTime)
                const duration = endTime - startTime
                const bitsLoaded = fileSize * 8


                // Calculate the connection-speed
                console.log(duration, bitsLoaded)
                const speedBps = (bitsLoaded / duration).toFixed(0);
                const speedKbps = (speedBps / 1024).toFixed(2);
                const speedMBps = (speedKbps / 1024).toFixed(2);
                const speedMbps = (speedMBps * 8).toFixed(2);
 

                // Report the result
                console.log(speedBps + " Bps\n", speedKbps + " kbps\n", speedMbps + " Mbps\n", speedMBps + " MBps\n");
            }
        }

        // Snap back; here's where we start the timer
        const startTime = ((new Date()).getTime() / 1000);

        // All set, let's hit it!
        xhr.open("GET", "https://images.pexels.com/photos/1338789/pexels-photo-1338789.jpeg", true);
        xhr.send();
    }

    render() {
        return(
            <Box direction='row'
                 justify='evenly'
                 pad='medium'
                 background='dark-2'
            >


                {
                    Object.keys(this.state.client).length > 0 ? <Box>
                                                                    <Box direction='row'>
                                                                        <NetworkTableGeneral data={this.state} />
                                                                        <NetworkTableSpeeds data={this.state} />
                                                                    </Box>

                                                                    <Button label='Run Test' 
                                                                            color='gold' 
                                                                            alignSelf='center' 
                                                                            pad='large' 
                                                                            onClick={this.runNetworkTest}
                                                                    />

                                                                    <RoutedButton label='More Info'
                                                                                    path={ROUTES.NETWORK} 
                                                                                    color='gold' 
                                                                                    alignSelf='center' 
                                                                                    pad='large' 
                                                                                    onClick={this.runNetworkTest}
                                                                    />
                                                                </Box>
                                                              
                                                              : <TriangleLoader/>
                }

            </Box>
        );
    }

}

export default NetworkSpeed;
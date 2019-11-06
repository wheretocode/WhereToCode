import React from 'react';
import axios from 'axios';

import NetworkTableGeneral from './NetworkTableGeneral';
import NetworkTableSpeeds from './NetworkTableSpeeds';
import xmlToJson from './XmlConverter';

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

    runNetworkTest = US_state => {
        // Reset the state to trigger loading animation
        this.resetState();

        // Test the network speed against a server in the user's state
        axios.get('https://wheretocode-master.herokuapp.com/api/network', {
                params: {
                    state: US_state
                }
            })
             .then(res => { 
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
        // Pull the users lat and long from local storage
        const latitude = localStorage.getItem('lat');
        const longitude = localStorage.getItem('lng');

        // Get the neareset address to the user coordinates 
        axios.get(`//api.geonames.org/findNearestAddress?lat=${latitude}&lng=${longitude}&username=trip1701`)
            .then(res => {
                const parser = new DOMParser()

                // Get XML response
                const XMLres =  parser.parseFromString(res.data, "text/xml")

                // Convert XML to JSON
                const JSONres = xmlToJson(XMLres);

                // Get the user's state 
                const US_state = JSONres.geonames.address.adminName1["#text"];
        
                this.runNetworkTest(US_state);
            })
            .catch(err => {
                console.log(err)
            });

        this.runNetworkTest();
    }

    render() {
        return(
            <Box direction='row'
                 justify='evenly'
                 pad='medium'
                 background='dark-2'
                 maxWidth='300px'
            >


                {
                    Object.keys(this.state.client).length > 0 ? <Box>
                                                                    <Box direction='row' display="flex" direction="column">
                                                                        <NetworkTableGeneral data={this.state} />
                                                                        <NetworkTableSpeeds data={this.state} />
                                                                    </Box>

                                                                    {/* 
                                                                        Below Components are incomplete mocks for future releases 
                                                                    */}

                                                                    {/* <Button label='Run Test' 
                                                                            color='gold' 
                                                                            alignSelf='center' 
                                                                            pad='large' 
                                                                            onClick={this.runNetworkTest}
                                                                        /> 
                                                                    */}

                                                                    {/* <RoutedButton label='More Info'
                                                                                    path={ROUTES.NETWORK} 
                                                                                    color='gold' 
                                                                                    alignSelf='center' 
                                                                                    pad='large' 
                                                                                    onClick={this.runNetworkTest}
                                                                        /> 
                                                                    */}
                                                                </Box>
                                                              
                                                              : <TriangleLoader/>
                }

            </Box>
        );
    }

}

export default NetworkSpeed;
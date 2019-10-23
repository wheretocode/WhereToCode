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
        this.resetState();
        // https://wheretocode-master.herokuapp.com/api/network
        axios.get('https://wheretocode-staging-3.herokuapp.com/api/network', {
                params: {
                    state: US_state
                }
            })
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
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            axios.get(`http://api.geonames.org/findNearestAddress?lat=${latitude}&lng=${longitude}&username=trip1701`)
                .then(res => {
                    const parser = new DOMParser()

                    const XMLres =  parser.parseFromString(res.data, "text/xml")

                    const JSONres = xmlToJson(XMLres);

                    const US_state = JSONres.geonames.address.adminName1["#text"];

                    this.runNetworkTest(US_state);
                })
                .catch(err => {
                    console.log(err)
                });
        });

        this.runNetworkTest();
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

                                                                    {/* <Button label='Run Test' 
                                                                            color='gold' 
                                                                            alignSelf='center' 
                                                                            pad='large' 
                                                                            onClick={this.runNetworkTest}
                                                                    /> */}

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
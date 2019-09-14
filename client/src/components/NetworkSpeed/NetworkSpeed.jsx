import React from 'react';
import axios from 'axios';

import { Box, Table, TableBody, TableHeader, TableCell, TableRow, DropButton } from 'grommet';

class NetworkSpeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = { client: {}, server: {} }
    }

    componentDidMount() {
        //https://wheretocode-master.herokuapp.com/api/network
        axios.get('http://localhost:8080/api/network')
             .then(res => {
                        console.log(res.data)

                        this.setState({ 
                            download: res.data.speeds.download,
                            upload: res.data.speeds.upload,
                            originalDownload: res.data.speeds.originalDownload.toFixed(0),
                            originalUpload: res.data.speeds.originalDownload.toFixed(0),
                            client: res.data.client,
                            server: res.data.server
                        })
                    })
             .catch(err => console.log(err));
    }

    render() {
        const borderStyle = {
                            "color": "gold",
                            "size": "small",
                            "style": "solid",
                            "side": "bottom"
                            }

        const borderStyleCell = {
            ...borderStyle,
            "side": "right"
        }

        return(
            <Box direction='row'
                 justify='evenly'
                 pad='medium'
                 background='dark-2'
                 >

                <Table>
                    <TableHeader>
                        <TableRow>

                            <TableCell scope="col" border={borderStyle}>
                                <strong>Network General Info</strong>
                            </TableCell>

                            <TableCell scope="col" border={borderStyle}></TableCell>

                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                ISP
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.client.isp}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Current IP
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.client.ip}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Server Host
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.server.host}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Server Location
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.server.location}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Server Distance
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.server.distanceMi} mi</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>

                            <TableCell scope="col" border={borderStyle}>
                                <strong>Network Speed Info</strong>
                            </TableCell>

                            <TableCell scope="col" border={borderStyle}></TableCell>
                            <TableCell scope="col" border={borderStyle}></TableCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Download Speeds
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.download} Mbps</TableCell>
                            <TableCell border={borderStyleCell}>{this.state.originalDownload} Bps</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Upload Speeds
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.upload} Mbps</TableCell>
                            <TableCell border={borderStyleCell}>{this.state.originalUpload} Bps</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell scope="row" border={borderStyleCell}>
                                Ping Speed
                            </TableCell>
                            <TableCell border={borderStyleCell}>{this.state.server.ping} ms</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Box>
        );
    }

}

export default NetworkSpeed;
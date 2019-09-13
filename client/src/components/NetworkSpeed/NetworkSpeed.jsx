import React from 'react';
import axios from 'axios';

class NetworkSpeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        axios.get('https://wheretocode-master.herokuapp.com/api/network')
             .then(res => {
                        console.log(res.data)

                        this.setState({ 
                            download: (res.data.speeds.download / 125).toFixed(2),
                            upload: (res.data.speeds.upload / 125).toFixed(2),
                            originalDownload: res.data.speeds.originalDownload.toFixed(0),
                            originalUpload: res.data.speeds.originalDownload.toFixed(0),
                            client: res.data.client,
                            server: res.data.server
                        })
                    })
             .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <p>Download Speed: {this.state.download} Mbps</p>
                <p>Original Download Speed: {this.state.originalDownload} Bps</p>
                <p>Upload Speed: {this.state.upload} Mbps</p>
                <p>Original Upload Speed: {this.state.originalUpload} Bps</p>
            </div>
        );
    }

}

export default NetworkSpeed;
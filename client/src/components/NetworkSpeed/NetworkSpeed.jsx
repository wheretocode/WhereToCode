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
                            download: (res.data.download / 125).toFixed(2),
                            upload: (res.data.upload / 125).toFixed(2),
                            originalDownload: res.data.originalDownload.toFixed(2),
                            originalUpload: res.data.originalDownload.toFixed(2),
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
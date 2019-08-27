import React from 'react';
import axios from 'axios';

class NetworkDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:9001/api/network')
             .then(res => {
                 console.log(res.body)
                        this.setState({ ...res.body })
                    })
             .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                Hell World
            </div>
        );
    }

}

export default NetworkDashboard;
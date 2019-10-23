const { fork } = require('child_process');
const express = require('express');
const router = express.Router();

// url/api/network
router.get('/', (req, res) => {
        console.log("REQUEST", req.query.state)
        const forked = fork('./backend/child_processes/networkApiChild.js');

        forked.on('message', (msg) => {
            res.status(200).json(msg);
    
            forked.disconnect();
        });
    
        forked.send({ start: 'speed-test', state: req.query.state });
});

module.exports = router;
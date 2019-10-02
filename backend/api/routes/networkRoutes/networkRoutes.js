const { fork } = require('child_process');
const express = require('express');
const router = express.Router();

// url/api/network
router.get('/', (req, res) => {
    try {
        const forked = fork('./backend/child_processes/networkApiChild.js');

        forked.on('message', (msg) => {
            console.log(msg)
            res.status(200).json(msg);
    
            forked.disconnect();
        });
    
        forked.send({ start: 'speed-test' });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
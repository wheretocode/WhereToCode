const { fork } = require('child_process');
const express = require('express');
const router = express.Router();

// url/api/network
router.get('/', (req, res) => {
        // Forks a child process utilizing the child process
        const forked = fork('./backend/child_processes/networkApiChild.js');

        // when fork recieves a message from the child process, it returns that message as JSON
        forked.on('message', (msg) => {
            res.status(200).json(msg);
    
            // Closes fork
            forked.disconnect();
        });
        
        // Data packet to send to child process
        forked.send({ start: 'speed-test', state: req.query.state });
});

module.exports = router;
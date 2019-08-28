const { fork } = require('child_process');
const express = require('express');
const router = express.Router();

// url/api/network
router.get('/', (req, res) => {
    const forked = fork('./backend/child_processes/networkApiChild.js');

    forked.on('message', (msg) => {
        res.status(200).json(msg);

        forked.disconnect();
    });

    forked.send({ start: 'speed-test' });
});

module.exports = router;
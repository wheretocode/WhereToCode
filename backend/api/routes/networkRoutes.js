const express = require('express');
const router = express.Router();

const speedTest = require('speedtest-net');
const test = speedTest({ maxTime: 3000 });

router.get('/network', (req, res) => {
    test.on('data', data => {
  
        if(data.speeds.download && data.speeds.upload) {
            res.status(200).json(data.speeds);
        } else {
            res.status(500).json({ error: "Check Internet Connection" });
        }
        
    });
});

module.exports = router;
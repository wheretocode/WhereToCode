const express = require('express');
const router = express.Router();
//Speed Test API
const speedTest = require('speedtest-net')({ maxTime: 3000 });

// url/api/network
router.get('/', (req, res) => {
    speedTest.on('data', data => {
        //if data has download and upload speeds, send data
        if(data.speeds.download && data.speeds.upload) {
            res.status(200).json(data.speeds);
        } else {
            res.status(500).json({ error: "Check Internet Connection" });
        }
        
    });
});

module.exports = router;
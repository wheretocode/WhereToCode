//Speed Test API
const speedTest = require('speedtest-net')({ maxTime: 1000 });

process.on('message', (msg) => {
    console.log('assets on');
    speedTest.on('data', data => {
        //if data has download and upload speeds, send data
        if(data.speeds.download && data.speeds.upload) {
            process.send(data.speeds);
       
        } else {
            process.send({ error: "Check Internet Connection" });
        }
    });
});

process.on('disconnect', () => {
    console.log('disonnected')
    process.exit(0);
    console.log('exited')
});
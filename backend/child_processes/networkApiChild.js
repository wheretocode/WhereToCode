const selectServer = require('./selectServerLogic');
//Speed Test API
const speedTest = require('speedtest-net')({ maxTime: 1000, serverId: selectServer() });

process.on('message', (msg) => {

    speedTest.on('config', config => {
        //console.log('Configuration info:');
        //console.dir(config);
      });
  
    speedTest.on('data', data => {
        //console.log('data info: ')
        //console.dir(data)  
        if(data.speeds.download && data.speeds.upload) {

            process.send(data);
       
        } else {

            process.send({ error: "Check Internet Connection" });

        }
    });

    speedTest.on('result', url => {
        if (!url) {
          console.log('Could not successfully post test results.');
        } else {
          console.log('Test result url:', url);
        }
      });
});

process.on('disconnect', () => {
    process.exit(0);
});
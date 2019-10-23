const selectServer = require('./selectServerLogic');
//Speed Test API
speedTest = require('speedtest-net');


process.on('message', (msg) => {
    const test = speedTest({ maxTime: 1000, serverId: selectServer(msg.state)});
    
    test.on('config', config => {
        //console.log('Configuration info:');
        //console.dir(config);
      });
  
      test.on('data', data => {
        //console.log('data info: ')
        console.dir(data)  
        if(data.speeds.download && data.speeds.upload) {

            process.send(data);
       
        } else {

            process.send({ error: "Check Internet Connection" });

        }
    });

    test.on('result', url => {
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
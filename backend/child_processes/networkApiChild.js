const selectServer = require("./selectServerLogic");
//Speed Test API
speedTest = require("speedtest-net");

//Process starts, and waits for message
process.on("message", msg => {
  // Set SpeedTest config, see selectServerLogic.js for details on function
  const test = speedTest({ maxTime: 1000, serverId: selectServer(msg.state) });

  // Test runs and waits for data to be recieved
  test.on("data", data => {
    // if test results has download and upload speed send data to fork in networksRoutes.js
    // else there was a problem with the user's connection
    if (data.speeds.download && data.speeds.upload) {
      process.send(data);
    } else {
      process.send({ error: "Check Internet Connection" });
    }
  });
});

// Disconnects from fork
process.on("disconnect", () => {
  // closes child process
  process.exit(0);
});

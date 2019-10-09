const serverList = require('./servers.json');

const selectServer = userLocation => {
    //destruct server array
    const servers = serverList.servers.server
    //servers.map(server => console.log(server['-name'].split(', ')[1]));
  
    //filter servers by user location
    const stateServers = servers.filter(server => {
      const serverLocation = server['-name'].split(', ')[1];
  
      return serverLocation ? serverLocation.toLowerCase() === 'ca'
                            : false;
    });
  
  
    //Pick and Select Random Server from List of Options
    const serverIndex = Math.round(Math.random() * stateServers.length - 1);
  
    const selectedServer = stateServers[serverIndex];
  
    console.log(selectedServer, ':', selectedServer['-id']);
  
    return `${selectedServer['-id']}`;
  } 

  module.exports = selectServer;
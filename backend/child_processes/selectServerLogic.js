const serverList = require('./servers.json');
const convertState = require('./stateMap.js');

const selectServer = userLocation => {
    //destruct server array
    const servers = serverList.servers.server
    let stateServers,
        stateAbbr;

    if (userLocation) stateAbbr = convertState(userLocation, "abbr");

 
  
    if(stateAbbr && stateAbbr.length > 0) {
      //filter servers based on user location
      stateServers = servers.filter(server => {
        const serverLocation = server['-name'].split(', ')[1];

        return serverLocation ? serverLocation.toLowerCase() === stateAbbr.toLowerCase()
                              : false;
      });

    } else {
      //filter defaults to California servers
      stateServers = servers.filter(server => {
        const serverLocation = server['-name'].split(', ')[1];

        return serverLocation ? serverLocation.toLowerCase() === 'ca'
                              : false;
      });
    }
  
    //Pick and Select Random Server from List of Options
    const serverIndex = Math.round(Math.random() * stateServers.length - 1);
    const selectedServer = stateServers[serverIndex];

  
    return `${selectedServer['-id']}`;
  } 

  module.exports = selectServer;
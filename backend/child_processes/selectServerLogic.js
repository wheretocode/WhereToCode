const serverList = require('./servers.json');
const convertState = reqiure('./stateMap.js');

const selectServer = userLocation => {
    //destruct server array
    const servers = serverList.servers.server
    
    const stateAbbr = convertState(userLocation, "abbr");
    console.log("STATE:::::", stateAbbr);

    let stateServers;


    if(userLocation.length > 0) {
      //filter servers based on user location
      stateServers = servers.filter(server => {
        const serverLocation = server['-name'].split(', ')[1];

        return serverLocation ? serverLocation.toLowerCase() === stateAbbr
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
  
    console.log(selectedServer, ':', selectedServer['-id']);
  
    return `${selectedServer['-id']}`;
  } 

  module.exports = selectServer;
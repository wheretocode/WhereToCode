//ENV Configuration
require("dotenv").config();

// SERVER
const server = require("./api/server.js");

// PORT
const PORT = process.env.PORT || 8080;

// LISTENING
server.listen(PORT, () => {
  console.log(`*** \n\tServer listening on http://localhost:${PORT} \n***`);
});
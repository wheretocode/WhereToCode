//ENV Configuration
require('dotenv').config();

// SERVER
const server = require("./api/server.js");
const connectDB = require('./config/connectDB');

// PORT
const PORT = process.env.PORT || 9001;

// Connect to MongoDB
connectDB();

// LISTENING
server.listen(PORT, () => {
  console.log(`*** \n\tServer listening on http://localhost:${PORT} \n***`);
});

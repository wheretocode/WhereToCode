// IMPORTS
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// ROUTER

// SERVER
const server = express();

server.use(
  express.json(),
  cors(),
  helmet(),
  morgan('dev')
);

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
  console.log("Yes, it is working");
  res.json({ message: "WhereToCode Server Is Working" });
});

// INDIVIDUAL ROUTES

// EXPORTS
module.exports = server;

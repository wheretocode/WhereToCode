// IMPORTS
const express = require("express");

// ROUTER

// SERVER
const server = express();
server.use(express.json());

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
  console.log("Yes, it is working");
  res.json({ message: "WhereToCode Server Is Working" });
});

// INDIVIDUAL ROUTES

// EXPORTS
module.exports = server;

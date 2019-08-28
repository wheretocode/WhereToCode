// IMPORTS
const express = require("express");
const cors = require("cors");

// ROUTER

// SERVER
const server = express();
server.use(express.json());
server.use(cors());

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
  console.log("Yes, it is working");
  res.json({ message: "WhereToCode Server Is Working" });
});

// INDIVIDUAL ROUTES

// EXPORTS
module.exports = server;

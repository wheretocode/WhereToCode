// IMPORTS
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Importing of Routes
const AuthRouter = require("./routes/AuthRoute");
const LocationsRouter = require("./routes/locationsRoute.js");
const routes = require("./routes");

// SERVER
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

// ROUTER
server.use("/auth", AuthRouter);
server.use("/locations", LocationsRouter);
server.use("/api", routes);

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
  console.log("Yes, it is working");
  res.json({ message: "WhereToCode Server Is Working" });
});

// EXPORTS
module.exports = server;

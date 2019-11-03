// IMPORTS
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Importing of Routes
const authRoute = require("./routes/authRoute.js");
const locationsRoute = require("./routes/locationsRoute.js");
const usersRoute = require("./routes/usersRoute.js");
const reviewsRoute = require("./routes/reviewsRoute.js");
const signToken = require('./middleware/signToken.js')
const routes = require("./routes");

// SERVER
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

// ROUTER
server.use("/auth", authRoute);
server.use("/locations", locationsRoute);
server.use("/users", usersRoute);
server.use("/reviews", reviewsRoute);
server.use("/token", signToken);
server.use("/api", routes);

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
  console.log("Yes, it is working");
  res.json({ message: "WhereToCode Server Is Working" });
});

// EXPORTS
module.exports = server;

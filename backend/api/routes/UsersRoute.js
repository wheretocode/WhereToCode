const express = require("express");
const router = express.Router();

const Users = require("../models/UsersModel.js");

router.post("/register", async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(500).json({ msg: "Nothing in req.body" });
  }
  let user = req.body;
  try {
    // console.log(process.env.environment);
    const addedUser = await Users.add(user);
    res.status(201).json({ message: "User added", addedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding user." });
  }
});

module.exports = router;

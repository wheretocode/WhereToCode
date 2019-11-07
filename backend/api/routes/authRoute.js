// IMPORTS
const USERS_MODEL = require("../models/UsersModel");

// EXPRESS ROUTER
const router = require("express").Router();

// @route  POST auth/
// @desc   Gets all of the locations in the database
// @access Public
router.post("/register", async (req, res) => {
  if (!req.body) {
    return res.status(500).json({ msg: "Nothing in req.body" });
  }
  let user = req.body;
  try {
    const addedUser = await USERS_MODEL.add(user);
    return res.status(201).json({ message: "User added", addedUser });
  } catch (err) {
    res.status(500).json({ message: "Error adding user." });
  }
});

module.exports = router;

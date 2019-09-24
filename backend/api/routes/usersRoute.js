// IMPORTS
const USERS_MODEL = require("../models/UsersModel");

// EXPRESS ROUTER
const router = require("express").Router();

// @route  GET users/
// @desc   Gets all of the users in the database
// @access Public
router.get("/", async (req, res) => {
  try {
    const allUsers = await USERS_MODEL.getAll_users();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

// @route  GET users/:userid
// @desc   Gets a specific user from the database
// @access Public
router.get("/:id", async (req, res) => {
  console.log('usersRouter get id/')
  // const { id } = req.params;
  try {
    const User = await USERS_MODEL.getUserById(req.params.id);
    if (User) {
      res.status(200).json(User);
    } else {
      res.status(400).send({ message: "get id error" });
    }
  } catch (err) {
    res.status(500).json({ msg: "error", err });
  }
});


// @route  GET users/:id
// @desc   Gets a specific user from the database
// @access Public
router.put('/:id', async (req, res) => {
  console.log('usersRouter put/')

  try {
    // ATTEMPT UPDATE
    const updatedUser = await USERS_MODEL.updateUser(req.params.id, req.body);
    console.log('updatedUser', updatedUser);

    return res.status(200).json({ message: "updated user", updatedUser })
  } catch (err) {
    return res.status(500).json({ msg: err });
  }

})




module.exports = router;

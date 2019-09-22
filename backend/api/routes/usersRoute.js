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
router.get("/:userid", async (req, res) => {
  const { id } = req.params;
  try {
    const specifiedUser = await USERS_MODEL.getUserById(id);
    res.status(200).json(specifiedUser);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

// @route PUT users/:userid
// @desc updated individual user on BE & Firebase
// @access Protected 
router.put('/:userid', async(req,res) => {
  console.log('usersRouter put/')
  const { id } = req.params;
  try {
    // ATTEMPT UPDATE
    const updatedUser = await USERS_MODEL.updateUser(id)
      console.log('updatedUser', updatedUser)

      // res.status(200).json(updatedUser);
  } catch {
    res.status(500).json({ msg: err });
  }
  
})

module.exports = router;

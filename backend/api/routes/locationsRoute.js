// IMPORTS
const LOCATIONS_MODEL = require("../models/LocationsModel.js");
const authenticate = require('../middleware/authenticate.js')

// EXPRESS ROUTER
const router = require("express").Router();

// @route  GET locations/
// @desc   Gets all of the locations in the database
// @access Public
router.get("/", async (req, res) => {
  try {
    let result = await LOCATIONS_MODEL.getAll_locations();
    console.log(result);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


router.get("/:fbid", async (req, res) => {
  const { fbid } = req.params;
  try {
    let result = await LOCATIONS_MODEL.getLocationByGoogleId(fbid);
    console.log(result);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
});

router.post("/", requireBody, async (req, res) => {
  let location = req.body;
  try {
    const addedLocation = await LOCATIONS_MODEL.add(location);
    return res.status(201).json({ message: "New location added", addedLocation })
  } catch (err) {
    return res.status(500).json(err.message)
  }
})

function requireBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    res.status(500).json({ message: "Please include request body" });
  }
}

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router;

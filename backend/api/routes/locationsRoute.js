// IMPORTS
const LOCATIONS_MODEL = require("../models/LocationsModel.js");

// EXPRESS ROUTER
const router = require("express").Router();

// - GET - //
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
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router;

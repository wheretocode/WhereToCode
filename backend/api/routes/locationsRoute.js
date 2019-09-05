// IMPORTS
const LOCATIONS_MODEL = require("../models/LocationsModel.js");

// EXPRESS ROUTER
const router = require("express").Router();

// - GET - //
router.get("/", async (req, res) => {
  console.log("locationsRouter get/");
  let result = await LOCATIONS_MODEL.getAll_locations();

  res.status(200).json(result);
});
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router;

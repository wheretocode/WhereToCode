const db = require("../config/knexConfig");

const getAll_locations = () => {
  return db("locations");
};

const getLocationById = id => {};

const updateLocation = () => {};

const deleteLocation = () => {};

// EXPORTS
module.exports = {
  getAll_locations,
  getLocationById,
  updateLocation,
  deleteLocation
};

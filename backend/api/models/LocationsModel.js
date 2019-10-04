const db = require("../../config/knexConfig");

const getAll_locations = () => {
  return db("locations");
};

function add(location) {
  return db("locations").insert(location).return(location);
}



const getLocationById = id => { };

const updateLocation = () => { };

const deleteLocation = () => { };

// EXPORTS
module.exports = {
  getAll_locations,
  getLocationById,
  updateLocation,
  deleteLocation,
  add
};

const db = require("../../config/knexConfig");

const getAll_locations = () => {
  return db("locations");
};



async function add(location) {
  location.map(async loc => {

    await db('locations').whereNot('locations.locoationGoogleId', loc.id).insert(loc).return(location);
  })
}



function getLocationByGoogleId(locationGoogleId) {
  return db("locations").where({ locationGoogleId })
};

const updateLocation = () => { };

const deleteLocation = () => { };

// EXPORTS
module.exports = {
  getAll_locations,
  updateLocation,
  deleteLocation,
  add,
  getLocationByGoogleId
};

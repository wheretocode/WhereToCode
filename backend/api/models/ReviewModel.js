const db = require("../../config/knexConfig");

module.exports = {
  getAll_reviews,
  getReviewById,
  getReviewsByUser,
  getReviewsByLocation,
  add,
  remove,
  update
};

function getAll_reviews() {
  return db("reviews");
}

function getReviewById(id) {
  return db("reviews").where({ id });
}

//reviews by user id
function getReviewsByUser(id) {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .join("locations as l", "r.location_id", "l.id")
    .select("l.locationName", "r.rating", "r.comments", "r.internet_rating")
    .where("u.id", id);
}

//reviews by location id 
function getReviewsByLocation(id) {
  return db("reviews as r")
    .join("users as u", "u.id", "r.user_id")
    .join("locations as l", "r.location_id", "l.id")
    .select("r.id", "r.rating", "r.comments", "r.internet_rating", "u.id", "u.userName")
    .where("l.id", id);
}



function add(review) {
  return db("reviews").insert(review).return(review);
}

function remove(id) {
  return db("reviews").where({ id }).del();
}

function update(id, update) {
  return db("reviews").where({ id }).update(update).return(update);
}


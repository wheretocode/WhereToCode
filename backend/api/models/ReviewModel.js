const db = require("../../config/knexConfig");

module.exports = {
  getAll_reviews,
  getReviewById,
  getReviewsByUser,
  getReviewsByLocation,
  add
};

function getAll_reviews() {
  return db("reviews");
}

function getReviewById(id) {
  return db("reviews").where({id});
}

function getReviewsByUser(id) {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .join("locations as l", "r.location_id", "l.id")
    .select("u.id", "u.userName")
    .where("r.id", id);
}

function getReviewsByLocation(id) {
  return db("reviews as r")
    .join("users as u", "u.id", "r.user_id")
        .join("locations as l", "r.location_id", "l.id")
    .select("l.id","l.locationName")
    .where("r.id", id);
}

function add(review) {
  return db("reviews").insert(review);
}

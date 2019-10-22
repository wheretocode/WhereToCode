const db = require("../../config/knexConfig");

module.exports = {
  getReviewById,
  getReviewsByUser,
  getReviewsByLocation,
  add,
  remove,
  update,
  firstHighestRating,
  getFirstReviewByLocation,
  getAll_reviewsWithUser
};



function getAll_reviewsWithUser() {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .select("r.rating", "r.comments", "r.internet_rating", "r.upload_speed", "r.download_speed", "r.secure_wifi", "r.user_id", "r.location_id", "u.userName")
}

function getReviewById(id) {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .select("r.rating", "r.comments", "r.internet_rating", "r.upload_speed", "r.download_speed", "r.secure_wifi", "r.user_id", "r.location_id", "u.userName")
    .where("r.id", id);
}

//reviews of each user by location id
function getReviewsByUser(id) {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .join("locations as l", "r.location_id", "l.id")
    .select("u.id as userId", "u.userName", "l.locationName", "r.rating", "r.comments", "r.internet_rating")
    .where("u.id", id);
}

//reviews by location id 
function getReviewsByLocation(id) {
  return db("reviews as r")
    .join("users as u", "u.id", "r.user_id")
    .join("locations as l", "r.location_id", "l.id")
    .select("r.id as ratingId", "r.rating ", "r.comments", "r.internet_rating", "u.id", "u.userName")
    .where("l.id", id);
}

//first review posted by location id 
function getFirstReviewByLocation(id) {
  return db("reviews as r")
    .join("users as u", "u.id", "r.user_id")
    .join("locations as l", "r.location_id", "l.id")
    .select("r.id as ratingId", "r.rating ", "r.comments", "r.internet_rating", "u.id", "u.userName")
    .where("l.id", id).first();
}



//first highest rated review by location id
function firstHighestRating(id) {
  return db("reviews as r")
    .join("users as u", "u.id", "r.user_id")
    .join("locations as l", "r.location_id", "l.id")
    .select("l.locationName", "r.id as ratingId", "r.rating as rating_score", "r.comments", "r.internet_rating", "r.secure_wifi", "u.id as userId", "u.userName")
    .where("l.id", id).andWhere(function () {
      this.max("r.rating")
    }).first()
}



function add(review) {
  return db("reviews")
    .insert(review).return(review);

}

function remove(id) {
  return db("reviews").where({ id }).del();
}

function update(id, update) {
  return db("reviews").where({ id }).update(update).return(update);
}


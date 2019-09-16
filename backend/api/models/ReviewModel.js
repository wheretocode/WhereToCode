const db = require("../../config/knexConfig");

module.exports = {
  getAll_reviews,
  add,
  getReviewById
};

function getAll_reviews() {
  return db("reviews");
}

function add(review) {
  return db("reviews").insert(review);
}

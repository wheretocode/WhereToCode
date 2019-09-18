const db = require("../../config/knexConfig");

module.exports = {
  getAll_reviews,
  add,
  remove
};

function getAll_reviews() {
  return db("reviews");
}

function add(review) {
  return db("reviews").insert(review).return(review);
}

function remove(id) {
  return db("reviews").where({id}).del();
}
const db = require("../../config/knexConfig");

module.exports = {
  getAll_reviews,
  add,
  remove,
  update
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

function update(id, update) {
  return db("reviews").where({id}).update(update).return(update);
}
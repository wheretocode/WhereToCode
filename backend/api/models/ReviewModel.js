const db = require("../../config/knexConfig");

module.exports = {
  getAll,
  add
};

function getAll() {
  return db("reviews");
}

function add(review) {
  return db("reviews").insert(review);
}

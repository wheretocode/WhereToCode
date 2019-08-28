const db = require("../../config/knexConfig");

module.exports = {
  getAll,
  add
};

function getAll() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

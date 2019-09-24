const db = require("../../config/knexConfig");

module.exports = {
  getAll_users,
  add,
  getUserById,
  updateUser,
};

function getAll_users() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

function getUserById(id) {
  return db("users").where({ id }).first();
}

function updateUser(firebase_user_id, changes) {
  return db("users").where({ firebase_user_id }).update(changes);
}

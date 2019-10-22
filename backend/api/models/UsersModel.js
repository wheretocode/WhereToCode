const db = require("../../config/knexConfig");

module.exports = {
  getAll_users,
  add,
  getUserById

};

function getAll_users() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}



function getUserById(firebase_user_id, changes) {
  return db("users").where({ firebase_user_id })
}

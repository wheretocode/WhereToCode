const knex = require("knex");
const knexConfig = require("../../knexfile.js");

const environment = process.env.ENVIRONMENT;
console.log(environment);
module.exports = knex(knexConfig[environment]);

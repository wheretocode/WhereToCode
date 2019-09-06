const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  await cleaner.clean(knex, {
    mode: "delete",
    ignoreTables: ["knew_migrations", "knex_migrations_lock"]
  });
};

//ENV Configuration
require("dotenv").config();

// Update with your config settings.

//ENVIRONMENT=development

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "HiveStack",
      user: "postgres",
      password: process.env.DB_Password
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./backend/migrations"
    },
    seeds: { directory: "./backend/seeds" }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    // ssl: true,
    migrations: {
      directory: "./backend/migrations",
      tableName: "knex_migrations"
    },
    seeds: { directory: "./backend/seeds" }
  }
};

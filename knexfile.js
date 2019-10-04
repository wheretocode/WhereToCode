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
  testing: {
    client: 'postgresql',
    connection: {
<<<<<<< HEAD
      database: "postgres",
      user: "postgres",
      password: process.env.DB_Password
    },

    migrations: {
      directory: './backend/migrations',
      tableName: "knex_testmigrations"
=======
      database: "Postgres", user: "postgres", password: process.env.DB_Password
    },
    useNullAsDefault: true,
    migrations: {
      directory: './backend/migrations',
>>>>>>> 127b1d6c6d6f1b6e0beb9c8fdfbe404d023fe4df
    },
    seeds: {
      directory: './backend/seeds',
    },
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

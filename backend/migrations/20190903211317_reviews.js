exports.up = async function(knex) {
  await knex.schema.createTable("reviews", tbl => {
    tbl.increments(); // primary key - reviews id
    tbl.integer("rating").notNullable(); // simple rating system 1-3 (may change)
    tbl.string("comments").notNullable(); // review comments
    tbl
      .integer("user_id") // foreign key - user id
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
  tbl
    .string("location_id") // foreign key - location id
    .unsigned()
    .references("id")
    .inTable("location")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("reviews");
};

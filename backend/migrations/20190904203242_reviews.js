exports.up = async function(knex) {
  await knex.schema.createTable("reviews", tbl => {
    tbl.increments(); // primary key - reviews id
    tbl.integer("rating").notNullable(); // simple rating system 1-3 (may change)
    tbl.string("comments").notNullable(); // review comments
    tbl.integer("internet_rating").notNullable();
    tbl.decimal("upload_speed");
    tbl.decimal("download_speed")
    tbl.boolean("secure_wifi").defaultTo(false);
    tbl
      .integer("user_id") // foreign key - user id
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("location_id") // foreign key - location id
      .references("id") // .references('location.id')
      .inTable("locations")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("reviews");
};

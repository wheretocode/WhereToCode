exports.up = async function(knex) {
  await knex.schema.createTable("reviews", tbl => {
    tbl.increments(); // primary key - reviews id
    tbl.integer("rating").notNullable(); // simple rating system 1-3 (may change)
    tbl.string("comments").notNullable(); // review comments
    tbl.integer("internet_rating").notNullable(); // star rating for overall internet speed/reliability
    tbl.decimal("upload_speed"); // upload speed in mb/s
    tbl.decimal("download_speed") // download speed in mb/s
    tbl.boolean("secure_wifi").defaultTo(false); // checkbox for if wifi is secure (could change to say open wifi instead)
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

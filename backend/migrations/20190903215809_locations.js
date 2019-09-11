exports.up = async function(knex) {
  await knex.schema.createTable("locations", tbl => {
    tbl.increments(); // primary key - location id
    tbl.string("locationName"); // name of location - not unique because cafe chains exist
    tbl
      .string("locationGoogleId")
      .notNullable()
      .unique(); //unique to differentiate between 1 Starbucks location from another
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("locations");
};

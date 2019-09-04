exports.up = async function(knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments(); // primary key - user id
    tbl.string("firebase_user_id"); // firebase id
    tbl
      .string("userName") // RonnySAlvarado
      .notNullable()
      .unique();
    tbl.string("userType").notNullable(); // Owner, Student, Programmer, Someone actually normal
    tbl.string("email"); // Rsalvarado777@gmail.com
    tbl.integer("reviewCount"); // 300
    tbl.timestamps(true, true); // when account was created
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};

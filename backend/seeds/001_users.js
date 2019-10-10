exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firebase_user_id: "5VSGCGzux6NVSFHn9Tnoe0XrUPD2",
          user_name: "Ronny_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "hy65tgv",
          user_name: "Reed_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "JgE4Y5pEXQZuTc0GWBOXu5yVt1Y2",
          user_name: "Bernard_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "YXRkpmEwMBhcU7rFth48ivrIu872",
          user_name: "Levi_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "jhgftr56y",
          user_name: "Ami_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "YXRkpmEwMBhcU7rFth48ivrIu872",
          user_name: "David_userName",
          email: "test@email.com"
        },
        {
          firebase_user_id: "rkth6gQQkKgAGWdNAPAnr3crFp73",
          user_name: "Diamond_userName",
          email: "test@email.com"
        }
      ]);
    });
};

/*tbl.increments(); // primary key - user id
    tbl.string("firebase_user_id"); // firebase id
    tbl
      .string("userName") // RonnySAlvarado
      .notNullable()
      .unique();
    tbl.string("userType").notNullable(); // Owner, Student, Programmer, Someone actually normal
    tbl.string("email"); // Rsalvarado777@gmail.com
    tbl.integer("reviewCount"); // 300
    tbl.timestamps(true, true); // when account was created
*/

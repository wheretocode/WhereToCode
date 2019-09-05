exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        {
          locationName: "testLocation_1",
          locationGoogleId: "jh5678ujklo0987udsew2qwsdfdr"
        },
        {
          locationName: "testLocation_2",
          locationGoogleId: "jkjhy65rtfdsew345tyhu2qwsdfdr"
        },
        {
          locationName: "testLocation_3",
          locationGoogleId: "jhmjhgfrty7654ertgfrgfdsdfdr"
        },
        {
          locationName: "testLocation_4",
          locationGoogleId: "jhmjhgfrty7654ert"
        }
      ]);
    });
};

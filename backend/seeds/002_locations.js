exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        {
          location_name: "testLocation_1",
          location_google_id: "jh5678ujklo0987udsew2qwsdfdr2222"
        },
        {
          location_name: "testLocation_2",
          location_google_id: "jkjhy65rtfdsew345tyhu2qwsdfd2222"
        },
        {
          location_name: "testLocation_3",
          location_google_id: "jhmjhgfrty7654ertgfrgfdsdfdr222"
        },
        {
          location_name: "testLocation_4",
          location_google_id: "jhmjhgfrty7654ert2222"
        }
      ]);
    });
};

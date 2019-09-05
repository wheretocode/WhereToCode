exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          rating: 2,
          comments: "Mediocre chicken.",
          user_id: 1,
          location_id: 1
        },
        {
          rating: 3,
          comments: "Best chicken I've ever had!",
          user_id: 1,
          location_id: 1
        },
        {
          rating: 1,
          comments: "HORRIBLE CHICKEN",
          user_id: 3,
          location_id: 2
        },
        {
          rating: 2,
          comments: "Good Rooster",
          user_id: 2,
          location_id: 3
        }
      ]);
    });
};

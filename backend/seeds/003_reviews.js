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
          internet_rating: 2,
          upload_speed: 2.51,
          download_speed: 3,
          secure_wifi: false,
          user_id: 1,
          location_id: 1
        },
        {
          rating: 3,
          comments: "Best chicken I've ever had!",
          internet_rating: 3,
          upload_speed: 5.2,
          download_speed: 8.59,
          secure_wifi: false,
          user_id: 1,
          location_id: 2
        },
        {
          rating: 1,
          comments: "HORRIBLE CHICKEN",
          internet_rating: 1,
          upload_speed: 2,
          download_speed: 3.5,
          secure_wifi: false,
          user_id: 3,
          location_id: 2
        },
        {
          rating: 2,
          comments: "Good Rooster",
          internet_rating: 2,
          upload_speed: 4.2,
          download_speed: 10.3,
          secure_wifi: true,
          user_id: 2,
          location_id: 3
        }
      ]);
    });
};

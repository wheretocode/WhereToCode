exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Ronny" },
        { id: 2, name: "Reed" },
        { id: 3, name: "Bernard" },
        { id: 4, name: "Levi" },
        { id: 5, name: "Ami" },
        { id: 6, name: "David" },
        { id: 7, name: "Diamond" }
      ]);
    });
};

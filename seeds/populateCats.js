
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Harrison', image_url: '', characteristic_id: 1},
        {id: 2, name: 'JV', image_url: '', characteristic_id: 2},
        {id: 3, name: 'Sarah', image_url: '', characteristic_id: 3}
      ]);
    });
};

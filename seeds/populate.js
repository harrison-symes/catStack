
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characteristics').del()
    .then(function () {
      // Inserts seed entries
      return knex('characteristics').insert([
        {characteristic_id: 1, description: 'Hairy'},
        {characteristic_id: 2, description: 'Sheepish'},
        {characteristic_id: 3, description: 'Caring'}
      ]);
    });
};

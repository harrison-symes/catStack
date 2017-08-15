exports.seed = function(knex, Promise) {

  return knex('cartoons').del()
    .then(function () {

      return knex('cartoons').insert([
        {cartoon_id: 1, title: 'Zootopia'},
        {cartoon_id: 2, title: 'Frozen'},
        {cartoon_id: 3, title: 'The Smurfs'}
      ]);
    });
};

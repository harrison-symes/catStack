
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cartoons', (table) => {
    table.increments('cartoon_id')
    table.string('title')
  

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cartoons')
};

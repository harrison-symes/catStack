
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('characteristics', table => {
    table.increments('characteristic_id')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characteristics')
};

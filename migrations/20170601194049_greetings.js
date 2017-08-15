
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image_url')
    table.integer('characteristic_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
};

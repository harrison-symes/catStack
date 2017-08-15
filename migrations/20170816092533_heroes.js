
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('heroes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('image_url')
    table.integer('cartoon_id')


  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('heroes')
};

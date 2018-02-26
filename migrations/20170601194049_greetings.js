exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image_url')
    table.integer('characteristic_id')
  })
}

exports.down = function(knex, Promise) {
<<<<<<< HEAD
  return knex.schema.dropTableIfExists('cats')
};
=======
  return knex.schema.dropTableIfExists('greetings')
}
>>>>>>> bccedf20e633f35abaeb3d0bd1d818b81df80c5c

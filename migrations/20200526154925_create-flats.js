
exports.up = function(knex) {
  return knex.schema.createTable('flats',(table) => {
    table.increments();
    table.string('title');
    table.integer('price');
    table.integer('floorArea');
    table.string('country');
    table.integer('zip');
    table.string('city');
    table.string('street');
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('flats')
};
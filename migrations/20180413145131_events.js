
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (t) => {
    t.increments('id').primary();
    t.integer('user_id').unsigned().notNullable();
    t.foreign('user_id').references('id').inTable('user');
    t.string('event_name');
    t.text('location');
    t.text('description');
    t.boolean('display').defaultTo('true');
    t.string('event_link');
    t.string('event_color');
    t.integer('duration');
    t.string('timezone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events')
};

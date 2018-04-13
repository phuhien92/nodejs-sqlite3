
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_event', (t) => {
        t.increments('id').primary();
        t.integer('user_id').unsigned().notNullable();
        t.foreign('user_id').references('id').inTable('user');
        t.integer('event_id').unsigned().notNullable();
        t.foreign('event_id').references('id').inTable('events');
        t.string('from');
        t.string('to');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_event')
};

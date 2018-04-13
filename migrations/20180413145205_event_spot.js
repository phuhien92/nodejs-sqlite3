
exports.up = function(knex, Promise) {
    return knex.schema.createTable('event_spot', (t) => {
        t.increments('id').primary();
        t.integer('user_id').unsigned().notNullable();
        t.foreign('user_id').references('id').inTable('user');
        t.integer('event_id').unsigned().notNullable();
        t.foreign('event_id').references('id').inTable('events');
        t.integer('invitee_id').unsigned().notNullable();
        t.foreign('invitee_id').references('id').inTable('invitee');
        t.string('event_date');
        t.string('from');
        t.string('to');
        t.boolean('available').defaultTo('true');
        t.string('rescheduling_code');
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('event_spot')
};

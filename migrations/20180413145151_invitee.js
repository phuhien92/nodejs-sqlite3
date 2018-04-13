
exports.up = function(knex, Promise) {
    return knex.schema.createTable('invitee', (t) => {
        t.increments('id').primary();
        t.string('fullname');
        t.string('email');
        t.text('reason');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('invitee')
};

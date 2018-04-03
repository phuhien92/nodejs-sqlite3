
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(t) {
        t.increments('id').primary()
        t.string('firstname').notNullable()
        t.string('lastname').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};

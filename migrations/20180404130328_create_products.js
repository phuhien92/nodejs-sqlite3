
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', function(t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.float('price').defaultTo(0)
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products')
};
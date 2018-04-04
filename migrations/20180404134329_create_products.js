
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', function(t) {
        t.increments('id').primary()
        t.string('name').notNull()
        t.text('description').notNull()
        t.float('price').defaultTo(0)
        t.string('full_image')
        t.integer('stock')
        t.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products')
};
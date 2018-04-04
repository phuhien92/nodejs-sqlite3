
exports.up = function(knex, Promise) {
    return knex.schema.dropTable('products')
};

exports.down = function(knex, Promise) {
    return knex.schema.table('products')
};


exports.up = function(knex, Promise) {
    return knex.schema.alterTable('products', function(t) {
        t.string('img_url'); //add
        t.integer('qty').toDefault(0);// add
        t.text('description').alter();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('products', t => {
        t.dropColumn('img_url');
        t.dropColumn('qty');
        t.string('description').notNull();
    })
};
